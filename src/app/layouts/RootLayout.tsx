import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <h1 style={styles.logo}>Pronounce AI</h1>
          <nav style={styles.nav}>
            <span>Dashboard</span>
            <span>Curriculum</span>
            <span>Profile</span>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#111827',
    color: '#f9fafb',
  },
  header: {
    borderBottom: '1px solid #1f2937',
    backgroundColor: '#0f172a',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  headerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 700,
  },
  nav: {
    display: 'flex',
    gap: '20px',
    fontSize: '14px',
    color: '#cbd5e1',
  },
  main: {
    padding: '32px 24px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
};