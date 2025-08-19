import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Impressum',
    href: '/impressum',
  },
  {
    title: 'Datenschutz',
    href: '/datenschutz',
  },
];

declare global {
  interface Window {
    openCookieSettings?: () => void;
  }
}

export default function FooterSection() {
  return (
    <footer className="py-4 md:py-12 bg-[#121a30] text-white">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/"
          aria-label="go home"
          className="mx-auto block size-fit"
        >
          {/* You can add a logo or site title here if needed */}
          <span className="text-2xl font-bold">Julin Design</span>
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-gray-300 hover:text-white block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
          {/* Cookie Settings Link as a button */} 
          <li>
            <button
              onClick={() => {
                if (window.openCookieSettings) {
                  window.openCookieSettings();
                }
              }}
              className="text-gray-300 hover:text-white bg-transparent border-none p-0 cursor-pointer duration-150"
              style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Cookie-Einstellungen
            </button>
          </li>
        </div>

        <span className="text-gray-400 block text-center text-sm"> © {new Date().getFullYear()} Julin Design, All rights reserved</span>
      </div>
    </footer>
  );
}
