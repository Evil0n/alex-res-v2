import team1 from '../assets/images/team/team.png';
import team2 from '../assets/images/team/presentation.png';
import team3 from '../assets/images/team/teamwork.png';
import team4 from '../assets/images/team/teambuilding.png';
import team5 from '../assets/images/team/professional.png';

export type TeamPhoto = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

export const teamPhotosData: TeamPhoto[] = [
  {
    src: team1,
    alt: 'Команда в офисе',
    width: '770px',
    height: '550px',
  },
  {
    src: team2,
    alt: 'Презентация',
    width: '500px',
    height: '550px',
  },
  {
    src: team3,
    alt: 'Совместная работа',
    width: '531px',
    height: '545px',
  },
  {
    src: team4,
    alt: 'Тимбилдинг',
    width: '500px',
    height: '550px',
  },
  {
    src: team5,
    alt: 'Профессиональные моменты',
    width: '500px',
    height: '550px',
  },
];
