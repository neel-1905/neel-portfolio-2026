"use client";

import { NavActions } from "./nav-actions";
import { NavLinks } from "./nav-links";

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 flex items-center font-mono">
      <div className="flex items-center justify-between px-4 w-full">
        {/* logo */}
        <div>
          <h1 className="font-semibold">
            <span className="text-primary">DEV</span>/FOLIO
          </h1>
        </div>

        {/* links */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        {/* actions */}
        <NavActions />
      </div>
    </nav>
  );
}
