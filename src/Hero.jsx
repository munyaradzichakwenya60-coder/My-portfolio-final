import styled, { keyframes } from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import CVViewer from './CVViewer';

const orbFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
`;

const spinCw = keyframes`
  to { transform: rotate(360deg); }
`;

const spinCcw = keyframes`
  to { transform: rotate(-360deg); }
`;

const dotPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: calc(${({ theme }) => theme.sizes.navH} + 5rem) ${({ theme }) => theme.sizes.pad} 6rem;
  max-width: calc(${({ theme }) => theme.sizes.max} + ${({ theme }) => theme.sizes.pad} * 2);
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const HeroGrid = styled.div`
  max-width: ${({ theme }) => theme.sizes.max};
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 460px;
  gap: 3rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    align-items: center;
  }
`;

const HeroTag = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.ink3};
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;

  &::before {
    content: '';
    display: block;
    width: 1.75rem;
    height: 1px;
    background: currentColor;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2.5rem, 7vw, 5rem);
  letter-spacing: -0.05em;
  line-height: 0.95;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  span {
    display: block;
  }
`;

const HeroName = styled.span`
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
`;

const HeroDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink2};
  max-width: 480px;
  margin-bottom: 3rem;
  font-weight: 450;
  letter-spacing: -0.01em;
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: 1px solid;
  transition: all 0.2s ease;
  cursor: pointer;

  ${({ $variant, theme }) =>
    $variant === 'fill'
      ? `
    background: ${theme.colors.ink};
    color: ${theme.colors.paper};
    border-color: ${theme.colors.ink};
    &:hover {
      background: ${theme.colors.ink2};
      border-color: ${theme.colors.ink2};
      transform: translateY(-2px);
    }
  `
      : `
    background: transparent;
    color: ${theme.colors.ink};
    border-color: ${theme.colors.ruleStrong};
    &:hover {
      background: ${theme.colors.paper2};
      border-color: ${theme.colors.ink};
      transform: translateY(-2px);
    }
  `}

  svg {
    font-size: 1.1rem;
  }
`;

const HeroRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 460px;

  @media (max-width: 960px) {
    display: none;
  }
`;

const OrbWrap = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
`;

const OrbRingOuter = styled.div`
  position: absolute;
  inset: -40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.ruleMd};
  animation: ${spinCw} 18s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.ink3};
  }
`;

const OrbRingMid = styled.div`
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  border: 1px dashed ${({ theme }) => theme.colors.ruleStrong};
  animation: ${spinCcw} 12s linear infinite;

  &::before {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 30%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.ink4};
  }
`;

const OrbSphere = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.colors.paper === '#0f0e0d'
      ? `radial-gradient(circle at 35% 35%, #4a4540 0%, #2a2826 40%, #1a1918 70%, #0f0e0d 100%)`
      : `radial-gradient(circle at 35% 35%, #f0ece6 0%, #d8d0c6 40%, #b8ae9e 70%, #8a8078 100%)`};
  box-shadow: inset -20px -20px 40px rgba(0, 0, 0, 0.18),
    inset 10px 10px 30px rgba(255, 255, 255, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${orbFloat} 6s ease-in-out infinite;
  transition: background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 12%;
    left: 18%;
    width: 35%;
    height: 22%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    filter: blur(8px);
    transform: rotate(-20deg);
  }
`;

const OrbDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.ink3};
  border: 1px solid ${({ theme }) => theme.colors.paper3};
  animation: ${dotPulse} 3s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
`;

const OrbBadge = styled.div`
  position: absolute;
  bottom: 10%;
  left: -5%;
  background: ${({ theme }) => theme.colors.paper};
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const OrbBadgeText = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.ink2};
  white-space: nowrap;
`;

const Hero = ({ data }) => {
  const [cvOpen, setCvOpen] = useState(false);

  const handleCvClick = (e) => {
    e.preventDefault();
    setCvOpen(true);
  };

  return (
    <>
      <HeroSection id="hero">
        <HeroGrid>
          <HeroLeft>
            <HeroTag className="fu d1">{data.tagline}</HeroTag>
            <HeroTitle className="fu d2">
              <span>{data.name.split(' ')[0]}</span>
              <HeroName>{data.name.split(' ')[1]}</HeroName>
            </HeroTitle>
            <HeroDesc className="fu d3">{data.description}</HeroDesc>
            <HeroBtns className="fu d4">
              <Button href="#contact" $variant="fill">
                Get in touch <EmailIcon />
              </Button>
              <Button href={data.cvLink} target="_blank" rel="noopener noreferrer" onClick={handleCvClick}>
                View CV <DescriptionIcon />
              </Button>
            </HeroBtns>
          </HeroLeft>
          <HeroRight className="fu d5">
            <OrbWrap>
              <OrbRingOuter />
              <OrbRingMid />
              <OrbSphere />
              <OrbDot $top="20%" $left="85%" $delay="0.5s" />
              <OrbDot $top="75%" $left="15%" $delay="1.2s" />
            </OrbWrap>
          </HeroRight>
        </HeroGrid>
      </HeroSection>
      <CVViewer cvLink={data.cvLink} isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
};

export default Hero;
