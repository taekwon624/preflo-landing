import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Preflo — Stop losing leads to your inbox'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background subtle grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Left: Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '640px',
            zIndex: 1,
          }}
        >
          {/* Brand label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#06b6d4',
                boxShadow: '0 0 8px #06b6d4',
              }}
            />
            <span
              style={{
                color: '#06b6d4',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              PREFLO
            </span>
          </div>

          {/* Main headline */}
          <div
            style={{
              color: '#ffffff',
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.1,
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Stop losing leads to your inbox.
          </div>

          {/* Subtext */}
          <div
            style={{
              color: '#94a3b8',
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: 1.5,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Automated lead intake &amp; follow-up for service agencies.
          </div>

          {/* Bottom domain */}
          <div
            style={{
              color: '#64748b',
              fontSize: '16px',
              fontFamily: 'system-ui, sans-serif',
              marginTop: '20px',
              letterSpacing: '0.05em',
            }}
          >
            preflo.io
          </div>
        </div>

        {/* Right: Geometric accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '340px',
            height: '340px',
            flexShrink: 0,
          }}
        >
          {/* Outer glow ring */}
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '1px solid rgba(6,182,212,0.2)',
              boxShadow: '0 0 60px rgba(6,182,212,0.15)',
              display: 'flex',
            }}
          />
          {/* Middle ring */}
          <div
            style={{
              position: 'absolute',
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              border: '1px solid rgba(6,182,212,0.3)',
              display: 'flex',
            }}
          />
          {/* Inner glowing core */}
          <div
            style={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(6,182,212,0.1) 60%, transparent 100%)',
              boxShadow: '0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(6,182,212,0.2)',
              display: 'flex',
            }}
          />
          {/* Center dot */}
          <div
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#06b6d4',
              boxShadow: '0 0 20px #06b6d4',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
