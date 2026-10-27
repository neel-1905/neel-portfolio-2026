"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "cn";
import { NavLinks } from "./nav-links";

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-accent"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop & Drawer Container */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 font-mono",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "fixed top-0 right-0 h-screen w-72 bg-card border-l p-6 shadow-xl transition-transform duration-300 ease-in-out z-50 flex flex-col",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()} // Prevents clicks inside the drawer from closing it
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b">
            <span className="font-semibold text-lg uppercase">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-accent"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body / Content */}
          {/* <div className="py-4 flex-1"> */}
          <NavLinks onClick={() => setIsOpen(false)} />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
