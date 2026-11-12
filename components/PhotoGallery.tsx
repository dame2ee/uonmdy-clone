"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/data";

const PER_PAGE = 6;

export default function PhotoGallery() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(galleryImages.length / PER_PAGE);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, 5000);
    return () => window.clearInterval(id);
  }, [pageCount]);

  const start = page * PER_PAGE;
  const visible = galleryImages.slice(start, start + PER_PAGE);

  return (
    <section className="border-t border-cream py-[30px]">
      <div className="uon-container">
        <h3 className="uon-module-title">Photo Gallery</h3>

        <div className="relative">
          <div className="grid grid-cols-3 gap-[10px] sm:grid-cols-6">
            {visible.map((src) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="uon-fade-in block"
              >
                <Image
                  src={src}
                  alt="UONMDY photo gallery"
                  width={130}
                  height={130}
                  className="h-auto w-full rounded-[2px] border border-[#e5e5e5] object-cover"
                />
              </a>
            ))}
          </div>

          <div className="mt-[10px] flex justify-center gap-[20px] text-[12px] font-bold text-[#205f93]">
            <button
              type="button"
              onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
              className="hover:text-[#1b5280]"
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => (p + 1) % pageCount)}
              className="hover:text-[#1b5280]"
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
