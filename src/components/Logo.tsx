export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Amirjon Abdunayimov logo"
      role="img"
    >
      <defs>
        <linearGradient id="aLogoRight" x1="20" y1="4" x2="36" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6f8cff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="aLogoLeft" x1="20" y1="4" x2="6" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b9caff" />
          <stop offset="1" stopColor="#6d6be0" />
        </linearGradient>
      </defs>

      {/* right face (darker) */}
      <path d="M20.8 4 L35 37 L24.5 37 L20.8 18 Z" fill="url(#aLogoRight)" />
      {/* left face (lighter) */}
      <path d="M19.2 4 L5 37 L15.5 37 L19.2 18 Z" fill="url(#aLogoLeft)" />
      {/* center spine highlight */}
      <path d="M20 5 L20 17" stroke="#dce6ff" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}