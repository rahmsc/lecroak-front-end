"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-md shadow-md"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
          <nav className="font-condiment">
            <ul className="flex flex-col items-center gap-8 text-3xl text-black">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contract
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/lecroak"
                  className="hover:text-gray-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://docs.lecroak.art"
                  className="hover:text-gray-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Docs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
