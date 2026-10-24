export interface Option {
  label: string;
  value: string;
}
export interface DropdownProps {
  options?: string[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  backgroundColor?: string;
}