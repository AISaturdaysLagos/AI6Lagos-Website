import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../../models/indext';

const NavBar: React.FC = () => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  const NAV_LINK: NavLinks[] = [
    // {
    //   title: 'Learning Tracks',
    //   link: '/learning-tracks',
    //   id: 1,
    //   hasButton: false,
    // },
    {
      title: 'AI Hackathon',
      link: '/hackathons',
      id: 1,
      hasButton: false,
    },
    // { title: 'About us', link: '/learning-tracks', id: 2, hasButton: false },
    // { title: 'Contact us', link: '/learning-tracks', id: 3, hasButton: true },
  ];

  const linkClass =
    'block py-1 pl-1 pr-1 md:text-xs text-md text-gray-700  md:p-0 ';

  const buttonClass =
    'text-white bg-[#f89320]  md:text-xs hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 md:mr-0 dark:bg-orange-400 dark:hover:bg-orange-400 dark:focus:ring-orange-400';

  return (
    <>
      <nav className="p-3 bg-white shadow-md fixed z-50 w-full max-w-full top-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto py-2 px-9">
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/owujib/image/upload/v1679622305/samples/ai_saturday_pilyub.png"
              loading="lazy"
              className="h-6 mr-3 sm:h-10"
              alt="AI Saturday Lagos"
            />
            <span className="text-base self-center lg:text-2xl md:text-2xl font-semibold whitespace-nowrap text-[#f89320] ">
              AI Saturday Lagos
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-700 border-black rounded-lg md:hidden hover:bg-dark focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={() => {
              setOpenMobileNav(!openMobileNav);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col justify-center items-center mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {NAV_LINK.map(({ id, title, link, hasButton }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className={hasButton ? buttonClass : linkClass}
                    aria-current="page"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`
          ${
            openMobileNav ? ' left-0 ' : 'ease-in-out  left-[-100%] h-full'
          } fixed  ease-in-out duration-500 dark:bg-black bg-black top-0  border-r border-r-dark w-[50%] h-full px-4 z-50 pt-2 
        `}
        >
          <ul>
            <li>
              <Link
                to="/learning-tracks"
                className="block py-2 pl-3 pr-4 text-white rounded bg-orange-400  md:bg-transparent md:text-orange-400 md:p-0 md:dark:text-white dark:bg-orange-400 md:dark:bg-transparent"
                aria-current="page"
              >
                Learning Tracks
              </Link>
            </li>
            <li>
              <Link
                to="/hackathon"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Hackathon
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
