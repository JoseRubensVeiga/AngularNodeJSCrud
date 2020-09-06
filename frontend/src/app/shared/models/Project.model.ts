export interface Project {
  id?: number;
  title: string;
  text: string;
  budget: number;
  initialDate: string;
  finalDate: string;
}

export interface ProjectRS {
  projects: Project[];
}
