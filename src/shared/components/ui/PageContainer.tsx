export default function PageContainer({ children }: { children: React.ReactNode }) {
  return <div style={styles.container}>{children}</div>;
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
};