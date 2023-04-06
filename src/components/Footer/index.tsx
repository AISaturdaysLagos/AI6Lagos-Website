import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { TfiTwitterAlt, TfiYoutube } from 'react-icons/tfi';
import { ImLinkedin } from 'react-icons/im';

const Footer: React.FC = () => {
  return (
    <>
      <div className="">
        <div
          className="w-full py-7 "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url('https://res.cloudinary.com/owujib/image/upload/v1680053995/ai-saturdays-imgs/img-one_i47oii.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="from">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md sm:text-center">
                <h2 className="mb-4 text-white text-2xl tracking-tight font-extrabold  sm:text-2xl ">
                  Sign up for our newsletter
                </h2>
                <p className="mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 sm:text-xl">
                  Stay up to date with the roadmap progress, announcements and
                  exclusive discounts feel free to sign up with your email.
                </p>
                <form action="#">
                  <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div className="relative w-full">
                      <label
                        htmlFor="email"
                        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email address
                      </label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white outline-none rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg border-none"
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer  border-none  sm:rounded-none sm:rounded-r-lg bg-[#f89320] "
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#f89320e1] ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                AI Saturdays Lagos
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
              <li>
                <Link
                  to="/hackathons"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/hackathons"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Hackathon
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
          <hr className="my-6 border-gray-100 sm:mx-auto  lg:my-8" />
          <div className="block text-sm text-white sm:text-center ">
            <div className="flex sm:justify-center justify-center mb-4">
              <a
                className="mx-2"
                href="https://www.youtube.com/c/AISaturdaysLagos"
                target="_blank"
                rel="noreferrer"
              >
                <TfiYoutube size={30} />
              </a>
              <a
                className="mx-2"
                href="https://twitter.com/aisaturdaylagos?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <TfiTwitterAlt size={30} />
              </a>
              <a
                className="mx-2"
                href="https://www.instagram.com/aisaturdayslagos/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram size={30} />
              </a>
              <a
                className="mx-2"
                href="https://www.linkedin.com/company/68993333/admin/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin size={30} />
              </a>
            </div>
          </div>
          <span className="block text-sm text-white text-center sm:text-center ">
            &copy; {new Date().getFullYear()} . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
