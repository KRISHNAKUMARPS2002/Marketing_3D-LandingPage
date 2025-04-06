"use client";

import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: "EN", label: "English" },
  { code: "FR", label: "French" },
  { code: "ES", label: "Spanish" },
  { code: "DE", label: "German" },
  { code: "IT", label: "Italian" },
];

const LanguageDropdown: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>("EN");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (code: string): void => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg border border-white"
      >
        <CiGlobe className="text-xl" />
        <span>{selectedLang}</span>
        {isOpen ? (
          <FiChevronUp className="text-xl" />
        ) : (
          <FiChevronDown className="text-xl" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <ul className="py-1">
            {languages.map((lang: Language) => (
              <li
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`cursor-pointer px-4 py-2 text-sm text-black hover:bg-gray-100 ${
                  selectedLang === lang.code ? "bg-red-600 text-white" : ""
                }`}
              >
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
