export function KaabaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="1" />
      <path d="M12 22l-9-5V7l9 5v10z" fill="#111111" />
      <path d="M12 22l9-5V7l-9 5v10z" fill="#222222" />
      <path d="M3 9.5l9 5v-2l-9-5v2z" fill="#D4AF37" />
      <path d="M12 14.5l9-5v-2l-9 5v2z" fill="#F3CD48" />
      <path d="M14.5 14v4.5l3.5-2V12l-3.5 2z" fill="#D4AF37" stroke="#F3CD48" strokeWidth="0.5" />
    </svg>
  );
}
