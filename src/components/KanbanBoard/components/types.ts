import { Task } from '@/components/TaskList/types';
import { Dispatch, SetStateAction } from 'react';

// export type CardType = {
//   id: string;
//   title: string;
//   description?: string;
//   column: string;
// };

export type ColumnType = 'backlog' | 'todo' | 'in-progress' | 'done';

export type ColumnProps = {
  title: string;
  cards: Task[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<Task[]>>;
  handleOnClick: (card: Task) => void;
};

export type CardProps = Task & {
  handleDragStart: Function;
  handleDelete: (id: string | number) => void;
  handleOnClick: () => void;
};

export type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

export type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<Task[]>>;
};

export type AssigneeType = {
  id: string | number;
  username: string;
  name: string;
  image: string;
};
