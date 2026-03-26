import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NASCORA — Siguranța în sarcină | Pregnancy Safety';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A52 60%, #1B4965 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative circles */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(27, 73, 101, 0.3)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'rgba(27, 73, 101, 0.2)',
          display: 'flex',
        }} />

        {/* Shield icon SVG */}
        <div style={{ display: 'flex', marginBottom: '32px' }}>
          <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
            <path d="M45 5 L80 20 L80 50 C80 72 63 88 45 95 C27 88 10 72 10 50 L10 20 Z" fill="#4A9CC7" />
            <path d="M45 14 L72 26 L72 50 C72 67 59 80 45 87 C31 80 18 67 18 50 L18 26 Z" fill="#1B4965" stroke="white" strokeWidth="1.5" />
            <ellipse cx="45" cy="50" rx="14" ry="17" fill="#FAFBFC" opacity="0.9" />
            <circle cx="45" cy="39" r="6" fill="#4A9CC7" />
            <path d="M33 60 Q36 52 45 50 Q54 52 57 60" stroke="#4A9CC7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* NASCORA title */}
        <div style={{
          display: 'flex',
          fontSize: '96px',
          fontWeight: '800',
          color: '#FFFFFF',
          letterSpacing: '8px',
          lineHeight: 1,
          marginBottom: '16px',
          textShadow: '0 2px 20px rgba(0,0,0,0.3)',
        }}>
          NASCORA
        </div>

        {/* Tagline */}
        <div style={{
          display: 'flex',
          fontSize: '28px',
          color: '#7EC8E3',
          letterSpacing: '3px',
          marginBottom: '40px',
          fontWeight: '400',
        }}>
          Born safe. Born aware.
        </div>

        {/* Divider */}
        <div style={{
          display: 'flex',
          width: '500px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #4A9CC7, transparent)',
          marginBottom: '32px',
        }} />

        {/* Description */}
        <div style={{
          display: 'flex',
          fontSize: '22px',
          color: 'rgba(255,255,255,0.75)',
          textAlign: 'center',
          maxWidth: '800px',
          lineHeight: 1.5,
          letterSpacing: '0.5px',
        }}>
          Platforma de preventie teratologica — Siguranta in sarcina
        </div>

        {/* URL badge */}
        <div style={{
          display: 'flex',
          position: 'absolute',
          bottom: '30px',
          right: '40px',
          fontSize: '18px',
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '1px',
        }}>
          nascora.health
        </div>
      </div>
    ),
    { ...size }
  );
}
