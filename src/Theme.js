const shared = {
  fonts: {
    display: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  sizes: {
    navH: '64px',
    max: '1160px',
    pad: 'clamp(1.25rem, 5vw, 4rem)',
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    ink: '#0f0e0d',
    ink2: '#3a3835',
    ink3: '#7a7672',
    ink4: '#b0aca7',
    paper: '#f7f5f2',
    paper2: '#edeae5',
    paper3: '#e2ddd7',
    rule: 'rgba(15, 14, 13, 0.1)',
    ruleMd: 'rgba(15, 14, 13, 0.15)',
    ruleStrong: 'rgba(15, 14, 13, 0.22)',
  },
};

export const darkTheme = {
  ...shared,
  colors: {
    ink: '#f7f5f2',
    ink2: '#e2ddd7',
    ink3: '#b0aca7',
    ink4: '#7a7672',
    paper: '#0f0e0d',
    paper2: '#1a1918',
    paper3: '#2a2826',
    rule: 'rgba(247, 245, 242, 0.1)',
    ruleMd: 'rgba(247, 245, 242, 0.15)',
    ruleStrong: 'rgba(247, 245, 242, 0.22)',
  },
};
