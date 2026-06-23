import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from 'react';

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
  height: 90vh;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.ruleMd};
  background: ${({ theme }) => theme.colors.paper2};
`;

const HeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.ruleMd};
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.ink2};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.paper3};
    border-color: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.ink};
  }

  svg {
    font-size: 1.3rem;
  }
`;

const DownloadButton = styled(IconButton)`
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  border-color: ${({ theme }) => theme.colors.ink};

  &:hover {
    background: ${({ theme }) => theme.colors.ink2};
    border-color: ${({ theme }) => theme.colors.ink2};
  }
`;

const PDFViewer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.paper};

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const CVViewer = ({ cvLink, isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(cvLink);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Munyaradzi_Chakwenya_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
      // Fallback: open in new tab
      window.open(cvLink, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <HeaderTitle>My Resume</HeaderTitle>
          <HeaderActions>
            <DownloadButton
              onClick={handleDownload}
              disabled={isDownloading}
              title="Download CV"
            >
              <FileDownloadIcon />
            </DownloadButton>
            <IconButton onClick={onClose} title="Close">
              <CloseIcon />
            </IconButton>
          </HeaderActions>
        </ModalHeader>
        <PDFViewer>
          <iframe
            src={cvLink}
            title="CV PDF Viewer"
            type="application/pdf"
          />
        </PDFViewer>
      </ModalContent>
    </Modal>
  );
};

export default CVViewer;
