import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.left}>
        <div style={styles.leftInner}>
          <h1 style={styles.title}>Pronounce AI</h1>
          <p style={styles.description}>
            3D 구강 구조 시각화와 AI 피드백으로 발음을 교정하는 학습 플랫폼
          </p>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.formContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background:
      'linear-gradient(135deg, rgba(79,70,229,0.25), rgba(6,182,212,0.18))',
  },
  leftInner: {
    maxWidth: '420px',
  },
  title: {
    margin: 0,
    fontSize: '42px',
    fontWeight: 800,
  },
  description: {
    marginTop: '16px',
    fontSize: '18px',
    lineHeight: 1.6,
    color: '#cbd5e1',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '#111827',
    border: '1px solid #1f2937',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  },
};