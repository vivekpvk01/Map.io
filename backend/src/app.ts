import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import { env } from "./config/env";

export function createApp(): Express {
  const app = express();

  // 🔥 PRODUCTION SAFE CORS
  app.use(
    cors({
      origin: [
        "https://getatlas.tech",
        "https://www.getatlas.tech",
      ],
      credentials: true,
    })
  );

  // 🔥 IMPORTANT: allow preflight properly
  app.options("*", cors({
    origin: [
      "https://getatlas.tech",
      "https://www.getatlas.tech",
      "https://map-jpurb19v0-pinipevivek01-2862s-projects.vercel.app",
    ],
    credentials: true,
  }));

  app.use(express.json());
  app.use(cookieParser());

  app.use("/api", routes);

  app.get("/health", (req, res) => {
    res.json({ success: true });
  });

  return app;
}