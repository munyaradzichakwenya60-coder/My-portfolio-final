import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 14, 13, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  border-radius: 8px;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: ${({ theme }) => theme.colors.ink2};
  border: 1px solid ${({ theme }) => theme.colors.rule};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.colors.paper2};

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.paper3};
    transform: scale(1.05);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const ProjectName = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.ink4};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 2rem;
  line-height: 1.1;
`;

const Section = styled.div`
  margin-bottom: 1.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionLabel = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.ink3};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ContentText = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink2};
  font-weight: 450;
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.paper2};
  border-left: 2px solid ${({ theme }) => theme.colors.ink};
  padding: 1rem 1.25rem;
  border-radius: 0 4px 4px 0;
`;

export default function CaseStudyModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close case study">
          <CloseIcon />
        </CloseButton>
        <ProjectName>Case Study</ProjectName>
        <Title>{project.name}</Title>

        <Section>
          <SectionLabel>The Problem</SectionLabel>
          <ContentText>{project.problem}</ContentText>
        </Section>

        <Section>
          <SectionLabel>The Solution</SectionLabel>
          <ContentText>{project.solution}</ContentText>
        </Section>

        <Section>
          <SectionLabel>Key Technical Feature</SectionLabel>
          <HighlightBox>
            <ContentText style={{ fontWeight: 500, fontStyle: 'italic' }}>
              {project.keyFeature}
            </ContentText>
          </HighlightBox>
        </Section>
      </ModalContainer>
    </ModalOverlay>
  );
}
