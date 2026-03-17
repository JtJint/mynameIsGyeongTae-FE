import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../features/auth/store/authStore';

export default function DashboardPage() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div style={styles.wrapper}>
      <section style={styles.heroCard}>
        <div>
          <p style={styles.eyebrow}>Welcome back</p>
          <h2 style={styles.heroTitle}>발음 교정 학습 대시보드</h2>
          <p style={styles.heroDesc}>
            현재 로그인 계정: <strong>{user?.email ?? 'guest@example.com'}</strong>
          </p>
          <p style={styles.heroDesc}>
            사용자 이름: <strong>{user?.name ?? 'Guest'}</strong>
          </p>
        </div>

        <div style={styles.heroButtons}>
          <button
            style={styles.primaryButton}
            onClick={() => navigate('/curriculum')}
          >
            학습 시작하기
          </button>
          <button style={styles.secondaryButton} onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </section>

      <section style={styles.grid}>
        <article style={styles.card}>
          <h3 style={styles.cardTitle}>현재 레벨</h3>
          <p style={styles.bigText}>Lv. 3</p>
          <p style={styles.muted}>기초 단어 발음 단계 진행 중</p>
        </article>

        <article style={styles.card}>
          <h3 style={styles.cardTitle}>누적 점수</h3>
          <p style={styles.bigText}>1,280</p>
          <p style={styles.muted}>최근 7일간 학습 점수 반영</p>
        </article>

        <article style={styles.card}>
          <h3 style={styles.cardTitle}>취약 발음</h3>
          <p style={styles.bigText}>/r/ · /f/</p>
          <p style={styles.muted}>정확도 개선이 필요한 음소</p>
        </article>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  heroCard: {
    padding: '28px',
    borderRadius: '20px',
    background:
      'linear-gradient(135deg, rgba(79,70,229,0.25), rgba(14,165,233,0.18))',
    border: '1px solid #334155',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  },
  eyebrow: {
    margin: 0,
    color: '#cbd5e1',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  heroTitle: {
    margin: '8px 0 8px 0',
    fontSize: '30px',
    fontWeight: 800,
  },
  heroDesc: {
    margin: '6px 0',
    color: '#e2e8f0',
    fontSize: '15px',
  },
  heroButtons: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    height: '44px',
    padding: '0 18px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#4f46e5',
    color: '#fff',
    fontWeight: 700,
    cursor: 'pointer',
  },
  secondaryButton: {
    height: '44px',
    padding: '0 18px',
    border: '1px solid #475569',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    color: '#f8fafc',
    fontWeight: 700,
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '24px',
    borderRadius: '18px',
    backgroundColor: '#0f172a',
    border: '1px solid #1e293b',
  },
  cardTitle: {
    margin: 0,
    fontSize: '16px',
    color: '#cbd5e1',
  },
  bigText: {
    margin: '16px 0 8px 0',
    fontSize: '28px',
    fontWeight: 800,
    color: '#f8fafc',
  },
  muted: {
    margin: 0,
    fontSize: '14px',
    color: '#94a3b8',
  },
};