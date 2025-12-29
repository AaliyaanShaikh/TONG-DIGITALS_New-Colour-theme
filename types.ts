
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum ThemeColors {
  Primary = '#DB6923',
  Light = '#EFEEEA',
  Dark = '#202020'
}
