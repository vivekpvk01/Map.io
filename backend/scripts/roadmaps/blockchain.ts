export const blockchainRoadmap = {
    id: "blockchain",
    title: "Blockchain Developer",
    description: "Complete roadmap to becoming a professional Blockchain developer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "blockchain",
            id: "basics",
            position: { x: 400, y: 0 },
            data: {
                label: "Blockchain Fundamentals",
                description: "Understand blocks, hashing, consensus, decentralization.",
                difficulty: "beginner",
                resources: [
                    { label: "Blockchain Basics (IBM)", url: "https://www.ibm.com/topics/blockchain", type: "free" },
                    { label: "Blockchain Explained (Investopedia)", url: "https://www.investopedia.com/terms/b/blockchain.asp", type: "free" }
                ],
            },
        },
        {
            roadmapId: "blockchain",
            id: "cryptography",
            position: { x: 400, y: 140 },
            data: {
                label: "Cryptography",
                description: "Learn hashing, digital signatures, public/private keys.",
                difficulty: "beginner",
                resources: [
                    { label: "Crypto 101", url: "https://crypto101.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "blockchain",
            id: "ethereum",
            position: { x: 400, y: 280 },
            data: {
                label: "Ethereum",
                description: "Understand Ethereum blockchain and EVM.",
                difficulty: "intermediate",
                resources: [
                    { label: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "blockchain",
            id: "solidity",
            position: { x: 400, y: 420 },
            data: {
                label: "Solidity",
                description: "Smart contract programming using Solidity.",
                difficulty: "intermediate",
                resources: [
                    { label: "Solidity Docs", url: "https://docs.soliditylang.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "blockchain",
            id: "smart-contracts",
            position: { x: 400, y: 560 },
            data: {
                label: "Smart Contracts",
                description: "Write, test and deploy smart contracts.",
                difficulty: "intermediate",
                resources: [
                    { label: "Hardhat Docs", url: "https://hardhat.org/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "blockchain",
            id: "web3",
            position: { x: 400, y: 700 },
            data: {
                label: "Web3 & DApps",
                description: "Interact with blockchain using Web3.js / Ethers.js.",
                difficulty: "intermediate",
                resources: [
                    { label: "Ethers.js Docs", url: "https://docs.ethers.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "blockchain",
            id: "security",
            position: { x: 400, y: 840 },
            data: {
                label: "Blockchain Security",
                description: "Reentrancy attacks, audits, gas optimization.",
                difficulty: "advanced",
                resources: [
                    { label: "Smart Contract Security Guide", url: "https://consensys.github.io/smart-contract-best-practices/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "blockchain",
            id: "defi-nft",
            position: { x: 400, y: 980 },
            data: {
                label: "DeFi & NFTs",
                description: "Build decentralized finance apps and NFT platforms.",
                difficulty: "advanced",
                resources: [
                    { label: "OpenZeppelin Docs", url: "https://docs.openzeppelin.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "blockchain", id: "e1", source: "basics", target: "cryptography" },
        { roadmapId: "blockchain", id: "e2", source: "cryptography", target: "ethereum" },
        { roadmapId: "blockchain", id: "e3", source: "ethereum", target: "solidity" },
        { roadmapId: "blockchain", id: "e4", source: "solidity", target: "smart-contracts" },
        { roadmapId: "blockchain", id: "e5", source: "smart-contracts", target: "web3" },
        { roadmapId: "blockchain", id: "e6", source: "web3", target: "security" },
        { roadmapId: "blockchain", id: "e7", source: "security", target: "defi-nft" }
    ]
}
