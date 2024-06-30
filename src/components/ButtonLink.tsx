import Link from "next/link";

interface Props {
  path: string;
  text: string;
}

export default function ButtonNav({ path, text }: Props) {
  return (
    <Link
      href={path}
      className="min-w-24 h-max py-[6px] py-1 text-color-gray-10 text-center text-base border border-color-gray-10 rounded-md uppercase hover:bg-color-gray-30 transition"
    >
      {text}
    </Link>
  );
}
