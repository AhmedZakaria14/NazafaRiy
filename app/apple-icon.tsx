import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          border: '4px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path
            d="M 50 8 L 86 32 L 86 68 L 50 92 L 14 68 L 14 32 Z"
            stroke="#FFFFFF"
            strokeWidth="4"
            fill="rgba(255,255,255,0.12)"
          />
          <path
            d="M 50 24 C 50 24, 66 45, 66 57 C 66 65 59 73 50 73 C 41 73 34 65 34 57 C 34 45 50 24 50 24 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 50 43 Q 50 53 40 53 Q 50 53 50 63 Q 50 53 60 53 Q 50 53 50 43 Z"
            fill="#050505"
          />
          <circle cx="50" cy="14" r="3" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
