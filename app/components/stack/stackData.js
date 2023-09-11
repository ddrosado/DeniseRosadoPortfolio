import Backend from "../svgs/Backend";
import Frontend from "../svgs/Frontend";
import Other from "../svgs/Other";

export const stackData = [
    { 
        id: 1, 
        title: 'Front-End', 
        svg: <Frontend/>,
        stack: ['React', 'JavaScript', 'Redux', 'Redux\u00A0Toolkit', 'Next.js', 'Tailwind', 'CSS', 'HTML']
    },
    { 
        id: 2, 
        title: 'Back-End', 
        svg: <Backend/>,
        stack: ['Express','Node.js', 'Sequelize', 'PostgreSQL', 'SQL', 'Firebase']
    },
    { 
        id: 3, 
        title: 'Methodologies & Tools', 
        svg: <Other/>,
        stack: ['Agile\u00A0Methodologies', 'GIT', 'GitHub', 'Testing', 'Jest', 'REST\u00A0API', 'Deployment']
    },
    
  ];