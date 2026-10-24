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
    'Backend engineer at HaBuild, working with TypeScript and Go on an app with 100K+ daily users. I build UI platforms, authentication and reliable event processing.',
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

export const ledger = [
  {
    metric: 'PostgreSQL read latency',
    before: '200 ms',
    after: '100 ms',
    note: 'Read replicas and Redis caching halved latency.',
  },
  {
    metric: 'OTP delivery',
    before: '96%',
    after: '98.4%',
    note: 'Cross-channel fallback reduced failed deliveries by 60%.',
  },
  {
    metric: 'Redis hot key',
    before: '30K+ reads/sec',
    after: 'cached per process',
    note: 'Added an in-memory cache ahead of Redis for infrequently changing configuration.',
  },
  {
    metric: 'Read routing',
    before: 'PostgreSQL reads',
    after: '98%+ on replicas',
    note: 'Moved read traffic to replicas to reduce load on the primary.',
  },
]

export const systems = [
  {
    name: 'Server-driven UI and BFF',
    scale: '100K+ DAU app',
    body: 'Built screen composition, API aggregation and an admin authoring UI.',
    highlights: ['Drafts, three-way rebasing and conflict resolution.', 'Selective configuration promotion with dependency remapping.'],
    stack: ['TypeScript', 'NestJS', 'MongoDB', 'React'],
  },
  {
    name: 'Go analytics pipeline',
    scale: 'Go + SQS',
    body: 'Hardened production event processing in Go.',
    highlights: ['Idempotent writes, retries and dead-letter handling.', 'Graceful shutdown, JWT validation and OpenTelemetry tracing.'],
    stack: ['Go', 'Gin', 'AWS SQS', 'OpenTelemetry'],
  },
  {
    name: 'Authentication and security',
    scale: '5 core services',
    body: 'Closed ownership-check vulnerabilities across five core services.',
    highlights: ['Hardened shared JWT authentication across six services.', 'Built multi-channel OTP fallback and QR login.'],
    stack: ['TypeScript', 'NestJS', 'Redis', 'JWT'],
  },
]

export const projects = [
  {
    name: 'SyncSofa',
    period: 'Sep 2026 - Present',
    body: 'Watch YouTube together, in sync, on a video call.',
    highlights: ['Shared playlists, chat and reactions for up to six people.', 'Peer-to-peer WebRTC calls and SQLite-backed state that survives reconnects.'],
    stack: ['TypeScript', 'React', 'Node.js', 'WebSocket', 'WebRTC', 'SQLite'],
    code: 'https://github.com/keshavsaini0311/syncsofa',
    live: 'https://syncsofa.onrender.com/',
  },
]

export const stack = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'C++', 'Python', 'Java', 'SQL'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'REST', 'WebSocket', 'WebRTC'] },
  { group: 'Frontend', items: ['React', 'TypeScript', 'Vite'] },
  { group: 'Data & messaging', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Apache Kafka', 'Prisma', 'AWS SQS'] },
  { group: 'Operations', items: ['Docker', 'GitHub Actions', 'OpenTelemetry', 'AWS ECS', 'Linux'] },
]

export const proof = [
  { label: 'Codeforces', value: 'Expert · peak 1605', note: 'Competitive programming', href: 'https://codeforces.com/profile/keshav.sai0311' },
  { label: 'LeetCode', value: '900+ problems solved', note: 'Including 120+ Hard', href: 'https://leetcode.com/u/user6605NH/' },
  { label: 'CodeChef', value: '4 Star', note: 'Competitive programming', href: 'https://www.codechef.com/users/keshav0311' },
  { label: 'IIIT Nagpur', value: 'B.Tech · 8.16', note: 'Electronics & Communication, 2026', href: null },
]
