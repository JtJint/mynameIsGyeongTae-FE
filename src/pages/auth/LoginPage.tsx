import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../shared/components/ui/Button';
import Input from '../../shared/components/ui/Input';
import Card from '../../shared/components/ui/Card';
import { useAuthStore } from '../../features/auth/store/authStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email });
    navigate('/dashboard', { replace: true });
  };

  return (
    <Card padding={32}>
      <div style={styles.header}>
        <h2 style={styles.title}>로그인</h2>
        <p style={styles.subtitle}>학습을 이어가려면 로그인하세요.</p>
      </div>

      <form onSubmit={handleLogin} style={styles.form}>
        <Input
          id="email"
          label="이메일"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" fullWidth>
          로그인
        </Button>
      </form>

      <p style={styles.footerText}>
        계정이 없나요?{' '}
        <Link to="/signup" style={styles.link}>
          회원가입
        </Link>
      </p>
    </Card>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    marginBottom: '28px',
  },
  title: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 700,
    color: '#f8fafc',
  },
  subtitle: {
    marginTop: '8px',
    color: '#94a3b8',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  footerText: {
    marginTop: '24px',
    fontSize: '14px',
    color: '#94a3b8',
  },
  link: {
    color: '#818cf8',
    textDecoration: 'none',
    fontWeight: 600,
  },
};