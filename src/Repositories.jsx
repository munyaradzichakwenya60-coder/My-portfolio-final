import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';

// Pre-defined static backup in case of API failure / rate limits
const staticRepos = [
  {
    name: "age_calculator.....",
    language: "Python",
    stargazers_count: 2,
    html_url: "https://github.com/munyaradzichakwenya60-coder/age_calculator.....",
    description: "This Python program checks whether a user’s name appears in a predefined list of students. It first stores 20 student names in a list called Students. The program asks the user to enter their name. If the name exists in the list, it displays the student’s position using the list index plus one. If not, it prints “Name not found.”"
  },
  {
    name: "age_calculator_",
    language: "Python",
    stargazers_count: 2,
    html_url: "https://github.com/munyaradzichakwenya60-coder/age_calculator_",
    description: "An age calculation script utility written in Python."
  },
  {
    name: "ai-text-summarizer",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/ai-text-summarizer",
    description: "A Node.js application that uses AI to automatically condense long text into short summaries."
  },
  {
    name: "Apple-clone",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Apple-clone",
    description: "This is a react website symbolising and showcasing a portion of apple as a brand"
  },
  {
    name: "apple-clone-v2",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/apple-clone-v2",
    description: "A high-fidelity replica of the Apple website showcasing advanced React components, interactive product sliders, and dynamic layout designs."
  },
  {
    name: "Bakery-website",
    language: "CSS",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Bakery-website",
    description: "Bakery website with navbar, hero, product grid, promo banner, categories, featured treats, about section, and footer with contact + social links."
  },
  {
    name: "Calculator",
    language: "Python",
    stargazers_count: 2,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Calculator",
    description: "CustomTkinter GUI calculator with 620x580 window. Features history panel, trigonometric functions (SIN/COS/TAN), basic arithmetic, and rounded display."
  },
  {
    name: "E-commerce",
    language: "TypeScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/E-commerce",
    description: "A premium TypeScript e-commerce storefront with complex state management."
  },
  {
    name: "event-planners",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/event-planners",
    description: "A comprehensive event planning and management platform designed to organize client schedules, bookings, and digital event programs seamlessly."
  },
  {
    name: "Form-submission",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Form-submission",
    description: "This program is an example of how a form works with validations and submission pipelines."
  },
  {
    name: "my-express-app",
    language: "HTML",
    stargazers_count: 1,
    html_url: "https://github.com/munyaradzichakwenya60-coder/my-express-app",
    description: "A simple project built with express.js to show an example of how the security and middleware work"
  },
  {
    name: "My-portfolio",
    language: "CSS",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/My-portfolio",
    description: "This website is made to showcase my skills, abilities and capabilities"
  },
  {
    name: "My-portfolio-final",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/My-portfolio-final",
    description: "This program is a portfolio to showcase my accomplishments throughout the bootcamp"
  },
  {
    name: "New-app",
    language: "CSS",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/New-app",
    description: "This is a react program to test my coding abilities without the help of AI"
  },
  {
    name: "Pop-up",
    language: "Python",
    stargazers_count: 2,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Pop-up",
    description: "This python program calculates and solves mathematical problems..."
  },
  {
    name: "Restaurant-project",
    language: "CSS",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Restaurant-project",
    description: "Responsive food delivery homepage with promo banner, search, deals, categories, restaurants, app download, FAQ, stats, and footer links."
  },
  {
    name: "siphiwe-portfolio",
    language: "TypeScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/siphiwe-portfolio",
    description: "Modern digital portfolio showcasing design, development projects and digital marketing projects"
  },
  {
    name: "students_list_",
    language: "Python",
    stargazers_count: 2,
    html_url: "https://github.com/munyaradzichakwenya60-coder/students_list_",
    description: "This Python program checks whether a user’s name appears in a predefined list of students. It first stores 20 student names in a list called Students. The program asks the user to enter their name."
  },
  {
    name: "supabase",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/supabase",
    description: "A simple project built with Supabase for user authentication and database management."
  },
  {
    name: "Todo-list",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Todo-list",
    description: "A simple and responsive React-based To-Do List application designed for managing, tracking, and organizing daily tasks efficiently."
  },
  {
    name: "Weather-forecast",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Weather-forecast",
    description: "HTML structure for a weather dashboard with sidebar navigation, search input, current weather display, highlights stats, forecast section, and settings modal."
  },
  {
    name: "Website-basics",
    language: "HTML",
    stargazers_count: 2,
    html_url: "https://github.com/munyaradzichakwenya60-coder/Website-basics",
    description: "This HTML program is a sample of how a website is built"
  }
];

const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

const SearchControls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  background: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.85rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.ink};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.rule};
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  left: 0.75rem;
  color: ${({ theme }) => theme.colors.ink3};
  font-size: 1.2rem;
`;

const FilterLangSelect = styled.select`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  background: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.ink};
  }
`;

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const RepoCard = styled.div`
  background: ${({ theme }) => theme.colors.paper2};
  border: 1px solid ${({ theme }) => theme.colors.rule};
  padding: 1.5rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink3};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  }
`;

const RepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

const RepoTitleLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 750;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.ink};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.01em;

  &:hover {
    color: ${({ theme }) => theme.colors.ink3};
  }

  svg {
    font-size: 1.1rem;
  }
`;

const RepoDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.78rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.ink3};
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const RepoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.ink3};
`;

const LangIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const LangDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $lang }) => {
    switch (($lang || '').toLowerCase()) {
      case 'javascript': return '#f1e05a';
      case 'typescript': return '#3178c6';
      case 'python': return '#3572A5';
      case 'html': return '#e34c26';
      case 'css': return '#563d7c';
      default: return '#8a8a8a';
    }
  }};
`;

const StarCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  svg {
    font-size: 0.9rem;
  }
`;

const LoadingText = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.ink3};
  text-align: center;
  padding: 3rem 0;
`;

export default function Repositories() {
  const [repos, setRepos] = useState(staticRepos);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [langFilter, setLangFilter] = useState('All');

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/munyaradzichakwenya60-coder/repos?per_page=100');
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          // Normalize languages and keep only keys needed
          const processed = data.map(repo => ({
            name: repo.name,
            language: repo.language || 'N/A',
            stargazers_count: repo.stargazers_count,
            html_url: repo.html_url,
            description: repo.description || 'No description provided.'
          }));
          
          // Sort by name or stars
          processed.sort((a, b) => b.stargazers_count - a.stargazers_count || a.name.localeCompare(b.name));
          setRepos(processed);
        }
      } catch (err) {
        console.warn('Using static backup repositories list:', err.message);
        // Backup stays as staticRepos
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const languages = ['All', ...new Set(repos.map(r => r.language).filter(l => l && l !== 'N/A'))];

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(search.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()));
    const matchesLang = langFilter === 'All' || repo.language === langFilter;
    return matchesSearch && matchesLang;
  });

  return (
    <ReposContainer>
      <SearchControls>
        <SearchInputWrapper>
          <SearchIconStyled />
          <SearchInput
            type="text"
            placeholder="Search repositories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchInputWrapper>
        <FilterLangSelect
          value={langFilter}
          onChange={(e) => setLangFilter(e.target.value)}
        >
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </FilterLangSelect>
      </SearchControls>

      {loading ? (
        <LoadingText>Loading repository pipeline...</LoadingText>
      ) : (
        <RepoGrid>
          {filteredRepos.map(repo => (
            <RepoCard key={repo.name}>
              <div>
                <RepoHeader>
                  <RepoTitleLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name} <GitHubIcon />
                  </RepoTitleLink>
                </RepoHeader>
                <RepoDesc>
                  {repo.description.length > 140 
                    ? `${repo.description.substring(0, 137)}...` 
                    : repo.description}
                </RepoDesc>
              </div>
              <RepoFooter>
                <LangIndicator>
                  <LangDot $lang={repo.language} />
                  {repo.language}
                </LangIndicator>
                <StarCount>
                  <StarBorderIcon />
                  {repo.stargazers_count}
                </StarCount>
              </RepoFooter>
            </RepoCard>
          ))}
        </RepoGrid>
      )}
    </ReposContainer>
  );
}
