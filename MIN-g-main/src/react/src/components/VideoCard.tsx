import React from 'react';

export default function VideoCard({ title, channel }: { title: string; channel: string }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8 }}>
      <h3>{title}</h3>
      <p>{channel}</p>
    </div>
  );
}
