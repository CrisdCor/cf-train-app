interface Props {
  placeholder?: string;
  type: string;
}

export default function InputCustom({ placeholder, type }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="min-w-24 h-max py-[6px] py-1 text-color-gray-10 text-center bg-color-gray-30 rounded-md outline-none focus:border-b border-color-contrast"
    />
  );
}
