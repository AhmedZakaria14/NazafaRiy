import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: 7,
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
          <path
            d="M 50 8 L 86 32 L 86 68 L 50 92 L 14 68 L 14 32 Z"
            stroke="#FFFFFF"
            strokeWidth="5"
            fill="rgba(255,255,255,0.15)"
          />
          <path
            d="M 50 24 C 50 24, 66 45, 66 57 C 66 65 59 73 50 73 C 41 73 34 65 34 57 C 34 45 50 24 50 24 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 50 43 Q 50 53 40 53 Q 50 53 50 63 Q 50 53 60 53 Q 50 53 50 43 Z"
            fill="#050505"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
