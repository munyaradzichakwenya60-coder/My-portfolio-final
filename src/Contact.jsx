import { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 480px;
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
`;

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink2};
  margin: 1rem 0 3rem;
  font-weight: 450;
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.ink3};
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.paper2};
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.ink};
  }

  svg {
    font-size: 1.15rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.paper2};
  padding: 2rem;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.rule};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.ink2};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 0.9rem;
  }
`;

const SuccessMsg = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #10b981;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const StyledTextField = muiStyled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    fontFamily: theme.fonts?.display || "'Inter', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 500,
    color: theme.colors?.ink2 || '#3a3835',
    '&.Mui-focused': {
      color: theme.colors?.ink || '#0f0e0d',
      fontWeight: 600,
    },
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: theme.fonts?.display || "'Inter', sans-serif",
    fontSize: '0.9rem',
    color: theme.colors?.ink || '#0f0e0d',
    backgroundColor: theme.colors?.paper || '#f7f5f2',
    borderRadius: '4px',
    '& fieldset': {
      borderColor: theme.colors?.ruleStrong || 'rgba(15, 14, 13, 0.22)',
    },
    '&:hover fieldset': {
      borderColor: theme.colors?.ink2 || '#3a3835',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors?.ink || '#0f0e0d',
      borderWidth: '2px',
    },
  },
  '& .MuiInputBase-input': {
    padding: '14px 14px',
    color: theme.colors?.ink || '#0f0e0d',
    '&::placeholder': {
      color: theme.colors?.ink4 || '#b0aca7',
      opacity: 1,
      fontWeight: 400,
    },
  },
}));

const Contact = ({ data }) => {
  const [status, setStatus] = useState('');

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GitHubIcon />;
      case 'linkedin': return <LinkedInIcon />;
      case 'email': return <EmailIcon />;
      default: return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    formData.append('access_key', '90a6a245-36b9-456a-8ee4-352d48d6c9a2'); 

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <Inner>
        <ContactGrid>
          <div>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <Heading>{data.heading}</Heading>
            <Body>{data.body}</Body>
            <ContactIcons>
              {data.socials.map((s) => (
                <IconLink key={s.name} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  {getIcon(s.name)}
                </IconLink>
              ))}
            </ContactIcons>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormRow>
              <StyledTextField 
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
              />
              <StyledTextField 
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
            </FormRow>
            <StyledTextField 
              label="Subject"
              name="subject"
              variant="outlined"
              fullWidth
              required
            />
            <StyledTextField 
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              required
            />
            
            <FormSubmit type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>
                  Send Message <SendIcon />
                </>
              )}
            </FormSubmit>

            {status === 'success' && (
              <SuccessMsg>
                <CheckCircleOutlineIcon /> Message sent successfully!
              </SuccessMsg>
            )}
            {status === 'error' && (
              <SuccessMsg style={{ color: '#ef4444' }}>
                Oops! Something went wrong. Please try again.
              </SuccessMsg>
            )}
          </Form>
        </ContactGrid>
      </Inner>
    </Section>
  );
};

export default Contact;