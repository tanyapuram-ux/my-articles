export const overviewStats = [
  { label: 'Total Views', value: 284600, display: '284.6k', icon: 'eye', trend: '+18.4%' },
  { label: 'Total Reads', value: 119800, display: '119.8k', icon: 'book', trend: '+12.7%' },
  { label: 'Total Claps', value: 18400, display: '18.4k', icon: 'clap', trend: '+9.2%' },
  { label: 'Read Ratio', value: 42.1, display: '42.1%', icon: 'ratio', trend: '+3.8%' },
  { label: 'Followers', value: 2840, display: '2.84k', icon: 'people', trend: '+14.1%' },
  { label: 'Subscribers', value: 1260, display: '1.26k', icon: 'mail', trend: '+11.6%' },
  { label: 'Articles Published', value: 24, display: '24', icon: 'pen', trend: '+4 this year' },
  { label: 'Presentations', value: 8, display: '8', icon: 'screen', trend: '+2 this year' },
] as const;

export const monthlyData = {
  views: [18200, 21400, 19800, 26300, 28900, 34200, 31800, 40200, 43800, 47100, 52300, 58600],
  reads: [7400, 8600, 8100, 10500, 11700, 14100, 13200, 16800, 18100, 19900, 22100, 24600],
  claps: [980, 1120, 1060, 1350, 1480, 1760, 1690, 2120, 2360, 2580, 2910, 3340],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export const articles = [
  { title: 'How to Scale a Physical Product', views: '42.8k', reads: '19.4k', ratio: '45.3%', claps: '3.6k' },
  { title: 'The Key to Success: Use What You Have', views: '38.5k', reads: '17.1k', ratio: '44.4%', claps: '3.1k' },
  { title: 'From Solo Vision to Full-Stack Venture', views: '34.6k', reads: '15.2k', ratio: '43.9%', claps: '2.8k' },
  { title: 'When the Machine Prices Faster Than the Product Spoils', views: '31.9k', reads: '13.8k', ratio: '43.2%', claps: '2.5k' },
];
