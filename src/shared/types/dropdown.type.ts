export interface DropdownItem {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface DropdownProps {
  type: "nav" | "post" | "comment";
  items?: DropdownItem[];
  post?: {
    id: number;
    title: string;
    content: string;
    tags: { name: string }[];
  };
}
