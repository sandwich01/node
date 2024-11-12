export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
export type Completed = 'all' | 'active' | 'completed'