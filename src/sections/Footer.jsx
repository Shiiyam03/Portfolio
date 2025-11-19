import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="c-space pb-3 text-sm text-neutral-400">
      {/* Divider line */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Footer content */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Terms & Privacy */}
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <p className="cursor-pointer hover:text-neutral-200 transition-colors">
            Terms &amp; Conditions
          </p>
          <span>|</span>
          <p className="cursor-pointer hover:text-neutral-200 transition-colors">
            Privacy Policy
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={social.icon} className="w-5 h-5" alt={social.name} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-center sm:text-right sm:text-sm leading-snug">
          ©2025 - Shiyam R.
          <br />
          All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
