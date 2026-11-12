"use client";

import { useState } from "react";
import LoginSidebar from "./LoginSidebar";
import { navItems } from "@/lib/data";

export default function MainNav() {
  const [navOpen, setNavOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="bg-navy">
      <div className="uon-container">
        <div className="flex items-stretch">
          {/* Off-canvas (login) toggle — mirrors the original navbar-header button */}
          <button
            type="button"
            aria-label="Open login sidebar"
            aria-expanded={loginOpen}
            onClick={() => setLoginOpen(true)}
            className="flex shrink-0 items-center border-r border-[#1f537e] bg-nav-active px-[15px] text-white transition-colors hover:bg-nav-hover"
          >
            <span className="block space-y-[4px]">
              <span className="block h-[2px] w-[18px] bg-current" />
              <span className="block h-[2px] w-[18px] bg-current" />
              <span className="block h-[2px] w-[18px] bg-current" />
            </span>
          </button>

          {/* Mobile nav toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
            className="flex items-center border-r border-[#1f537e] px-[15px] text-white transition-colors hover:bg-nav-hover hover:text-white md:hidden"
          >
            <span className="text-[12px] font-bold uppercase tracking-wide">Menu</span>
          </button>

          <ul
            className={`${navOpen ? "block" : "hidden"} w-full pb-2 md:flex md:w-auto md:flex-wrap md:items-stretch md:pb-0`}
          >
            {navItems.map((item) => {
              const isActive = item.label === "Home";
              return (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className={[
                      "flex items-center gap-[6px] border-r border-[#1f537e] px-[20px] py-[15px] text-[12px] font-bold uppercase text-white transition-colors",
                      "hover:bg-nav-hover hover:text-white",
                      isActive
                        ? "border-t-[3px] border-t-gold bg-nav-active pt-[12px] text-white"
                        : "border-t-[3px] border-t-transparent",
                    ].join(" ")}
                  >
                    {item.label}
                    {item.children ? (
                      <span className="inline-block border-x-[3px] border-t-[4px] border-x-transparent border-t-white" />
                    ) : null}
                  </a>

                  {item.children ? (
                    <div className="uon-mega">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a href={child.href}>{child.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <LoginSidebar open={loginOpen} onClose={() => setLoginOpen(false)} />
    </nav>
  );
}
