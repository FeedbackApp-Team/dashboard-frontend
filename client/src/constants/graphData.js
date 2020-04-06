import uid from 'uid';

export const weekAverages = [
  {
    title: 'Teamworking',
    feedback: 'Great',
    improvements: '20% improvement',
    id: uid(),
    progress: '70',
  },
  {
    title: 'Productivity',
    feedback: 'Great',
    improvements: '20% improvement',
    id: uid(),
    progress: '60',
  },
  {
    title: 'How happy people feel in this team',
    feedback: 'Ok',
    improvements: '20% break down',
    id: uid(),
    progress: '35',
  },
  {
    title: 'What members think about the team lead',
    feedback: 'Great',
    improvements: '20% improvement',
    id: uid(),
    progress: '70',
  },
  {
    title: 'Amount of given feedback',
    feedback: 'Great',
    improvements: '20% improvement',
    id: uid(),
    progress: '60',
  },
  {
    title: 'Average of all five categories',
    feedback: 'Ok',
    improvements: '20% break down',
    id: uid(),
    progress: '35',
  },
];

export const longTermDevelopment = [
  { header: 'Average Members', title: 'Teamworking', id: uid() },
  { header: 'Average Members', title: 'Productivity', id: uid() },
  { header: 'Average Members', title: 'Happiness in team', id: uid() },
  { header: 'Team Members Opinion About', title: 'Team lead', id: uid() },
  { header: 'Amount Of', title: 'Given feedback', id: uid() },
  { header: 'Overall Average', title: 'Total development', id: uid() },
];
