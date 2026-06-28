export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo" aria-label="Land Travel">
      <span className="logo-mark">
        <span>LT</span>
      </span>
      {!compact && (
        <span className="logo-copy">
          <strong>Land</strong>
          <small>Travel</small>
        </span>
      )}
    </span>
  );
}
