export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  tags: string[];
}
