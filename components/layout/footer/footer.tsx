"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { CurrentYear } from "./current-year";
import { Suspense } from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t py-10 font-mono">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-10 gap-8">
        {/* Left: Branding */}
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">
            <span className="text-primary">DEV</span>/FOLIO
          </h1>
          <p className="text-xs text-muted-foreground">
            Built with curiosity and craft
          </p>
        </div>

        {/* Middle: Links */}
        <nav>
          <ul className="flex flex-wrap gap-6 uppercase text-sm">
            <li>
              <Link href="#projects" className="hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: Copyright & Action */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <Suspense fallback={<time></time>}>
            <CurrentYear />
          </Suspense>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
