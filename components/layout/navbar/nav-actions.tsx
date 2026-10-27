import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { MobileNavbar } from "./mobile-navbar";

export const NavActions = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden lg:flex rounded-full bg-card px-3 py-1 flex-center gap-2">
        <div className="size-2 rounded-full bg-primary"></div>
        <span className="uppercase text-xs text-foreground-muted">
          available for opportunities
        </span>
      </div>
      <Link
        href="#"
        className="bg-card flex gap-1 items-center border rounded-lg uppercase text-xs p-1 text-foreground-muted"
      >
        <MoveUpRight size={16} /> Resume
      </Link>

      <MobileNavbar />
    </div>
  );
};
