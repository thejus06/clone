export const currentUser = {
  id: 'u1',
  name: 'Alex Jonnson',
  headline: 'Senior Frontend Engineer | UI/UX Enthusiast',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  cover: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop',
  location: 'San Francisco, CA',
  connections: 500,
  views: 124,
  impressions: 489,
};

export const posts = [
  {
    id: 'p1',
    author: {
      name: 'Sarah Chen',
      headline: 'Product Manager at TechCorp',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    },
    timestamp: '2h',
    content: 'Just launched our new design system! Incredibly proud of the team for pulling this together over the last 3 months. It has already improved our frontend velocity by 30%.',
    likes: 245,
    comments: 42,
    reposts: 12,
  },
  {
    id: 'p2',
    author: {
      name: 'Michael Davis',
      headline: 'Staff Software Engineer | Typescript | React',
      avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    },
    timestamp: '5h',
    content: 'What is your favorite new feature in React 19? I am personally very excited about the new hooks for concurrent rendering.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    likes: 89,
    comments: 112,
    reposts: 4,
  }
];

export const trendingTopics = [
  { title: 'The future of remote work', readers: '12,450' },
  { title: 'New AI models announced', readers: '8,211' },
  { title: 'Tech hiring trends 2026', readers: '5,940' },
  { title: 'React vs Vue: The debate continues', readers: '4,100' },
  { title: 'Venture Capital updates', readers: '2,800' },
];
