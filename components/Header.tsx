import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-navy border-b border-navy-deep py-[10px]">
      <div className="uon-container">
        <div className="flex flex-wrap items-center">
          {/* Logo */}
          <div className="w-full text-center sm:w-1/2 sm:text-left md:pl-[10px]">
            <Link
              href="/"
              title="University of Nursing, Mandalay."
              className="inline-block max-w-full leading-none"
            >
              <Image
                src="/images/misc/logo.png"
                alt="University of Nursing, Mandalay."
                width={330}
                height={66}
                priority
                className="h-[52px] w-auto max-w-full"
              />
            </Link>
          </div>

          {/* Head search */}
          <div className="w-full sm:w-1/2">
            <div className="mt-[14px] flex justify-center sm:justify-end">
              <form className="flex" role="search">
                <label htmlFor="searchword" className="hidden">
                  Search ...
                </label>
                <input
                  id="searchword"
                  name="searchword"
                  type="search"
                  maxLength={200}
                  placeholder="Search ..."
                  className="h-[30px] w-[220px] border border-[#1b212a] bg-[#1b212a] px-[10px] text-[12px] text-[#a9b0b8] outline-none placeholder:text-[#7c848d] focus:border-[#205f93]"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex h-[30px] w-[36px] items-center justify-center bg-black text-white transition-colors hover:bg-gold"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-4.2-4.2" strokeLinecap="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
