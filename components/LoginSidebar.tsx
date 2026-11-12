"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

/** Small inline icon set for the input-group addons, matching the original theme. */
function FieldIcon({ name }: { name: "user" | "lock" | "key" }) {
  if (name === "user") {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.5-8 5.5V21h16v-1.5c0-3-3.6-5.5-8-5.5Z" />
      </svg>
    );
  }
  if (name === "lock") {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
        <path d="M17 9V7a5 5 0 0 0-10 0v2H5v12h14V9h-2Zm-8-2a3 3 0 0 1 6 0v2H9V7Zm4 9.7V18h-2v-1.3a2 2 0 1 1 2 0Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6l-8-4Zm0 9.9a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Zm4 4.9h-8v-.6c0-1.6 2.7-2.4 4-2.4s4 .8 4 2.4v.6Z" />
    </svg>
  );
}

export default function LoginSidebar({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={[
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Off-canvas panel */}
      <aside
        aria-hidden={!open}
        aria-label="Login sidebar"
        className={[
          "fixed inset-y-0 left-0 z-50 w-[300px] max-w-[85vw] bg-white shadow-[2px_0_12px_rgba(0,0,0,0.3)] transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between bg-navy px-[15px] py-[12px]">
          <h3 className="m-0 text-[14px] font-bold text-white">Sidebar</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="text-[20px] leading-none text-white/80 hover:text-white"
          >
            &times;
          </button>
        </div>

        <div className="p-[15px]">
          <h3 className="uon-module-title">Login Form</h3>

          <form className="space-y-[12px]" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="login-username"
                className="mb-[4px] block text-[12px] text-[#666666]"
              >
                Username
              </label>
              <div className="flex">
                <span className="flex h-[30px] w-[34px] items-center justify-center border border-r-0 border-[#cccccc] bg-[#eeeeee] text-[#777777]">
                  <FieldIcon name="user" />
                </span>
                <input
                  id="login-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="h-[30px] w-full border border-[#cccccc] px-[8px] text-[13px] text-[#555555] outline-none focus:border-[#205f93]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="mb-[4px] block text-[12px] text-[#666666]"
              >
                Password
              </label>
              <div className="flex">
                <span className="flex h-[30px] w-[34px] items-center justify-center border border-r-0 border-[#cccccc] bg-[#eeeeee] text-[#777777]">
                  <FieldIcon name="lock" />
                </span>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="h-[30px] w-full border border-[#cccccc] px-[8px] text-[13px] text-[#555555] outline-none focus:border-[#205f93]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="login-secretkey"
                className="mb-[4px] block text-[12px] text-[#666666]"
              >
                Secret Key
              </label>
              <div className="flex">
                <span className="flex h-[30px] w-[34px] items-center justify-center border border-r-0 border-[#cccccc] bg-[#eeeeee] text-[#777777]">
                  <FieldIcon name="key" />
                </span>
                <input
                  id="login-secretkey"
                  name="secretkey"
                  type="password"
                  className="h-[30px] w-full border border-[#cccccc] px-[8px] text-[13px] text-[#555555] outline-none focus:border-[#205f93]"
                />
              </div>
            </div>

            <label className="flex items-center gap-[6px] text-[12px] text-[#666666]">
              <input
                type="checkbox"
                name="remember"
                value="yes"
                className="h-[13px] w-[13px] accent-[#3366ff]"
              />
              Remember Me
            </label>

            <button
              type="submit"
              className="w-full bg-accent px-[15px] py-[8px] text-[13px] font-bold text-white transition-colors hover:bg-gold"
            >
              Log in
            </button>

            <ul className="list-none space-y-[6px] p-0 pt-[4px]">
              <li>
                <a className="text-[12px]">
                  Forgot your username?
                </a>
              </li>
              <li>
                <a className="text-[12px]">
                  Forgot your password?
                </a>
              </li>
            </ul>
          </form>
        </div>
      </aside>
    </>
  );
}
