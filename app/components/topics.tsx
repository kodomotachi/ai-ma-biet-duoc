import Link from "next/link";

type TopicsProps = {
  first: string;
  second: string;
  href: string;
  className?: string;
};

export default function Topics({ first, second, href, className = "" }: TopicsProps) {
  return (
    <div className={`rounded-md border border-black px-4 py-3 ${className}`}>
      <p className="text-xl font-serif font-bold md:text-2xl">{first}</p>
      <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-base font-serif md:text-xl">{second}</p>
        <Link
          href={href}
          className="flex h-11 w-fit min-w-30 items-center justify-center whitespace-nowrap rounded border border-black/30 bg-transparent px-4 text-xs tracking-wide duration-500 hover:bg-pink-500/10"
        >
          Details &gt;&gt;
        </Link>
      </div>
    </div>
  );
}
