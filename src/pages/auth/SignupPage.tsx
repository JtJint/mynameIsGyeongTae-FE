import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../shared/components/ui/Button';
import Input from '../../shared/components/ui/Input';
import Card from '../../shared/components/ui/Card';
import { useAuthStore } from '../../features/auth/store/authStore';

export default function SignupPage() {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isPasswordMatched = password === confirmPassword;
  const isFormValid =
    name.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    isPasswordMatched;

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    signup({ name, email });
    navigate('/dashboard', { replace: true });
  };

  return (
    <Card padding={32}>
      <div style={styles.header}>
        <h2 style={styles.title}>회원가입</h2>
        <p style={styles.subtitle}>
          새 계정을 만들어 학습을 시작하세요.
        </p>
      </div>

      <form onSubmit={handleSignup} style={styles.form}>
        <Input
          id="name"
          label="이름"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <Input
          id="confirmPassword"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {!isPasswordMatched && confirmPassword.trim() !== '' && (
          <p style={styles.errorText}>비밀번호가 일치하지 않습니다.</p>
        )}

        <Button type="submit" fullWidth disabled={!isFormValid}>
          회원가입
        </Button>
      </form>

      <p style={styles.footerText}>
        이미 계정이 있나요?{' '}
        <Link to="/login" style={styles.link}>
          로그인
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
    lineHeight: 1.5,
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