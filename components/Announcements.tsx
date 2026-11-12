import { announcements } from "@/lib/data";

export default function Announcements() {
  return (
    <section className="border-b border-cream py-[20px]">
      <div className="uon-container">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[10px] md:grid-cols-3">
          {announcements.map((item, index) => (
            <div key={index} className="pb-[8px]">
              <a
                className="block text-[13px] leading-[1.5] font-bold text-[#205f93] hover:text-[#1b5280]"
              >
                {item.title}
              </a>
              <p className="mt-[4px] mb-0">
                <a className="text-[12px] text-[#666666] hover:text-[#205f93]">
                  Read more
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
