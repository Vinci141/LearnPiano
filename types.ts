
export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export interface Note {
  sargam: string;
  western: string; // e.g., 'C4', 'D#4'
  hindi: string;
}

export interface Lesson {
  id: string;
  name: string;
  description: string;
  notes: Note[];
}

export type LessonsByDifficulty = {
  [key in Difficulty]: Lesson[];
};
