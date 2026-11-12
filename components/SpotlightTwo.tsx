"use client";

import Image from "next/image";

export default function SpotlightTwo() {
  return (
    <section className="bg-navhelper">
      <div className="uon-container py-[20px]">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[20px] md:grid-cols-3">
          {/* Newsletter */}
          <div>
            <h3 className="uon-module-title-light">Newsletter</h3>
            <p className="mb-[10px] text-[13px] text-white">
              Make sure you dont miss interesting happenings by joining our newsletter
              program.
            </p>
            <form className="flex flex-col gap-[10px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                name="user[email]"
                placeholder="E-mail"
                defaultValue=""
                className="w-full border border-[#1b212a] bg-[#1b212a] px-[10px] py-[7px] text-[12px] text-[#c6cfd8] outline-none placeholder:text-[#7d858e] focus:border-[#205f93]"
              />
              <button
                type="submit"
                className="w-fit bg-accent px-[18px] py-[7px] text-[12px] font-bold text-white transition-colors hover:bg-gold"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact us */}
          <div>
            <h3 className="uon-module-title-light">Contact us</h3>
            <p className="mb-[8px] text-[13px] text-white">
              University of Nursing, Mandalay
            </p>
            <p className="mb-[8px]">
              <a
                href="/images/misc/qr.png"
                target="_blank"
                rel="noopener noreferrer"
                title="QR code for UONMDY web"
              >
                <Image
                  src="/images/misc/qr.png"
                  alt="QR code for UONMDY web"
                  width={110}
                  height={110}
                  className="h-[110px] w-[110px] bg-white p-[2px]"
                />
              </a>
            </p>
            <ul className="list-none p-0 text-[13px] text-white">
              <li className="py-[4px]">
                <strong className="text-white">Hot line:( </strong>+95 ) 02 4080405 ext - 120
              </li>
              <li className="py-[4px]">
                <strong className="text-white">Email: </strong>
                <a
                  href="mailto:uonadmin@uonmdy.edu.mm"
                  className="border-b border-dotted border-[#2b5b8a] text-white hover:border-white hover:text-white"
                >
                  uonadmin@uonmdy.edu.mm
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h3 className="uon-module-title-light">Connect with us</h3>
            <p className="mb-[10px] text-[13px] text-white">
              We&apos;re on Social Networks.
              <br />
              Follow us &amp; get in touch.
            </p>
            <a
              href="https://www.facebook.com/University-of-Nursing-Mandalay-522220597832426/"
              target="_blank"
              rel="noopener noreferrer"
              title="UonMdy Facebook"
              className="inline-block"
            >
              <Image
                src="/images/misc/facebook.png"
                alt="Follow UONMDY on Facebook"
                width={170}
                height={78}
                className="h-[78px] w-[170px]"
              />
            </a>
            <p className="mt-[10px] text-[13px] text-white">
              <span>Contact page</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
