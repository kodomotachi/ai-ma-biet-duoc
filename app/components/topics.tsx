import Link from "next/link";

type TopicsProps = {
  first: string;
  second: string;
  href: string;
  className?: string;
};

export default function Topics({ first, second, href, className = "" }: TopicsProps) {
  return (
    <div className={`py-3 ${className} rounded-md border border-black px-4`}>
      <p className="text-2xl font-serif font-bold">{first}</p>
      <div className="flex items-end w-full">
        <p className="text-xl font-serif">{second}</p>
        <Link
          href={href}
          className="flex h-11 min-w-30 items-center justify-center whitespace-nowrap rounded border border-black/30 px-4 text-xs tracking-wide bg-transparent duration-500 hover:bg-pink-500/10"
        >
          Details &gt;&gt;
        </Link>
      </div>
    </div>
  );
}
