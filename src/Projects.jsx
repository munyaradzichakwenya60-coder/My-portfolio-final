import { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Repositories from './Repositories';
import CaseStudyModal from './CaseStudyModal';
import { caseStudies } from './caseStudies';
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

const ProjHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const ProjHeaderLeft = styled.div``;

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
  margin-bottom: 0;
`;

const SubHeading = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.ink3};
  margin-top: 0.5rem;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const FilterBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  padding: 0.5rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  background: ${({ $active, theme }) => ($active ? theme.colors.ink : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.paper : theme.colors.ink3)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ $active, theme }) => ($active ? theme.colors.paper : theme.colors.ink)};
    background: ${({ $active, theme }) => ($active ? theme.colors.ink : theme.colors.paper2)};
  }
`;

const TechTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  color: ${({ theme }) => theme.colors.ink3};
  padding: 0.35rem 0.75rem;
  background: ${({ theme }) => theme.colors.paper2};
  border-radius: 4px;
  letter-spacing: 0.02em;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ProjGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  background: transparent;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjCard = styled.article`
  background: ${({ theme }) => theme.colors.paper};
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.rule};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.paper2};
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.ruleStrong};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  }
`;

const ProjCat = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.colors.ink4};
  text-transform: uppercase;
`;

const ProjThumb = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.rule};
  background: ${({ theme }) => theme.colors.paper3};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.ink};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(15%) contrast(1.05);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
  }

  ${ProjCard}:hover & img {
    transform: scale(1.08);
    filter: grayscale(0%) contrast(1);
  }

  ${ProjCard}:hover &::after {
    opacity: 0.05;
  }
`

const PlaceholderText = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.ink4};
  letter-spacing: 0.1em;
`;

const ProjName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.2;
`;

const ProjDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.ink3};
  flex: 1;
`;

const ProjLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 0.5rem;
`;

const ProjLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.ink2};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
    transform: translateX(3px);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [revealRef, isRevealed] = useScrollReveal();

  const handleOpenCaseStudy = (projectName) => {
    const study = caseStudies[projectName];
    if (study) {
      setSelectedCaseStudy(study);
      setModalOpen(true);
    }
  };

  const filteredProjects = (filter === 'all'
    ? data
    : data.filter(p => p.cat === filter)
  ).slice(0, 8);

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Personal', value: 'Personal' },
    { label: 'Business', value: 'Business' },
    { label: 'Gift', value: 'Gift' },
    { label: 'All GitHub Repositories', value: 'github_repos' }
  ];

  return (
    <Section id="projects" className={`reveal ${isRevealed ? 'revealed' : ''}`} ref={revealRef}>
      <Inner>
        <ProjHeader>
          <ProjHeaderLeft>
            <Eyebrow>02 — WORK & PROJECTS</Eyebrow>
            <Heading>Exploring creativity<br />through code.</Heading>
            <SubHeading>Personal experiments, client solutions, and community gifts</SubHeading>
          </ProjHeaderLeft>
          <FilterRow>
            {filterOptions.map(f => (
              <FilterBtn
                key={f.value}
                $active={filter === f.value}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </FilterBtn>
            ))}
          </FilterRow>
        </ProjHeader>
        {filter === 'github_repos' ? (
          <Repositories />
        ) : (
          <ProjGrid>
            {filteredProjects.map((p, i) => (
              <ProjCard key={p.name} className="fu" style={{ animationDelay: `${i * 0.07}s` }}>
                <ProjCat>{p.cat}</ProjCat>
                <ProjThumb>
                  {p.img ? (
                    <img src={p.img} alt={p.name} loading="lazy" />
                  ) : (
                    <PlaceholderText>{p.cat.toUpperCase()}</PlaceholderText>
                  )}
                </ProjThumb>
                <ProjName>{p.name}</ProjName>
                <ProjDesc>{p.desc}</ProjDesc>
                <TechTags>
                  {p.tech.filter(t => t && t.trim() !== "").map((t) => (
                    <TechTag key={t}>{t}</TechTag>
                  ))}
                </TechTags>
                <ProjLinks>
                  {p.demo && (
                    <ProjLink href={p.demo} target="_blank" rel="noopener">
                      Live Demo <LaunchIcon />
                    </ProjLink>
                  )}
                  {p.github && (
                    <ProjLink href={p.github} target="_blank" rel="noopener">
                      GitHub <GitHubIcon />
                    </ProjLink>
                  )}
                  {caseStudies[p.name] && (
                    <ProjLink as="button" onClick={() => handleOpenCaseStudy(p.name)}>
                      Case Study <LibraryBooksIcon />
                    </ProjLink>
                  )}
                </ProjLinks>
              </ProjCard>
            ))}
          </ProjGrid>
        )}
      </Inner>
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedCaseStudy}
      />
    </Section>
  );
};

export default Projects;
