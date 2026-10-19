// Small stroke icons. All use currentColor so event accents can tint them.
const P = {
  pin: <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  prev: <path d="M15 5l-7 7 7 7" />,
  next: <path d="M9 5l7 7-7 7" />,
  flower: <><circle cx="12" cy="12" r="2.2" /><path d="M12 9.8C10 6 12 3 12 3s2 3 0 6.8M14.2 12c3.8-2 6.8 0 6.8 0s-3 2-6.8 0M12 14.2c2 3.8 0 6.8 0 6.8s-2-3 0-6.8M9.8 12C6 14 3 12 3 12s3-2 6.8 0" /></>,
  kalash: <><path d="M7 10c0-2 2-3 5-3s5 1 5 3c0 4-1 8-5 8s-5-4-5-8z" /><path d="M9 7c0-2 1.5-3.5 3-3.5S15 5 15 7M12 18v3M9 21h6" /></>,
  horse: <path d="M5 20v-6l3-4 2-5 3 2 4 1 1 3-3 1-1 3v5M9 20v-4" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  music: <><path d="M9 18V6l10-2v12" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="16.5" cy="16" r="2.5" /></>,
  lamp: <><path d="M9 4h6M10 4v2h4V4M8 6h8l1 10H7L8 6zM9 20h6" /></>,
  fire: <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z" />,
}
export default function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {P[name]}
    </svg>
  )
}
