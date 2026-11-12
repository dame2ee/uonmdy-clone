import Image from "next/image";
import { latestNews, mostRead, newsPagination, rectors, visitorStats } from "@/lib/data";

const visitorRows = [
  { label: "Today", value: visitorStats.today },
  { label: "Yesterday", value: visitorStats.yesterday },
  { label: "This Week", value: visitorStats.thisWeek },
  { label: "This Month", value: visitorStats.thisMonth },
  { label: "All days", value: visitorStats.all },
];

export default function SpotlightOne() {
  const digits = String(visitorStats.all).split("");

  return (
    <section className="border-b border-cream py-[30px]">
      <div className="uon-container">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-3">
          {/* ---------- Latest News ---------- */}
          <div>
            <div className="mb-[15px] bg-accent px-[10px] py-[4px] text-[12px] font-bold text-white">
              <a className="text-white hover:text-white">
                More News &gt;&gt;
              </a>{" "}
              {newsPagination.map((label) => (
                <a key={label} className="text-white hover:text-white">
                  {label}&nbsp;
                </a>
              ))}
            </div>

            <h3 className="uon-module-title">Latest News</h3>

            <div className="space-y-[15px]">
              {latestNews.map((news) => (
                <div key={news.title} className="flex gap-[12px]">
                  <a className="shrink-0">
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={130}
                      height={77}
                      className="h-[77px] w-[130px] object-cover"
                    />
                  </a>
                  <div>
                    <a
                      className="block text-[13px] leading-[1.45] font-bold text-[#205f93]"
                    >
                      {news.title}
                    </a>
                    <a
                      className="mt-[4px] inline-block text-[12px] text-[#666666] hover:text-[#205f93]"
                    >
                      More detail
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Rectors ---------- */}
          <div>
            <h3 className="uon-module-title">Rectors</h3>

            <ul className="list-none p-0">
              {rectors.map((rector) => (
                <li
                  key={rector.name}
                  className="flex min-h-[50px] items-center border-b border-cream py-[10px]"
                >
                  <Image
                    src={rector.image}
                    alt={rector.name}
                    width={58}
                    height={58}
                    className="mr-[10px] h-[58px] w-[58px] shrink-0 rounded-[2px] border border-[#dddddd] bg-[#f7f7f7] p-[2px] object-cover"
                  />
                  <span className="text-[15px] font-bold text-[#4a4a4a]">
                    {rector.name} <span className="font-normal">{rector.period}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Most Read + Visitors ---------- */}
          <div>
            <h3 className="uon-module-title">Most Read &amp; Viewed</h3>
            <ul className="uon-bullet-list mb-[30px] list-none p-0">
              {mostRead.map((label) => (
                <li key={label} className="py-[4px]">
                  <a className="text-[13px]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="uon-module-title">Visitors</h3>
            <div className="mx-auto w-[260px] p-[5px] text-center">
              <div className="mb-[5px]">
                {digits.map((d, i) => (
                  <span key={i} className="uon-digit" title="Vinaora Visitors Counter">
                    {d}
                  </span>
                ))}
              </div>

              <div className="mt-[10px]">
                {visitorRows.map((row) => (
                  <div key={row.label} className="flex h-[24px] items-center justify-between">
                    <span className="text-[12px] text-[#666666]">{row.label}</span>
                    <span className="text-[12px] text-[#666666]">{row.value}</span>
                  </div>
                ))}
              </div>

              <hr className="my-[5px] border-cream" />
              <div className="mb-[5px] text-[12px] text-[#666666]">
                Your IP: {visitorStats.ip}
              </div>
              <div className="text-[12px] text-[#666666]">{visitorStats.datetime}</div>
              <div className="mt-[5px] text-[12px]">
                <span className="text-[#666666]">Visitors Counter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
