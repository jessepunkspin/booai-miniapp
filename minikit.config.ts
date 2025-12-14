const ROOT_URL = process.env.ROOT_URL || "https://example.com";

export const minikitConfig = {
  ROOT_URL,
  accountAssociation: {},
  miniapp: {
    name: "BooAI",
    description: "Boost Farcaster posts and reward engaged users with BOOAI tokens.",
    developer: "@yourhandle",
    url: ROOT_URL,
    icon: `${ROOT_URL}/icon.png`
  }
};

export default minikitConfig;
