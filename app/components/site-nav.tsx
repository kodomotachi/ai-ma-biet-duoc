"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Home", href: "/" },
  { name: "Math", href: "/math" },
  { name: "Machine Learning", href: "/machine-learning" },
  { name: "Deep Learning", href: "/deep-learning" },
  { name: "NLP", href: "/nlp" },
  { name: "Computer Vision", href: "/computer-vision" },
];

export default function SiteNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="h-[10vh] blog-name">
      <h1>random blogs 📚</h1>
      <div className="group-by-2 flex items-center">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className={`menu-link ${isActive(category.href) ? "font-bold underline underline-offset-8" : "opacity-50 hover:opacity-100"}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
