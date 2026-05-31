import { scoreLead } from './chatFlow';

const FIRST_NAMES = [
  'James', 'Maria', 'David', 'Priya', 'Michael', 'Sophia', 'Daniel', 'Olivia',
  'Robert', 'Emma', 'William', 'Aisha', 'Joseph', 'Hannah', 'Chris', 'Lily',
  'Andrew', 'Nina', 'Ryan', 'Elena', 'Kevin', 'Maya', 'Brian', 'Zoe',
];

const LAST_NAMES = [
  'Johnson', 'Garcia', 'Smith', 'Patel', 'Brown', 'Lee', 'Wilson', 'Martinez',
  'Taylor', 'Anderson', 'Thomas', 'Moore', 'Jackson', 'White', 'Harris', 'Clark',
];

const CITIES = [
  'Austin, TX', 'Denver, CO', 'Miami, FL', 'Seattle, WA', 'Chicago, IL',
  'Phoenix, AZ', 'Portland, OR', 'Nashville, TN', 'Atlanta, GA', 'Boston, MA',
  'San Diego, CA', 'Charlotte, NC', 'Dallas, TX', 'Tampa, FL', 'Raleigh, NC',
];

const INTENTS = ['buy', 'rent', 'viewing', 'buy', 'rent', 'viewing', 'buy'];
const STATUSES = ['new', 'new', 'contacted', 'qualified', 'closed', 'contacted', 'new'];

function pick(arr, i) {
  return arr[i % arr.length];
}

function daysAgo(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

/** Deterministic mock pool for dashboard demo */
export function generateMockLeads(count = 42) {
  return Array.from({ length: count }, (_, i) => {
    const first = pick(FIRST_NAMES, i * 3 + 7);
    const last = pick(LAST_NAMES, i * 5 + 2);
    const name = `${first} ${last}`;
    const email = `${first.toLowerCase()}.${last.toLowerCase()}${i % 10}@email.com`;
    const location = pick(CITIES, i * 2 + 1);
    const intent = pick(INTENTS, i);
    const status = pick(STATUSES, i + 3);

    return {
      id: `mock-${i + 1}`,
      name,
      email,
      location,
      intent,
      score: scoreLead(intent, location),
      status,
      createdAt: daysAgo(i % 28),
      isMock: true,
    };
  });
}

export const MOCK_LEADS = generateMockLeads(42);

export function mergeLeads(captured = [], mock = MOCK_LEADS) {
  const capturedIds = new Set(captured.map((l) => l.email?.toLowerCase()));
  const filtered = mock.filter((m) => !capturedIds.has(m.email.toLowerCase()));
  return [...captured.map((l) => ({ ...l, isMock: false })), ...filtered].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}
