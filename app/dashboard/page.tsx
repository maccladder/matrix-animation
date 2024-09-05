"use client";
import YellowMatrixAnimation from '@/components/YellowMatrixAnimation';

export default function Dashboard() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <YellowMatrixAnimation />
      <div style={{ position: 'relative', zIndex: 10, color: '#FFF', textAlign: 'center', paddingTop: '20px' }}>
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
}
