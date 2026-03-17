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
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await login({ email, password });
      navigate('/dashboard', { replace: true });
    } catch (error) {
      setErrorMessage('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
    } finally {
      setIsSubmitting(false);
    }
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

        {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}

        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? '로그인 중...' : '로그인'}
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
  errorText: {
    margin: '-8px 0 0 0',
    fontSize: '13px',
    color: '#f87171',
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