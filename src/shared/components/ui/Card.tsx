import React from 'react';

type CardProps = {
  children: React.ReactNode;
  padding?: number;
};

export default function Card({ children, padding = 24 }: CardProps) {
  return (
    <div
      style={{
        ...styles.card,
        padding: `${padding}px`,
      }}
    >
      {children}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    borderRadius: '16px',
    backgroundColor: '#111827',
    border: '1px solid #1f2937',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  },
};