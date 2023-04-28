import React from 'react';
import { Link } from 'react-router-dom';

import { FiExternalLink } from 'react-icons/fi';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
const Hackathon: React.FC = () => {
  return (
    <Layout>
      <div className="mt-20">
        <div className="bg-[linear-gradient(to_left_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('https://res.cloudinary.com/owujib/image/upload/v1682686841/ai-saturdays-imgs/cohere-banner_v5o2ce.jpg')] bg-no-repeat  bg-fixed bg-top-right">
          {/* <div className="bg-[linear-gradient(to_left_bottom,rgba(248,147,32,0.4),rgba(248,147,32,0.5),rgba(248,147,32,0.8)),url('https://res.cloudinary.com/owujib/image/upload/v1680478882/ai-saturdays-imgs/Group_1_nqp4ec.jpg')] bg-no-repeat bg-cover"> */}
          <div className="mx-auto md:w-[80%] lg:w-[80%] h-[300px] flex items-center justify-center ">
            <div className="w-[80%] md:w-full ">
              <h1 className="text-2xl md:text-4xl my-3 font-bold text-white mb-10">
                CohereAI Hack <br />
                Leveraging Cohere's Multilingual Embedding to Empower Creativity
              </h1>

              <Link to="#" className="bg-white  px-4 py-2 text-xl rounded-md">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* about the hackathon */}

      <div className="w-full my-10">
        <div className={`rounded-xl container w-[85%] mx-auto h-full p-[4px]`}>
          <div className="flex flex-col justify-center h-full  text-gray-700 rounded-lg">
            <div className="">
              <div className="div">
                <h1 className="mb-2 text-xl font-extrabold text-center text-gray-700 md:text-3xl ">
                  About the Hackathon
                </h1>

                <h3 className="text-xl mt-6 font-bold text-left text-gray-700">
                  Who should participate?
                </h3>

                <p className="text-left text-md md:w-[70%] lg:w-[70%]">
                  Previous experience in AI is not required but welcomed. While
                  many participants are industry experts, we also welcome people
                  with other types of domain knowledge that want to understand &
                  explore how AI can be used in their fields
                </p>

                <hr className="my-8 h-px bg-gray-400 border-0 " />

                <div className="flex flex-wrap gap-10 items-start mt-10">
                  <div className="card my-3 border-transparent md:w-[45%] lg:w-[45%]">
                    <div
                      className={`rounded-xl h-full flex items-start justify-evenly  flex-col`}
                    >
                      <h2 className="text-gray-800 mt-2 font-bold text-xl ">
                        Team Representation{' '}
                      </h2>
                      <p className="text-justify">
                        <ul>
                          <li className="border-b-[1px] mb-3 pb-4 border-gray-700">
                            Each team or organization that enters the Hackathon
                            must appoint one individual (the{' '}
                            <q>Representative</q>) to represent, act, and enter
                            a Submission on its behalf. The Representative must
                            meet the eligibility requirements above.
                          </li>
                          <li className="border-b-[1px] mb-3 pb-4 border-gray-700">
                            By entering a Submission on the Hackathon Website on
                            behalf of a team, you represent and are authorized
                            to act on behalf of your team or organization. Teams
                            may be made up of a maximum of five eligible
                            individuals.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="card md:w-[45%] lg:w-[45%] md:block hidden">
                    <img
                      src="https://res.cloudinary.com/owujib/image/upload/v1682630400/ai-saturdays-imgs/pexels-helena-lopes-1015568_t6mpam.jpg"
                      alt="..."
                      className="w-[100%] rounded-lg"
                    />
                  </div>
                  <div className="card md:w-[45%] lg:w-[45%] md:block hidden">
                    <img
                      src="https://res.cloudinary.com/owujib/image/upload/v1682639154/ai-saturdays-imgs/pexels-mati-mango-6330644_dfhl4h.jpg"
                      alt="..."
                      className="w-[100%] rounded-lg"
                    />
                  </div>
                  <div className="card mt-3 border-transparent md:w-[45%] lg:w-[45%]">
                    <div className={`rounded-xl p-[2px]`}>
                      <h2 className="text-gray-800 font-bold text-xl ">
                        Language Requirements{' '}
                      </h2>
                      <p className="text-justify">
                        All Submission materials must be in English or, if not
                        in English, an English translation of the text
                        description, and testing instructions as well as all
                        other materials submitted must be provided.
                      </p>
                    </div>
                  </div>

                  <div className="card mt-3 border-transparent md:w-[45%] lg:w-[45%]">
                    <div className={`rounded-xl p-[2px] `}>
                      <h2 className="text-gray-800 font-bold text-xl ">
                        Language Requirements{' '}
                      </h2>
                      <p className="text-justify"></p>
                      <ul>
                        <li className="my-2">
                          Freemium tier API Access
                          <a
                            href="https://dashboard.cohere.ai/welcome/register"
                            target="_black"
                            className="text-[#f89320] underline text-md inline-block"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        </li>
                        <li className="text-black text-md my-2">
                          <>
                            Retrieving datasets Kaggle
                            <a
                              href="https://www.kaggle.com/datasets"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#f89320] underline text-md inline"
                            >
                              <FiExternalLink size={20} />
                            </a>{' '}
                            and Google
                            <a
                              href="https://www.kaggle.com/datasets"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#f89320] underline  text-md inline"
                            >
                              <FiExternalLink size={20} />
                            </a>
                          </>
                        </li>
                        <li className="text-black text-md my-2">
                          All Cohere Doc & Quickstart Tutorials{' '}
                          <a
                            href="https://docs.cohere.ai/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#f89320] underline text-md inline-block "
                          >
                            <FiExternalLink size={20} />
                          </a>
                        </li>
                        <li className="text-black text-md my-2">
                          Building with Streamlit{' '}
                          <a
                            href="https://txt.cohere.ai/deploy-cohere-streamlit/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#f89320] underline text-md inline-block"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        </li>
                        <li className="text-black text-md my-2">
                          Freemium tier API Access
                          <a
                            href="https://dashboard.cohere.ai/welcome/register"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#f89320] underline text-md inline-block "
                          >
                            <FiExternalLink size={20} />
                          </a>
                        </li>
                        <li className="text-black text-md my-2">
                          Learn about some application examplesg
                          <a
                            href="https://docs.cohere.ai/page/application-examples/"
                            target="_blank"
                            className="text-[#f89320] underline text-md inline-block"
                            rel="noreferrer"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        </li>
                      </ul>
                      <div className="text-left w-full mb-5 mt-10  text-white">
                        <a
                          href="https://ai6lagos.devpost.com"
                          className="bg-[#f89320cd] w-[80px] rounded-md px-6 py-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card md:w-[45%] lg:w-[45%] md:block hidden">
                    <img
                      src="https://res.cloudinary.com/owujib/image/upload/v1682639154/ai-saturdays-imgs/pexels-element-digital-1370294_ekmljc.jpg"
                      alt="..."
                      className="w-[100%] rounded-lg"
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 mt-4 box-border w-[100%] md:w-[100%] lg:w-[100%] md:grid-cols-2 lg:grid-cols-2">
                  <div>
                    <div className="card mx-2 my-3 border-transparent ">
                      <div
                        className={`rounded-xl h-full p-[4px] flex items-start justify-evenly  flex-col`}
                      >
                        <span className="px-3 py-3 my-3 bg-[#f8932080] rounded text-center">
                          <AiOutlineTeam size={25} />
                        </span>
                        <h2 className="text-gray-800 my-2 font-bold text-xl ">
                          Team Representation{' '}
                        </h2>
                        <p className="text-justify">
                          <ul>
                            <li className="border-b-[1px] mb-3 pb-4 border-gray-700">
                              Each team or organization that enters the
                              Hackathon must appoint one individual (the{' '}
                              <q>Representative</q>) to represent, act, and
                              enter a Submission on its behalf. The
                              Representative must meet the eligibility
                              requirements above.
                            </li>
                            <li className="border-b-[1px] mb-3 pb-4 border-gray-700">
                              By entering a Submission on the Hackathon Website
                              on behalf of a team, you represent and are
                              authorized to act on behalf of your team or
                              organization. Teams may be made up of a maximum of
                              five eligible individuals.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="card mx-2 my-3  border-transparent  ">
                      <div
                        className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                      >
                        <span className="px-3 py-3 my-3 bg-[#f8932080] rounded text-center">
                          <SiBuildkite size={25} />
                        </span>
                        <h2 className="text-gray-800 my-2 font-bold text-xl ">
                          Language Requirements{' '}
                        </h2>
                        <p className="text-justify">
                          All Submission materials must be in English or, if not
                          in English, an English translation of the text
                          description, and testing instructions as well as all
                          other materials submitted must be provided.
                        </p>
                      </div>
                    </div>
                    <div className="card mx-2 my-3  border-transparent">
                      <div
                        className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                      >
                        <span className="px-3 py-3 my-3 bg-[#f8932080] rounded text-center">
                          <HiDocument size={25} />
                        </span>
                        <h2 className="text-gray-800 my-2 font-bold text-xl ">
                          Documents and Resources for Hackers
                        </h2>
                        <ul>
                          <li className="my-2">
                            Freemium tier API Access
                            <a
                              href="https://dashboard.cohere.ai/welcome/register"
                              target="_black"
                              className="text-[#f89320] underline text-md inline-block mx-[1px] "
                            >
                              <FiExternalLink size={20} />
                            </a>
                          </li>
                          <li className="text-black text-md">
                            <span className="inline-flex">
                              Retrieving datasets Kaggle
                              <a
                                href="https://www.kaggle.com/datasets"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#f89320] underline text-md inline mx-[1px] "
                              >
                                <FiExternalLink size={20} />
                              </a>{' '}
                              and Google
                              <a
                                href="https://www.kaggle.com/datasets"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#f89320] underline mx-[1px] text-md inline"
                              >
                                <FiExternalLink size={20} />
                              </a>
                            </span>
                          </li>
                          <li>
                            All Cohere Doc & Quickstart Tutorials{' '}
                            <a
                              href="https://docs.cohere.ai/"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#f89320] underline text-md inline-block mx-[1px]"
                            >
                              <FiExternalLink size={20} />
                            </a>
                          </li>
                          <li>
                            Building with Streamlit{' '}
                            <a
                              href="https://txt.cohere.ai/deploy-cohere-streamlit/"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#f89320] underline text-md inline-block mx-[1px]"
                            >
                              <FiExternalLink size={20} />
                            </a>
                          </li>
                          <li>
                            Freemium tier API Access
                            <a
                              href="https://dashboard.cohere.ai/welcome/register"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#f89320] underline text-md inline-block mx-[1px]"
                            >
                              <FiExternalLink size={20} />
                            </a>
                          </li>
                          <li>
                            Learn about some application examplesg
                            <a
                              href="https://docs.cohere.ai/page/application-examples/"
                              target="_blank"
                              className="text-[#f89320] underline text-md inline-block mx-[1px]"
                              rel="noreferrer"
                            >
                              <FiExternalLink size={20} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:block lg:block mr-5 hidden rounded-lg h-[45%] ml-6">
                    <img
                      src="https://res.cloudinary.com/owujib/image/upload/v1680792985/ai-saturdays-imgs/Cohere__3_tmjbf4.png"
                      alt="CohereAI"
                    />
                    <div className="px-3">
                      <p>
                        Cohere's Multilingual Model translates text using a
                        semantic vector space, which groups comparable material
                        together based on meaning. This approach has various
                        advantages in multilingual contexts, such as the ability
                        to map a search query to this vector space to identify
                        relevant pages that are close. When compared to keyword
                        searches, this method frequently provides substantially
                        more accurate search results.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="text-left w-full mb-5 mt-10  text-white">
                <a
                  href="https://ai6lagos.devpost.com"
                  className="bg-[#f89320cd] w-[80px] rounded-md px-6 py-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* prizes */}
      <div className="w-full my-10 ">
        <div className="">
          <div className="mx-auto p-5 container">
            <h1 className="mb-5 text-2xl font-bold text-center text-gray-700 md:text-4xl lg:text-3xl">
              Prizes
            </h1>

            <div className="container md:mx-auto">
              <div className="grid grid-cols-1 md:container px-4 md:px-14 lg:px-14 mt-4 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
                <div className="card mx-2 my-3 p-2">
                  <div
                    className={`rounded-xl  p-2 flex items-start justify-center flex-col`}
                  >
                    <h2 className="text-gray-800 my-2 font-bold text-md ">
                      First Place
                    </h2>
                    <p className="text-justify">
                      +3000 Cohere API Credits. Build a demo package for social
                      media feature. Prizes are spilt among team members
                    </p>
                  </div>
                </div>
                <div className="card mx-2 my-3 p-2">
                  <div
                    className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                  >
                    <h2 className="text-gray-800 my-2 font-bold text-xl ">
                      Second Place
                    </h2>
                    <p className="text-justify">
                      +2000 Cohere API Credits.Prizes are spilt among team
                      members
                    </p>
                  </div>
                </div>
                <div className="card mx-2 my-3  p-2">
                  <div
                    className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                  >
                    <h2 className="text-gray-800 my-2 font-bold text-xl ">
                      Third Place
                    </h2>
                    <p className="text-justify">
                      +1000 Cohere API Credits. Prizes are spilt among team
                      members
                    </p>
                  </div>
                </div>
                <div className="card mx-2 my-3 p-2">
                  <div
                    className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                  >
                    <h2 className="text-gray-800 my-2 font-bold text-xl ">
                      Fourth Place
                    </h2>
                    <p className="text-justify">
                      +500 Cohere API Credits. Prizes are spilt among team
                      members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="w-full my-10">
        <div className="">
          <div className="mx-auto p-5 container">
            <h1 className="mb-2 text-xl font-extrabold text-center text-gray-700 md:text-3xl ">
              Timeline for Hackathon
            </h1>
            <div className="container  px-16 w-[100%] mt-5 md:w-[100%] lg:w-[100%] mx-auto">
              <ol className="border-l border-gray-800 ">
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-gray-700"></div>
                    <p className="text-sm text-gray-700">
                      <span>
                        7<sup>th</sup>
                      </span>{' '}
                      April 2023{' '}
                    </p>
                  </div>
                  <div className="mt-2 ml-4 mb-6">
                    <h4 className="text-lg font-semibold  text-gray-700">
                      Application/Enrollment deadline
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-gray-700"></div>
                    <p className="text-sm text-gray-700">
                      {' '}
                      <span>
                        28<sup>th</sup>
                      </span>{' '}
                      April 2023
                    </p>
                  </div>
                  <div className="mt-2 ml-4 mb-6">
                    <h4 className="text-lg font-semibold text-gray-700">
                      Hack kick-off livestream
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-gray-700 "></div>
                    <p className="text-sm text-gray-700">
                      <span>
                        29-30<sup>th</sup>
                      </span>{' '}
                      April 2023{' '}
                    </p>
                  </div>
                  <div className="mt-2 ml-4 pb-5">
                    <h4 className="text-lg font-semibold  text-gray-700">
                      Workshop sessions{' '}
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-gray-700"></div>
                    <p className="text-sm text-gray-700">
                      <span>
                        6<sup>th</sup>
                      </span>{' '}
                      May 2023{' '}
                    </p>
                  </div>
                  <div className="mt-2 ml-4 pb-5">
                    <h4 className="text-lg font-semibold  text-gray-700">
                      Project submission deadline{' '}
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-gray-700 "></div>
                    <p className="text-sm text-gray-700">
                      <span>
                        6<sup>th</sup>
                      </span>{' '}
                      May 2023{' '}
                    </p>
                  </div>
                  <div className="mt-2 ml-4 pb-5">
                    <h4 className="text-lg font-semibold  text-gray-700">
                      Winner livestream announcement
                    </h4>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col container mx-auto w-[80%]">
        <div className="sm:-mx-6 lg:-mx-8 ">
          <h1 className="mb-6 text-2xl font-bold text-center text  text-gray-700 md:text-2xl lg:text-2xl">
            Workshop Schedule{' '}
          </h1>
          {/* <div className="inline-block min-w-full py-2 sm:px-2 lg:px-4"> */}
          <div className="relative overflow-x-auto border-[1px] border-gray-600">
            <table className="w-full text-sm text-left text-gray-700 ">
              <thead className="border-b font-medium dark:border-neutral-600">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-600"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-600"
                  >
                    Proposed Topic
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-600"
                  >
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    7-Apr
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Launch- Registration
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"></td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    28-Apr
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    <ul className="list-disc">
                      <li>Welcome keynote by Luis and Teju JJ</li>
                      <li> Introduction to Hackathon Challenge by Roy and</li>
                      <li>Team Formation</li>
                      <li> Q&A</li>
                    </ul>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    TBD
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Zoom, Youtube Livestream [online]
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    29-Apr
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    <ul className="list-disc">
                      <li>
                        Tutorial: Large Language Models for Real-World
                        Applications- A Gentle Intro by Luis Serrano
                      </li>
                      <li> Topic by Sara Hooker</li>
                      <li>
                        Tutorial: How to Add AI to your App (Pre-recording)
                      </li>
                    </ul>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    TBD
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Zoom, Youtube Livestream [online]
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    30-Apr
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    <ul className="list-disc">
                      <li>Q&A</li>
                      <li> Team Formation</li>
                      <li>Tutorial: Pending</li>
                    </ul>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    TBD
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Zoom, Youtube Livestream [online]
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    30 Apr - 6 May
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Hacking in progress - Tips and Tricks + teams check-in
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    7 days
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Discord [online]
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    6 May
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Last day of hacking (optional In-person event) <br />
                    Lagos, Ibadan, Kigali. Abuja, Ibadan and Kano
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    9-6pm (TBD)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Lagos, Ibadan, Abuja, Kigali, Kano <br />
                    [online + in-person]{' '}
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    6 May
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Submission deadline
                    <br />
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    23:59 WAT
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Google Form / DevPost?
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    7 May
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    <ul className="list-disc">
                      <li>Tutorial: How to pitch</li>
                      <li>
                        {' '}
                        Community networking: co:lab friday invitation -
                        Inspiration
                      </li>
                    </ul>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"></td>
                  <td className="whitespace-nowrap px-6 py-4">Discord</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    13-May
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Presentation+Winner announcement
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    2-4hrs
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Zoom, Youtube Livestream <br />
                    [online]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="w-full my-4 ">
        <div className="">
          {/* <div className="mx-auto p-5 container">
            <div className="container w-[100%]">
              <div className="flex items-center justify-around flex-wrap mx-auto  w-[80%]">
                <div className="w-1/3 sm:w-1/5 px-4">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/142/highres/imageedit_19_8898109917.png"
                    alt="Arewa Datascience Community"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-1/5 px-4">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/141/highres/imageedit_17_6751278248.jpg"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-1/5 px-4">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/139/highres/imageedit_7_8508616043.jpg"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-1/5 px-4">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/140/highres/imageedit_9_6463237720.jpg"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="mx-auto p-5 container">
            <div className="container ">
              <div className="flex items-center justify-center flex-wrap mx-auto  w-[85%]">
                <div className="w-1/3 sm:w-1/5 px-4">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/145/highres/imageedit_21_8843030975.png"
                    alt="Arewa Datascience Community"
                    width={'100%'}
                  />
                </div>

                <div className="w-1/3 sm:w-1/5 px-4">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/144/highres/Primary_%281%29.png"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
              </div>
            </div>
          </div> */}

          <div className="w-full my-10">
            <div className="">
              <div className="mx-auto p-5 container">
                <h1 className="mb-6 text-2xl font-bold text-center text  text-gray-700 md:text-2xl lg:text-2xl">
                  Judging Criteria
                </h1>
                <div className="container mx-auto w-[85%]">
                  <div className="my-3">
                    <h1 className="text-gray-700 text-lg font-semibold">
                      Idea Quality
                    </h1>
                    <p className="font-normal">
                      How creative, original or innovative is the idea?
                    </p>
                  </div>
                  <div className="my-3">
                    <h1 className="text-gray-700 text-lg font-semibold">
                      Implementation of Idea
                    </h1>
                    <p className="font-normal">
                      How well was the idea implemented technologically? Did the
                      solution use Cohere's multilingual embedding? Did the
                      solution incomporates other Cohere's technology (This is
                      not mandatory but is encouraged).{' '}
                    </p>
                  </div>
                  <div className="my-3">
                    <h1 className="text-gray-700 text-lg font-semibold">
                      Potential Impact
                    </h1>
                    <p className="font-normal">
                      Does the solution have a real-world (social) impact and
                      does it provide some sort of value to users?
                    </p>
                  </div>
                  <div className="my-3">
                    <h1 className="text-gray-700 text-lg font-semibold">
                      Pitch
                    </h1>
                    <p className="font-normal">
                      Did the pitch communicate why the team settled on the
                      specific solution? Were they able to articulate the value
                      to users?
                    </p>
                  </div>
                  <section className="text-left">
                    <div className="py-8 mx-auto max-w-screen-xl  text-center lg:py-10 lg:px-4">
                      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675726/ai-saturdays-imgs/teju-e1654621748194-400x500_-_AI_Saturdays_Lagos_ip8ycf.png')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Tejumade Afonja</span>
                          </h3>
                          <p className="text-sm">
                            Organizer, Judge, Mentor, Speaker - Co-founder / AI
                            Saturdays Lagos
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675724/ai-saturdays-imgs/Screenshot_2023-04-05_at_10.26.35_AM_-_Roy_Lim_pz9rsu.png')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Roy Lim</span>
                          </h3>
                          <p className="text-sm">
                            Organizer, Judge - Marketing Events Manager / Cohere{' '}
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675724/ai-saturdays-imgs/1550802578436_2_-_Roy_Lim_k6iwko.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Luis Serrano</span>
                          </h3>
                          <p className="text-sm">
                            Organizer, Judge, Speaker - Developer Relations Lead
                            / Cohere
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675726/ai-saturdays-imgs/sandra-turquoise-square_1_-_Roy_Lim_fswtwc.png')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Sandra Kublik</span>
                          </h3>
                          <p className="text-sm">
                            Organizer, Judge - Developer Relations / Cohere
                          </p>
                        </div>

                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675732/ai-saturdays-imgs/Adetola_Picture_-_icon_tola_ip8fkn.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Raheemat Adetola Adetunji</span>
                          </h3>
                          <p className="text-sm">
                            Organizer, Mentor - Vendease
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675725/ai-saturdays-imgs/20230312_135108_-_Babangida_Sani_smdgib.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Babangida Sani</span>
                          </h3>
                          <p className="text-sm">Organizer</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675728/ai-saturdays-imgs/20898E4A-8508-4AED-ACE1-60143D183B81_-_Akintayo_Jabar_qrrjai.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Akintayo Jabar</span>
                          </h3>
                          <p className="text-sm">
                            Organizer, Mentor - Data Scientist / Nithio
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675725/ai-saturdays-imgs/T47CT8XPG-US7DBQVKN-004fc91a83cf-512-removebg-preview_1_-_Taofeek_Olalere_rrefsq.png')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Taofeek Olalere</span>
                          </h3>
                          <p className="text-sm">
                            Organizer - Software Engineer / Tix Africa
                          </p>
                        </div>

                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675724/ai-saturdays-imgs/george_-_George_Igwegbe_x6fyht.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>George Igwegbe </span>
                          </h3>
                          <p className="text-sm">
                            Organizer, Judge, Mentor - Co-organizer, Instructor
                            / AI6 Lagos
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682679829/ai-saturdays-imgs/Code_Hub_EOYP-9_-_Emeka_Ohiri_upa6ec.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Ohiri Emeka Emmanuel </span>
                          </h3>
                          <p className="text-sm">
                            Organizer - Limitless-Wave Solutions Limited
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-top bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682679830/ai-saturdays-imgs/0K9A9379_-_Mubarak_Daha_Isa_arpat1.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Mubarak Daha Isa </span>
                          </h3>
                          <p className="text-sm">
                            Organizer Digital Campaigns Manager/Bridge Connect
                            Africa{' '}
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-top bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675735/ai-saturdays-imgs/IMG_20230425_102015_783_-_Sunday_A._AJAGBE_t2mruw.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Sunday Adeola Ajagbe</span>
                          </h3>
                          <p className="text-sm">
                            Judge, Mentor - First Technical University{' '}
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-top bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675727/ai-saturdays-imgs/IMG_3418_-_Orevaoghene_Ahia_cwilkd.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Orevaoghene Ahia</span>
                          </h3>
                          <p className="text-sm">
                            Mentor, Speaker - University of Washington{' '}
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-top bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682680884/ai-saturdays-imgs/passport_-_Abiola_John_Akinyele_qj2f0w.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Akinyele Abiola John</span>
                          </h3>
                          <p className="text-sm">
                            Mentor - University of Ibadan{' '}
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-top bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675724/ai-saturdays-imgs/luiza_-_Luiza_Pozzobon_vpzu14.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Luiza Pozzobon</span>
                          </h3>
                          <p className="text-sm">
                            Mentor - Research Scholar at Cohere For AI{' '}
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-top bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675725/ai-saturdays-imgs/A4965C02-130A-4AB1-8F12-FCA24BFD16D2_-_AZEEZ_FEMI_xprpo5.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Oluwafemi Azeez</span>
                          </h3>
                          <p className="text-sm">
                            Mentor - Senior Data Scientist / Pastel{' '}
                          </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <div className="w-36 h-36 mx-auto mb-4 bg-top bg-cover rounded-full bg-[url('https://res.cloudinary.com/owujib/image/upload/v1682675731/ai-saturdays-imgs/2022-03-07-18-22-53-936_-_Charles_Yusuf_ocjr8r.jpg')]"></div>
                          <h3 className="mb-1 text-md font-bold tracking-tight text-gray-700">
                            <span>Charles Yusuf</span>
                          </h3>
                          <p className="text-sm">
                            Mentor - Machine Learning Researcher / Trust Stamp{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto p-5 container">
            <h1 className="mb-5 text-xl font-bold text-center  text-gray-700 md:text-2xl lg:text-xl">
              Hackathon Sponsors and Partners
            </h1>
            <div className="container mx-auto w-[90%]">
              <div className="flex items-center justify-center mx-auto flex-wrap">
                <div className="w-1/3 sm:w-[10%] px-4 my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680792986/ai-saturdays-imgs/AI6_Lagos__11_xoorgk.png"
                    alt="Ai Saturday Lagos"
                    width="100%"
                  />
                </div>
                <div className="w-2/3 sm:w-[20%] px-4  my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680792985/ai-saturdays-imgs/Cohere__3_tmjbf4.png"
                    alt="CohereAI"
                    width="100%"
                  />
                </div>
                <div className="w-1/3 sm:w-[10%] px-4  my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680792985/ai-saturdays-imgs/Arewa__10_gjcefv.png"
                    alt="Arewa Datascience Community"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-[10%] px-4  my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680799330/ai-saturdays-imgs/AI6_Ibadan__1_fvbmwe.png"
                    alt="Ai Saturday Ibadan"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-[10%] px-4   my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680792985/ai-saturdays-imgs/AI6_Abuja__1_m3sx8b.png"
                    alt="Ai Saturday Abuja"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-[10%] px-4  my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680799610/ai-saturdays-imgs/CMU_Africa__13_jzuepu.png"
                    alt="CMU africa"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-[10%] px-4  my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680792985/ai-saturdays-imgs/Nithub__2_v86cjb.png"
                    alt="Nithub"
                    width={'100%'}
                  />
                </div>

                <div className="w-1/3 sm:w-[10%] px-4  my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680792985/ai-saturdays-imgs/Ehealth__5_dcnifz.png"
                    alt="E healthz"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-[10%] px-4  my-2">
                  <img
                    src="https://res.cloudinary.com/owujib/image/upload/v1680792985/ai-saturdays-imgs/Uni_Ibadan__2_e5wnin.png"
                    alt="University of Ibadan"
                    width={'100%'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Hackathon;
