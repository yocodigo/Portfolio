import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <div className="flex md:flex-row justify-between items-center">
        {/* Logo / Home / Text */}
        <div className="flex flex-col">
          <Link href="/">
              <h1 className="font-semibold text-xl dark:text-gray-100">
                Joel Hernandez
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                Web Developer
              </p>
          </Link>
        </div>
        <div className="space-x-8 hidden md:block">
          <Link href="/about">
            <span
              className={`text-base ${
                router.asPath === "/about"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal"
              }`}
            >
              About
            </span>
          </Link>
          <Link href="/projects">
            <span
              className={`text-base ${
                router.asPath === "/projects"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal"
              }`}
            >
              Projects
            </span>
          </Link>
          <Link href="/experience">
            <span
            className={`text-base ${
                router.asPath === "/experience"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal"
              }`}
            >
              Experience
            </span>  
          </Link>
          <Link href="/contact">
            <span
              className={`text-base ${
                router.asPath === "/contact"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal"
              }`}
            >
              Contact
            </span>
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-800 dark:text-gray-300 dark:border-gray-300 dark:hover:text-white dark:hover:border-white"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}