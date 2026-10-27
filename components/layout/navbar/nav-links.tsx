import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const [hash, setHash] = useState("");

  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-6 uppercase text-sm py-6">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            className="nav-link"
            data-active={link.href === hash}
            href={link.href}
            onClick={onClick}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
