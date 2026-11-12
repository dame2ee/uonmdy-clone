import CountUp from "./CountUp";
import { campusStats } from "@/lib/data";

const icons = [
  // doctor / teaching staff
  "M12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4 0 7 2.2 7 5v3H5v-3c0-2.8 3-5 7-5Z",
  // id card / office staff
  "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2 7h4c0-1.3-.9-2-2-2s-2 .7-2 2Zm7-6h6v1.5h-6V10Zm0 3h6v1.5h-6V13Z",
  // group / under graduate students
  "M8 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm8 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM2 20v-1.5C2 16 5 14 8 14s6 2 6 4.5V20H2Zm14.5-4.7c2.6.4 4.5 2 4.5 4.2V20h-5v-1.5c0-1.2-.4-2.3-1-3.2.5 0 1-.1 1.5 0Z",
  // graduation cap
  "M12 3 1 8l11 5 9-4.1V16h2V8L12 3ZM5 12.6V16c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.4l-7 3.2-7-3.2Z",
];

export default function NavHelper() {
  return (
    <nav className="border-y border-[#184978] bg-navhelper">
      <div className="uon-container">
        <div className="py-[5px] text-[12px] text-white">
          <span className="font-bold text-white">You are here: </span>
          <span>Home</span>
        </div>

        <div className="pb-[20px]">
          <div className="grid grid-cols-2 gap-y-[20px] pt-[15px] sm:grid-cols-3 md:grid-cols-5">
            {campusStats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="mb-[6px] flex justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-[#6991b7]"
                    aria-hidden="true"
                  >
                    <path d={icons[i]} />
                  </svg>
                </div>
                <div className="text-[22px] leading-none font-bold text-white">
                  <CountUp to={stat.value} duration={8000} />
                </div>
                <div className="mt-[6px] text-[12px] text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
