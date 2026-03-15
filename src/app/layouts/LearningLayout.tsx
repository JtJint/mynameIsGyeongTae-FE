import { Outlet } from 'react-router-dom';

export default function LearningLayout() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <p style={styles.label}>Learning Session</p>
            <h2 style={styles.title}>Pronunciation Training</h2>
          </div>
          <div style={styles.status}>In Progress</div>
        </div>
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#020617',
    color: '#f8fafc',
  },
  header: {
    borderBottom: '1px solid #1e293b',
    padding: '20px 28px',
  },
  headerInner: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    margin: 0,
    fontSize: '12px',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  title: {
    margin: '8px 0 0 0',
    fontSize: '24px',
    fontWeight: 700,
  },
  status: {
    padding: '8px 14px',
    borderRadius: '999px',
    backgroundColor: '#1d4ed8',
    fontSize: '13px',
    fontWeight: 600,
  },
  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '28px',
  },
};