export interface Link {
  to: string;
  icon: string;
  label: string;
}

export interface LeftBarProps {
  user?: {
    name: string;
  } | null;
  logout?: () => void;
}
