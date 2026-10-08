import Link from "next/link";
import { siteSections } from "../site-metadata";

export default function SiteNav({
  className,
  pathname,
}: {
  className?: string;
  pathname?: string;
}) {
  return (
    <nav aria-label="Main navigation" className={className}>
      {siteSections.map(({ href, title }) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
          className="w-fit transition-colors hover:text-gray-500"
        >
          [ {title} ]
        </Link>
      ))}
    </nav>
  );
}
