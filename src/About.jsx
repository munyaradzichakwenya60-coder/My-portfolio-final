import { useState } from 'react';
import styled from 'styled-components';
import CodeIcon from '@mui/icons-material/Code';
import VerifiedIcon from '@mui/icons-material/Verified';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useScrollReveal } from './hooks/useScrollReveal';

const Section = styled.section`
  padding: calc(${({ theme }) => theme.sizes.navH} + 5rem) ${({ theme }) => theme.sizes.pad} 6rem;
  max-width: calc(${({ theme }) => theme.sizes.max} + ${({ theme }) => theme.sizes.pad} * 2);
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.rule};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.sizes.max};
  margin: 0 auto;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.ink3};
  margin-bottom: 0.75rem;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
`;

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink2};
  font-weight: 450;
`;

const TabBar = styled.div`
  display: flex;
  gap: 0;
  margin: 2rem 0 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.rule};
`;

const TabBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: ${({ $active, theme }) => ($active ? theme.colors.ink : theme.colors.ink3)};
  padding: 0.5rem 1rem 0.65rem;
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.ink : 'transparent')};
  margin-bottom: -1px;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const TabPanel = styled.div`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.ink2};
  padding: 0.6rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.rule};
  background: ${({ theme }) => theme.colors.paper2};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink3};
    transform: translateX(5px);
  }

  svg {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.ink4};
  }
`;

const CertList = styled.ul`
  list-style: none;
  margin-top: 0.5rem;
`;

const CertItem = styled.li`
  padding: 0.85rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.rule};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.ink2};
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  svg {
    margin-top: 0.2rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.ink3};
  }
`;

const CertName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  display: block;
`;

const CertBy = styled.span`
  color: ${({ theme }) => theme.colors.ink3};
  font-size: 0.65rem;
  margin-top: 0.2rem;
  display: block;
`;

const AboutImageWrap = styled.div`
  position: relative;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    inset: 1rem -1rem -1rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
    z-index: -1;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  filter: grayscale(20%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const About = ({ data }) => {
  const [activeTab, setActiveTab] = useState('skills');
  const revealRef = useScrollReveal();

  return (
    <Section id="about" className="reveal" ref={revealRef}>
      <Inner>
        <AboutGrid>
          <div>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <Heading>{data.heading}</Heading>
            <Body>{data.bio1}</Body>
            <Body style={{ marginTop: '1rem' }}>{data.bio2}</Body>

            <TabBar>
              <TabBtn
                $active={activeTab === 'skills'}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </TabBtn>
              <TabBtn
                $active={activeTab === 'certs'}
                onClick={() => setActiveTab('certs')}
              >
                Certifications
              </TabBtn>
            </TabBar>

            <TabPanel $active={activeTab === 'skills'}>
              <SkillsGrid>
                {data.skills.map((skill) => (
                  <SkillItem key={skill}>
                    <TerminalIcon />
                    {skill}
                  </SkillItem>
                ))}
              </SkillsGrid>
            </TabPanel>

            <TabPanel $active={activeTab === 'certs'}>
              <CertList>
                {data.certifications.map((cert) => (
                  <CertItem key={cert.name}>
                    <VerifiedIcon />
                    <div>
                      <CertName>{cert.name}</CertName>
                      <CertBy>{cert.by}</CertBy>
                    </div>
                  </CertItem>
                ))}
              </CertList>
            </TabPanel>
          </div>

          <div>
            <AboutImageWrap>
              <AboutImage
                src="https://tonde-portfolio.vercel.app/_next/image?url=%2Fimages%2Fabout-image.jpg&w=1200&q=75"
                alt="Munyaradzi Chakwenya"
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
              />
            </AboutImageWrap>
          </div>
        </AboutGrid>
      </Inner>
    </Section>
  );
};

export default About;
