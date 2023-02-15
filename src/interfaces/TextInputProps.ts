export default interface textInputProps {
  type: string;
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
