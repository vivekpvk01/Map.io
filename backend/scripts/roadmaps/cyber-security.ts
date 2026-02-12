export const cyberSecurityRoadmap = {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Complete roadmap to becoming a professional Cyber Security expert",
    isOfficial: true,

    nodes: [

        // ======================
        // FOUNDATION LAYER
        // ======================

        {
            roadmapId: "cyber-security",
            id: "networking",
            position: { x: 400, y: 0 },
            data: {
                label: "Networking Fundamentals",
                description: "TCP/IP, DNS, HTTP, firewalls, routing, ports.",
                difficulty: "beginner",
                resources: [
                    { label: "Cisco Networking Basics", url: "https://www.netacad.com/courses/networking", type: "free" }
                ],
            },
        },

        {
            roadmapId: "cyber-security",
            id: "linux",
            position: { x: 150, y: 140 },
            data: {
                label: "Linux & Command Line",
                description: "Terminal usage, permissions, processes.",
                difficulty: "beginner",
                resources: [
                    { label: "Linux Journey", url: "https://linuxjourney.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "cyber-security",
            id: "programming",
            position: { x: 650, y: 140 },
            data: {
                label: "Programming Basics",
                description: "Python, scripting, automation basics.",
                difficulty: "beginner",
                resources: [
                    { label: "Python Docs", url: "https://docs.python.org/3/", type: "free" }
                ],
            },
        },

        // ======================
        // SECURITY CORE
        // ======================

        {
            roadmapId: "cyber-security",
            id: "cryptography",
            position: { x: 400, y: 280 },
            data: {
                label: "Cryptography",
                description: "Hashing, encryption, TLS, symmetric vs asymmetric.",
                difficulty: "intermediate",
                resources: [
                    { label: "Crypto 101", url: "https://crypto101.io/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "cyber-security",
            id: "web-security",
            position: { x: 150, y: 440 },
            data: {
                label: "Web Security",
                description: "XSS, CSRF, SQL Injection, OWASP Top 10.",
                difficulty: "intermediate",
                resources: [
                    { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "cyber-security",
            id: "network-security",
            position: { x: 650, y: 440 },
            data: {
                label: "Network Security",
                description: "IDS/IPS, VPNs, packet analysis, firewalls.",
                difficulty: "intermediate",
                resources: [
                    { label: "Wireshark Docs", url: "https://www.wireshark.org/docs/", type: "free" }
                ],
            },
        },

        // ======================
        // SPECIALIZATION BRANCHES
        // ======================

        {
            roadmapId: "cyber-security",
            id: "penetration-testing",
            position: { x: 150, y: 620 },
            data: {
                label: "Penetration Testing",
                description: "Kali Linux, Metasploit, ethical hacking.",
                difficulty: "advanced",
                resources: [
                    { label: "Hack The Box", url: "https://www.hackthebox.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "cyber-security",
            id: "cloud-security",
            position: { x: 650, y: 620 },
            data: {
                label: "Cloud Security",
                description: "IAM, cloud misconfigurations, DevSecOps.",
                difficulty: "advanced",
                resources: [
                    { label: "AWS Security Docs", url: "https://docs.aws.amazon.com/security/", type: "free" }
                ],
            },
        },

        // ======================
        // ADVANCED LAYER
        // ======================

        {
            roadmapId: "cyber-security",
            id: "incident-response",
            position: { x: 400, y: 780 },
            data: {
                label: "Incident Response",
                description: "Threat detection, response planning, forensics.",
                difficulty: "advanced",
                resources: [
                    { label: "SANS Incident Response", url: "https://www.sans.org/white-papers/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "cyber-security",
            id: "security-architecture",
            position: { x: 400, y: 940 },
            data: {
                label: "Security Architecture",
                description: "Zero trust, risk modeling, enterprise security design.",
                difficulty: "advanced",
                resources: [
                    { label: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", type: "free" }
                ],
            },
        }
    ],

    edges: [

        // Foundation merges
        { roadmapId: "cyber-security", id: "e1", source: "networking", target: "linux" },
        { roadmapId: "cyber-security", id: "e2", source: "networking", target: "programming" },

        // Into cryptography
        { roadmapId: "cyber-security", id: "e3", source: "linux", target: "cryptography" },
        { roadmapId: "cyber-security", id: "e4", source: "programming", target: "cryptography" },

        // Core branching
        { roadmapId: "cyber-security", id: "e5", source: "cryptography", target: "web-security" },
        { roadmapId: "cyber-security", id: "e6", source: "cryptography", target: "network-security" },

        // Specializations
        { roadmapId: "cyber-security", id: "e7", source: "web-security", target: "penetration-testing" },
        { roadmapId: "cyber-security", id: "e8", source: "network-security", target: "cloud-security" },

        // Merge into advanced
        { roadmapId: "cyber-security", id: "e9", source: "penetration-testing", target: "incident-response" },
        { roadmapId: "cyber-security", id: "e10", source: "cloud-security", target: "incident-response" },

        { roadmapId: "cyber-security", id: "e11", source: "incident-response", target: "security-architecture" }
    ]
}
