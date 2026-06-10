import { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.paper === '#0f0e0d' ? '#050505' : '#0f0e0d'};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background 0.3s ease;
`;

const ParticleCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: calc(${({ theme }) => theme.sizes.max} + ${({ theme }) => theme.sizes.pad} * 2);
  margin: 0 auto;
  padding: 3rem ${({ theme }) => theme.sizes.pad};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: rgba(247, 245, 242, 0.4);
  transition: all 0.2s ease;

  &:hover {
    color: rgba(247, 245, 242, 0.9);
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.25rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(247, 245, 242, 0.08);
  padding-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterCopy = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  color: rgba(247, 245, 242, 0.35);
`;

const FooterLogo = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.03em;
  color: rgba(247, 245, 242, 0.5);
  transition: color 0.2s ease;

  &:hover {
    color: rgba(247, 245, 242, 0.9);
  }
`;

const Footer = () => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const requestRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const footer = canvas.parentElement;
    let W, H, particles, mouse = { x: -999, y: -999 };
    const N = 60, CONN = 120, SPEED = 0.3;
    const DOT_COLOR = 'rgba(247,245,242,';
    const LINE_COLOR = 'rgba(247,245,242,';

    const resize = () => {
      W = canvas.width = footer.offsetWidth;
      H = canvas.height = footer.offsetHeight;
    };

    const makeParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.1 + Math.random() * SPEED);
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 1 + Math.random() * 1,
        opacity: 0.15 + Math.random() * 0.3
      };
    };

    const init = () => {
      resize();
      particles = Array.from({ length: N }, makeParticle);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += dx / dist * 0.02;
          p.vy += dy / dist * 0.02;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN) {
            const alpha = (1 - d / CONN) * 0.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = LINE_COLOR + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR + p.opacity + ')';
        ctx.fill();
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -999; mouse.y = -999;
    };

    const handleResize = () => {
      resize();
    };

    footer.addEventListener('mousemove', handleMouseMove);
    footer.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    init();
    draw();

    return () => {
      cancelAnimationFrame(requestRef.current);
      footer.removeEventListener('mousemove', handleMouseMove);
      footer.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FooterWrapper>
      <ParticleCanvas ref={canvasRef} />
      <FooterContent>
        <FooterSocials>
          <SocialLink href="" target="https://github.com/munyaradzichakwenya60-coder" rel="noopener" aria-label="GitHub">
            <GitHubIcon />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/munyaradzi-chakwenya" target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href="mailto:munyaradzichakwenya60@gmail.com" aria-label="Email">
            <EmailIcon />
          </SocialLink>
        </FooterSocials>
        <FooterBottom>
          <FooterCopy>MUNYARADZI CHAKWENYA 2026 © ALL RIGHTS RESERVED.</FooterCopy>
          <FooterLogo href="#">M.C</FooterLogo>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
