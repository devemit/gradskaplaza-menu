import Menu from './MenuComponent/Menu';

export default function Home() {
  return (
    <div>
      <Menu />
      <div
        style={{
          bottom: '2px',
          padding: '4px 20px',
          borderRadius: '3px',
          left: '5px',
          cursor: 'pointer',
          fontSize: '10px',
        }}
      >
        <a
          style={{
            textDecoration: 'none',
            color: 'blue',
          }}
          href='https://mitkodev.vercel.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          © 2025 Mitko Devemit
        </a>
      </div>
    </div>
  );
}
