import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e2a3a 0%, #1a5276 50%, #17a2b8 100%)',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(56, 182, 255, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(232, 168, 56, 0.12)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            border: '3px solid #38b6ff',
            borderRadius: 16,
            marginBottom: 32,
            fontSize: 40,
            fontWeight: 'bold',
            color: '#38b6ff',
          }}
        >
          VKT
        </div>
        <div style={{ fontSize: 64, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>
          VKT SOFTWARE
        </div>
        <div style={{ fontSize: 32, color: '#e8a838', marginBottom: 16 }}>
          Giải pháp số hoá cho doanh nghiệp Việt Nam
        </div>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.8)' }}>
          Phần mềm theo yêu cầu • Chuyển đổi số • AI Solutions
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 18,
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          vktsoftware.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
