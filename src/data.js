// Single source of truth for page content. Mirrors ~/Desktop/Resume/main.tex.

export const profile = {
  name: 'Keshav Saini',
  role: 'SDE-1, Backend',
  company: 'HaBuild',
  location: 'Bengaluru, India',
  email: 'keshav.sai0311@gmail.com',
  phone: '+91 80827 47003',
  github: 'https://github.com/keshavsaini0311',
  linkedin: 'https://www.linkedin.com/in/keshav-saini-190a53256/',
  resume: '/Keshav_Saini_Resume.pdf',
  lede:
    'I build the backend behind a consumer app with 100K+ daily users — the config engine, the auth flow, the queues that hold it together. Most of the job is making something faster, then making it boring.',
}

// Hero console. Every record is a real thing that happened in production.
export const stream = [
  { topic: 'members.migrated', detail: '2cr+ records moved to the new system' },
  { topic: 'service.shipped', detail: 'ux-service · empty repo → prod in 7 days' },
  { topic: 'home.config.published', detail: 'cohort rules live in minutes, no app release' },
  { topic: 'read.routed', detail: '98% of reads → postgres replicas' },
  { topic: 'cache.warm', detail: 'dual redis · p50 200ms → 100ms' },
  { topic: 'otp.delivered', detail: 'sms → whatsapp fallback · 96% → 98.4%' },
  { topic: 'kafka.migrated', detail: 'confluent · payment, notification, chat' },
  { topic: 'idor.closed', detail: 'ownership checks across 5 core services' },
  { topic: 'discovery.resolved', detail: 'dynamic service urls across 9 services' },
  { topic: 'qr.session.opened', detail: 'redis lifecycle · rate-limited polling' },
  { topic: 'streak.recovered', detail: 'daily games · streak lives · IST boundaries' },
  { topic: 'pr.merged', detail: '703 merged · 28 repos · 14 months' },
  { topic: 'review.approved', detail: '67 reviews · 13 teammates' },
]

export const ledger = [
  {
    metric: 'Member records',
    before: 'legacy store',
    after: '2cr+ moved',
    note: 'Moved the entire member base — over twenty million records — onto a new system.',
  },
  {
    metric: 'Read latency, p50',
    before: '200 ms',
    after: '100 ms',
    note: 'Routed 98%+ of reads to Postgres replicas behind a two-tier Redis cache.',
  },
  {
    metric: 'OTP delivery rate',
    before: '96%',
    after: '98.4%',
    note: 'Automatic fallback across SMS, WhatsApp and email — ~60% fewer failed deliveries, at a lower cost per message.',
  },
  {
    metric: 'Time to change the home screen',
    before: 'an app release',
    after: 'minutes',
    note: 'A rule engine and admin UI let product target cards and banners by attendance, subscription and challenge state.',
  },
  {
    metric: 'Endpoints exposing IDOR',
    before: 'unchecked',
    after: 'none',
    note: 'Ownership validation across every endpoint of 5 core services, payment and subscription included.',
  },
  {
    metric: 'ux-service',
    before: 'empty repo',
    after: 'production',
    note: 'Seven days. Stories, feed and push, reading off a materialized visibility window.',
  },
]

export const systems = [
  {
    name: 'Member migration',
    scale: '2cr+ records',
    body: 'Moved the entire member base — over two crore records — off the legacy store and onto a new system, with the old and new paths reconciled before the cutover.',
    // stack: pending — tell me the source and target and I will fill these in.
    stack: [],
  },
  {
    name: 'Home Screen Configuration',
    scale: '100K+ DAU',
    body: 'A rule engine plus admin UI that decides what every user sees on open. Product and ops target cohorts by attendance, subscription state and challenge progress, and ship it without waiting on a mobile release.',
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'React'],
  },
  {
    name: 'ux-service',
    scale: '0 → prod in 7 days',
    body: 'Community stories, the feed and push notifications. Feed reads come off a materialized visibility window instead of a fan-out query. It now hosts the home-screen rule engine.',
    stack: ['NestJS', 'MongoDB', 'Redis'],
  },
  {
    name: 'Daily games platform',
    scale: '235 PRs',
    body: 'Puzzle, quiz and Sudoku APIs with per-difficulty generation, answer shuffling and leaderboards. Streaks survive a missed day through "streak lives", and every day boundary is IST-aware.',
    stack: ['NestJS', 'Prisma', 'Redis', 'PostgreSQL'],
  },
  {
    name: 'Auth & identity',
    scale: '6+ services',
    body: 'Multi-provider OTP with cross-channel fallback, QR-code login on a Redis session lifecycle, external-token exchange, and a hardened JWT payload in the shared auth SDK.',
    stack: ['NestJS', 'Redis', 'JWT', 'GrowthBook'],
  },
  {
    name: 'Service discovery',
    scale: '9 services',
    body: 'A central resolver for service URLs, rolled out across user, auth, notification, payment, chat, leaderboard, referral, offer and tools — replacing hardcoded endpoints everywhere.',
    stack: ['TypeScript', 'Node.js'],
  },
  {
    name: 'Platform plumbing',
    scale: '7+ repos',
    body: 'Kafka client migration to Confluent with topic restructuring, OpenTelemetry instrumentation, and shared reusable GitHub Actions workflows replacing per-repo CI.',
    stack: ['Kafka', 'OpenTelemetry', 'Docker', 'GitHub Actions'],
  },
]

export const projects = [
  {
    name: 'Video Watch Party',
    period: 'Dec 2024 — Mar 2025',
    body: 'Synchronized playback for 10+ peers in a room. Media moves peer-to-peer over WebRTC, so the server never relays a stream.',
    stack: ['Next.js', 'WebRTC', 'shadcn/ui'],
    code: 'https://github.com/keshavsaini0311/vid-watchparty',
    live: 'https://vid-watchparty.onrender.com/',
  },
  {
    name: 'Social Media App',
    period: 'Jul — Aug 2024',
    body: 'A feed built on paginated MongoDB aggregation, with real-time messaging over Socket.io and optimistic updates on the client.',
    stack: ['MERN', 'Socket.io', 'Chakra UI'],
    code: 'https://github.com/keshavsaini0311/social-media',
    live: 'https://social-media-9ll3.onrender.com/',
  },
]

export const stack = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'C++', 'Python', 'Java', 'SQL'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'REST', 'WebSocket', 'WebRTC'] },
  { group: 'Data & messaging', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Apache Kafka', 'Prisma', 'AWS SQS'] },
  { group: 'Operations', items: ['Docker', 'GitHub Actions', 'OpenTelemetry', 'AWS ECS', 'Linux'] },
]

export const proof = [
  { label: 'Codeforces', value: 'Expert · 1605', note: 'Top 2000 in India', href: 'https://codeforces.com/profile/keshav.sai0311' },
  { label: 'LeetCode', value: 'Top 4% · 1900+', note: '800+ problems solved', href: 'https://leetcode.com/u/user6605NH/' },
  { label: 'CodeChef', value: '4★ · Div 2', note: 'Top 3K in India', href: 'https://www.codechef.com/users/keshav0311' },
  { label: 'IIIT Nagpur', value: 'B.Tech · 8.16', note: 'Electronics & Communication, 2026', href: null },
]
