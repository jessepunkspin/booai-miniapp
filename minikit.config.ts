export const ROOT_URL = "https://booai-miniapp-two.vercel.app";

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjE0MzY3MDIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg1NkE4YTMzZUU1Q0VCNDE1M0NEMTVCMjFkQ0M5QThCMzJlYjRFRDU0In0",
    payload: "eyJkb21haW4iOiJib29haS1taW5pYXBwLXR3by52ZXJjZWwuYXBwIn0",
    signature: "xAHLY/48mtQxICRfQqacNBc212YoN8NaMrwn+ANC5L8e78cUYt3eEXxyMeVwM30nmG1FmMkeJTZQkOgX0ukJIhw="
  },
  miniapp: {
    version: "1",
    name: "BooAI",
    subtitle: "Earn by Engaging",
    description:
      "Boost your Farcaster posts with BOOAI tokens. Earn by engaging with boosted content. Equal rewards distributed after 24-hour verification.",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#1a0b2e",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["engagement", "rewards", "social", "crypto", "base", "farcaster"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Earn BOOAI tokens by engaging with posts",
    ogTitle: "BooAI - Earn by Engaging",
    ogDescription: "Boost your posts or earn tokens by engaging with boosted content on Farcaster",
    ogImageUrl: `${ROOT_URL}/og-image.png`
  }
} as const;
