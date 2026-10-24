// Single source of truth for page content. Mirrors ~/Desktop/Life/career/resume/main.tex.

export const profile = {
  name: 'Keshav Saini',
  role: 'SDE-1, Backend',
  company: 'HaBuild',
  location: 'Bengaluru, India',
  email: 'ksv.work0311@gmail.com',
  phone: '+91 80827 47003',
  github: 'https://github.com/keshavsaini0311',
  linkedin: 'https://www.linkedin.com/in/keshav-saini-190a53256/',
  resume: '/Keshav_Saini_Resume.pdf',
  lede:
    'I build backend systems for a consumer app with 100K+ daily users. My recent work covers a server-driven UI platform, version control for screens, and configuration promotion across environments. I also work on caching, authentication and reliable event processing.',
}

// Illustrative activity, based on verified engineering work. Not a live feed.
export const stream = [
  { topic: 'screen.rebased', detail: 'three-way merge · field-level conflict choices' },
  { topic: 'config.promoted', detail: 'selective diffs · dependency remapping' },
  { topic: 'sdk.checked', detail: 'semver gating for compatible components' },
  { topic: 'service.shipped', detail: 'community backend · zero to prod in a week' },
  { topic: 'home.config.published', detail: 'cohort rules live in minutes, no app release' },
  { topic: 'read.routed', detail: '98% of reads → postgres replicas' },
  { topic: 'cache.warm', detail: 'dual redis · p50 200ms → 100ms' },
  { topic: 'otp.delivered', detail: 'sms → whatsapp fallback · 96% → 98.4%' },
  { topic: 'kafka.migrated', detail: 'confluent · payment, notification, chat' },
  { topic: 'idor.closed', detail: 'ownership checks across 5 core services' },
  { topic: 'discovery.resolved', detail: 'dynamic service urls across 9 services' },
  { topic: 'qr.session.opened', detail: 'redis lifecycle · rate-limited polling' },
  { topic: 'streak.recovered', detail: 'daily games · streak lives · IST boundaries' },
]

export const recentWork = [
  {
    name: 'Version control for app screens',
    period: 'October 2026',
    problem: 'Two editors can change the same screen while a draft is still open. Publishing an old draft must not silently overwrite newer work.',
    approach: 'Built drafts, three-way rebasing, field-level conflict choices, history and reverts. Compare-and-swap checks and MongoDB transactions guard the final write.',
    result: 'Editors resolve conflicting fields before merging, and stale writes are rejected. Built the backend and the admin workflow together.',
    stack: ['TypeScript', 'NestJS', 'MongoDB', 'React'],
  },
  {
    name: 'Configuration promotion across environments',
    period: 'October 2026',
    problem: 'Moving configuration between environments can overwrite a target hotfix or leave references pointing at objects from the source environment.',
    approach: 'Built live diffs, selective changes and dependency remapping, with checks that reject a preview if the underlying state changes before apply.',
    result: 'Teams can preserve target hotfixes through selection and review the exact changes before applying them.',
    stack: ['TypeScript', 'NestJS', 'MongoDB', 'React'],
  },
]

export const ledger = [
  {
    metric: 'Redis hot-key traffic',
    before: '30K+ reads/sec on one key',
    after: 'one read per pod per TTL',
    note: 'Added an in-process cache ahead of Redis for infrequently changing home-screen configuration. This addressed a separate bottleneck from PostgreSQL read latency.',
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
    note: 'Automatic fallback across SMS, WhatsApp and email reduced failed deliveries by about 60%.',
  },
  {
    metric: 'Time to change the home screen',
    before: 'an app release',
    after: 'minutes',
    note: 'A rule engine and admin UI let product target cards and banners by attendance, subscription and challenge state.',
  },
  {
    metric: 'Authorization hardening',
    before: 'missing ownership checks',
    after: '5 core services hardened',
    note: 'Closed insecure direct object references, including in payment and subscription flows. Also hardened shared JWT authentication across 6+ services.',
  },
  {
    metric: 'Community backend',
    before: 'empty repo',
    after: 'production',
    note: 'Seven days. Stories, feed and push, reading off a materialized visibility window.',
  },
]

export const systems = [
  {
    name: 'Server-driven UI and BFF',
    scale: '100K+ DAU app',
    body: 'Built component registration, surface composition, attribute targeting and API aggregation, plus an admin authoring interface. Semver gates protect older app SDKs; rendering handles device clocks, timezones and scheduled refreshes.',
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'React'],
  },
  {
    name: 'Home Screen Configuration',
    scale: '100K+ DAU',
    body: 'A rule engine plus admin UI that decides what every user sees on open. Product and ops target cohorts by attendance, subscription state and challenge progress, and ship it without waiting on a mobile release.',
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'React'],
  },
  {
    name: 'Community and feed backend',
    scale: '0 → prod in 7 days',
    body: 'Community stories, the feed and push notifications. Feed reads come off a materialized visibility window instead of a fan-out query. It now hosts the home-screen rule engine.',
    stack: ['NestJS', 'MongoDB', 'Redis'],
  },
  {
    name: 'Daily games platform',
    scale: 'Puzzles · quizzes · Sudoku',
    body: 'Puzzle, quiz and Sudoku APIs with per-difficulty generation, answer shuffling and leaderboards. Streaks survive a missed day through "streak lives", and every day boundary is IST-aware.',
    stack: ['NestJS', 'Prisma', 'Redis', 'PostgreSQL'],
  },
  {
    name: 'Go analytics and queue reliability',
    scale: 'Production Go + SQS',
    body: 'Hardened JWT validation and rate limiting, added OpenTelemetry tracing, and improved SQS consumer shutdown, idempotent writes, retries and dead-letter handling. This pipeline is separate from the Kafka migration.',
    stack: ['Go', 'Gin', 'AWS SQS', 'OpenTelemetry'],
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
    body: 'A central resolver for service URLs, rolled out across 9 services to replace hardcoded endpoints.',
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
    name: 'SyncSofa',
    period: 'Sep 2026 - Present',
    body: 'Watch YouTube together with synchronized playback, shared playlists and chat. Rooms support up to six people, with peer-to-peer WebRTC calls and SQLite-backed room state.',
    stack: ['TypeScript', 'React', 'Node.js', 'WebSocket', 'WebRTC', 'SQLite'],
    code: 'https://github.com/keshavsaini0311/syncsofa',
    live: 'https://syncsofa.onrender.com/',
    metrics: ['6-person room limit', '95 unit tests', '12 browser tests'],
    detail: 'Checks cover two-person calls, playlist and chat updates, refreshes and reconnects. The free Render demo uses temporary storage, so rooms reset when the server restarts.',
  },
  {
    name: 'Social Media App',
    period: 'Jul - Aug 2024',
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
  { label: 'Codeforces', value: 'Expert · peak 1605', note: 'Competitive programming', href: 'https://codeforces.com/profile/keshav.sai0311' },
  { label: 'LeetCode', value: '900+ problems solved', note: 'Including 120+ Hard', href: 'https://leetcode.com/u/user6605NH/' },
  { label: 'CodeChef', value: '4 Star', note: 'Competitive programming', href: 'https://www.codechef.com/users/keshav0311' },
  { label: 'IIIT Nagpur', value: 'B.Tech · 8.16', note: 'Electronics & Communication, 2026', href: null },
]
