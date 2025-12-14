export const MIN_BOOST = 500_000;
export const PLATFORM_FEE_RATE = 0.02;

export function computePlatformFee(amount: number) {
  return Math.floor(amount * PLATFORM_FEE_RATE);
}

export function computeAvailablePool(amount: number) {
  return amount - computePlatformFee(amount);
}

export function computePerPerson(pool: number, people: number) {
  if (people <= 0) return 0;
  return Math.floor(pool / people);
}

export type Engagement = {
  userId: string;
  actions: { like?: boolean; comment?: boolean; repost?: boolean };
  timestamp: number;
};

export type Boost = {
  id: string;
  author: string;
  postUrl: string;
  amount: number; // total deposited
  createdAt: number;
  engagements: Engagement[];
  released: boolean;
};

// Simple helper: count unique people who have at least one active engagement
export function uniqueEngagedCount(boost: Boost) {
  const map = new Map<string, Engagement>();
  for (const e of boost.engagements) {
    map.set(e.userId, e);
  }
  return map.size;
}

// Verify eligibility after 24h: engagement is valid if user still has at least one action
export function isEngagementValid(e: Engagement) {
  return !!(e.actions.like || e.actions.comment || e.actions.repost);
}

// Calculate payouts: returns per person and map of userId to amount
export function calculatePayouts(boost: Boost) {
  const fee = computePlatformFee(boost.amount);
  const pool = computeAvailablePool(boost.amount);
  // Only count unique engaged users with at least one action
  const engaged = boost.engagements.filter(isEngagementValid).map((e) => e.userId);
  const unique = Array.from(new Set(engaged));
  const count = unique.length;
  const perPerson = computePerPerson(pool, count);
  const payouts: Record<string, number> = {};
  for (const uid of unique) payouts[uid] = perPerson;
  return { fee, pool, count, perPerson, payouts };
}
