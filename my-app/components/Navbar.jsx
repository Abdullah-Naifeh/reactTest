import React from "react";
import Image from "next/image";
import Logo from "@/images/logo.png";
import userImage from "@/images/userImage.png";
import bellIcon from "@/images/bell.png";
import chatIcon from "@/images/ChatCircleText.png";

function Navbar() {
  return (
    <div class="bg-white border-b-[1px]">
      <div>
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <Image
                width={112}
                height={47}
                class="h-8 w-auto"
                src={Logo}
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  class="text-[#0C133D] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  Find Talent
                </a>
                <a
                  href="#"
                  class="text-[#0C133D] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                >
                  Find Work
                </a>
                <a
                  href="#"
                  class="text-[#0C133D] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                >
                  why bluHub works
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Search bar */}

            <form class="max-w-lg mx-auto">
              <div class="flex">
                <div class="flex relative w-full border rounded-full border-[#8fc1e8] overflow-hidden">
                  <input
                    type="search"
                    id="search-dropdown"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50"
                    placeholder= "Search"
                    required
                  />
                  <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 "
                    type="button"
                  >
                    Jobs{" "}
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {/* dropdown */}
                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mockups
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Templates
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Design
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Logos
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>

            <button
              type="button"
              class="relative mx-[10px] text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <Image width={28} height={28} src={chatIcon} />
            </button>
            <button
              type="button"
              class="relative mx-[10px] text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <Image width={28} height={28} src={bellIcon} />
            </button>
            <button
              type="button"
              class="relative ml-[10px] flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <Image
                width={25}
                height={25}
                class="h-8 w-8 rounded-full"
                src={userImage}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
