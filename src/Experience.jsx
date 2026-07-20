import styled from 'styled-components';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
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
  margin-bottom: 3.5rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 11px;
    width: 2px;
    background: ${({ theme }) => theme.colors.ruleStrong};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: -2.5rem;
  margin-left: 1px;
  top: 0.25rem;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.paper};

  svg {
    font-size: 0.75rem;
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  border: 1px solid ${({ theme }) => theme.colors.rule};
  padding: 2rem;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.paper2};
    border-color: ${({ theme }) => theme.colors.ruleStrong};
    transform: translateX(5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const RoleTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.02em;
`;

const Organization = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink3};
  margin-top: 0.25rem;
`;

const Period = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  color: ${({ theme }) => theme.colors.ink3};
  background: ${({ theme }) => theme.colors.paper3};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
`;

const DetailsList = styled.ul`
  list-style: none;
`;

const DetailItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink2};
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.25rem;
  font-weight: 450;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.ink3};
  }
`;

export default function Experience() {
  const revealRef = useScrollReveal();

  const experiences = [
    {
      role: "Volunteer Scratch Instructor",
      org: "Emganwini Hub",
      period: "2025 – Present",
      icon: <SchoolIcon />,
      details: [
        "Instruct children in Scratch programming, fostering computational thinking and technical literacy.",
        "Facilitate engagement with software development coursework and community project reports."
      ]
    },
    {
      role: "Software Development Student",
      org: "Uncommon Bulawayo",
      period: "2025 – Present",
      icon: <WorkIcon />,
      details: [
        "Undergoing an intensive 12-month specialization track in software development.",
        "Previously completed comprehensive crash courses in digital marketing and product design.",
        "Developed a weather dashboard prototype utilizing OpenWeatherMap APIs and HTML structures.",
        "Built a luxury web application for The Deck at Banff Lodge featuring a digital menu and reservation system with responsive CSS layouts."
      ]
    },
    {
      role: "Automotive Precision Machinist",
      org: "Manufacturing Sector",
      period: "2018 – 2024",
      icon: <EngineeringIcon />,
      details: [
        "Applied technical expertise in precision machining to maintain high-quality automotive manufacturing standards.",
        "Brought a hyper-focused attention to detail and structural accuracy into modern software layout engineering workflows."
      ]
    }
  ];

  return (
    <Section id="experience" className="reveal" ref={revealRef}>
      <Inner>
        <Eyebrow>02 — WORK & EDUCATION</Eyebrow>
        <Heading>My Professional Journey</Heading>
        <TimelineContainer>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineIcon>{exp.icon}</TimelineIcon>
              <TimelineContent>
                <HeaderRow>
                  <div>
                    <RoleTitle>{exp.role}</RoleTitle>
                    <Organization>{exp.org}</Organization>
                  </div>
                  <Period>{exp.period}</Period>
                </HeaderRow>
                <DetailsList>
                  {exp.details.map((detail, dIndex) => (
                    <DetailItem key={dIndex}>{detail}</DetailItem>
                  ))}
                </DetailsList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Inner>
    </Section>
  );
}
