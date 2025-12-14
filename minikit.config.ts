const ROOT_URL = process.env.ROOT_URL || "https://booai-miniapp-two.vercel.app";

export const minikitConfig = {
  ROOT_URL,
  accountAssociation: {
    header: "eyJmaWQiOjEwNzk5MjIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg3NWNhQTExM0Y1NzJhNDA3RWRiOGE0OUZjZTFjZjk0MTBFZjE4ODFjIn0",
    payload: "eyJkb21haW4iOiJib29haS1taW5pYXBwLXR3by52ZXJjZWwuYXBwIn0",
    signature: "C/eFNEyDMGBpZMeppWweu7skqc9a0hWd/unVYQIE+CxPZpwUsTQQfjoHCWYO2eimj0SK5CX++CoJvVZ7A73Aahw="
  },
  miniapp: {
    name: "BooAI",
    description: "Boost Farcaster posts and reward engaged users with BOOAI tokens.",
    developer: "@yourhandle",
    url: ROOT_URL,
    icon: `${ROOT_URL}/icon.png`
  },
  frame: {
    version: "1",
    name: "Example Frame",
    iconUrl: "https://booai-miniapp-two.vercel.app/icon.png",
    homeUrl: "https://booai-miniapp-two.vercel.app",
    imageUrl: "https://booai-miniapp-two.vercel.app/image.png",
    buttonTitle: "Check this out",
    splashImageUrl: "https://booai-miniapp-two.vercel.app/splash.png",
    splashBackgroundColor: "#eeccff",
    webhookUrl: "https://booai-miniapp-two.vercel.app/api/webhook"
  }
};

export default minikitConfig;
