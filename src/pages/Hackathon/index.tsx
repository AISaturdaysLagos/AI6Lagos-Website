import React from 'react';
import { Link } from 'react-router-dom';
import { SiBuildkite } from 'react-icons/si';
import { HiDocument } from 'react-icons/hi';
import { AiFillStar, AiOutlineTeam } from 'react-icons/ai';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
const Hackathon: React.FC = () => {
  return (
    <Layout>
      <div className="mt-20">
        <div className="bg-[linear-gradient(to_left_bottom,rgba(248,147,32,0.2),rgba(248,147,32,0.4),rgba(248,147,32,0.8)),url('https://res.cloudinary.com/owujib/image/upload/v1680478882/ai-saturdays-imgs/Group_1_nqp4ec.jpg')] bg-no-repeat bg-cover">
          <div className="mx-auto md:w-[80%] lg:w-[80%] h-[300px] flex items-center justify-center ">
            <div className="w-[80%] md:w-full ">
              <h1 className="text-2xl md:text-4xl my-3 font-bold text-white">
                CohereAI Hack <br />
                Leveraging Cohere's Multilingual Embedding to Empower Creativity
              </h1>

              <Link
                to="#"
                className="bg-white my-4 px-4 py-2 text-xl hover:bg-transparent hover:border-white hover:border-2 hover:text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* about the hackathon */}

      <div className="w-full my-10">
        <div
          className={`rounded-xl container w-[85%] mx-auto h-full p-[4px] bg-gradient-to-r to-orange-900 via-orange-400 from-orange-600`}
        >
          <div className="flex flex-col justify-center h-full bg-white text-black rounded-lg">
            <div className="">
              <div className="div p-5">
                <h1 className="mb-5 text-3xl font-extrabold text-center text-gray-900  md:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-700 from-orange-400">
                    About the Hackathon.
                  </span>
                </h1>

                <h3 className="text-xl font-bold text-left text-gray-900">
                  Who should participate?
                </h3>

                <p className="text-left">
                  Previous experience in AI is not required but welcomed. While
                  many participants are industry experts, we also welcome people
                  with other types of domain knowledge that want to understand &
                  explore how AI can be used in their fields
                </p>

                <div className="grid grid-cols-1  mt-4 box-border  md:grid-cols-2 lg:grid-cols-2">
                  <div className="card mx-2 my-3 border-transparent p-3">
                    <div
                      className={`rounded-xl h-full p-[4px] flex items-start justify-evenly  flex-col`}
                    >
                      <span className="px-3 py-3 my-3 bg-orange-300 rounded text-center">
                        <AiOutlineTeam size={25} />
                      </span>
                      <h2 className="text-gray-800 my-2 font-bold text-xl ">
                        Team Representation{' '}
                      </h2>
                      <p className="text-justify">
                        <ul>
                          <li className="list-disc">
                            Each team or organization that enters the Hackathon
                            must appoint one individual (the{' '}
                            <q>Representative</q>) to represent, act, and enter
                            a Submission on its behalf. The Representative must
                            meet the eligibility requirements above.
                          </li>
                          <li className="list-disc">
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

                  <div className="card mx-2 my-3  border-transparent  p-3">
                    <div
                      className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                    >
                      <span className="px-3 py-3 my-3 bg-orange-300 rounded text-center">
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
                  <div className="card mx-2 my-3  border-transparent  p-3">
                    <div
                      className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                    >
                      <span className="px-3 py-3 my-3 bg-orange-300 rounded text-center">
                        <HiDocument size={25} />
                      </span>
                      <h2 className="text-gray-800 my-2 font-bold text-xl ">
                        Documents and Resources for Hackers
                      </h2>
                      <ul>
                        <li className="my-2">
                          <a
                            href="https://dashboard.cohere.ai/welcome/register"
                            target="_black"
                            className="text-black underline text-md"
                          >
                            Freemium tier API Access
                          </a>
                        </li>
                        <li className="text-black text-md">
                          Retrieving datasets{' '}
                          <a
                            href="https://www.kaggle.com/datasets"
                            target="_blank"
                            rel="noreferrer"
                            className="text-black underline text-md"
                          >
                            Kaggle
                          </a>{' '}
                          and
                          <a
                            href="https://www.kaggle.com/datasets"
                            target="_blank"
                            rel="noreferrer"
                            className="text-black underline text-md"
                          >
                            Google
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://docs.cohere.ai/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-black underline text-md"
                          >
                            All Cohere Doc & Quickstart Tutorials{' '}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://txt.cohere.ai/deploy-cohere-streamlit/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-black underline text-md"
                          >
                            Building with Streamlit{' '}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://dashboard.cohere.ai/welcome/register"
                            target="_blank"
                            rel="noreferrer"
                            className="text-black underline text-md"
                          >
                            Freemium tier API Access
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://docs.cohere.ai/page/application-examples/"
                            target="_blank"
                            className="text-black underline text-md"
                            rel="noreferrer"
                          >
                            Learn about some application examples
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center w-full mb-5  text-white">
                <a
                  href="https://ai6lagos.devpost.com"
                  className="bg-[#f89320] w-[75px] rounded px-6 py-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* prizes */}
      <div className="w-full my-10 ">
        <div className="">
          <div className="mx-auto p-5 container">
            <h1 className="mb-5 text-2xl font-bold text-center text-gray-700 md:text-4xl lg:text-4xl">
              Prizes.
            </h1>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 container px-7 md:px-14 lg:px-14 mt-4 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3">
                <div className="card mx-2 my-3 shadow-xl hover:shadow-2xl rounded-xl p-3 hover:cursor-pointer">
                  <div
                    className={`rounded-xl h-full p-[4px] flex items-center justify-center flex-col`}
                  >
                    <span className="px-3 py-3 my-3  rounded text-center">
                      <AiFillStar size={35} className="text-orange-500" />
                    </span>
                    <h2 className="text-gray-800 my-2 font-bold text-xl ">
                      First Place
                    </h2>
                    <p className="text-justify">
                      +3000 Cohere API Credits. Build a demo package for social
                      media feature. Prizes are spilt among team members
                    </p>
                  </div>
                </div>
                <div className="card mx-2 my-3 shadow-xl hover:shadow-2xl rounded-xl p-3 hover:cursor-pointer">
                  <div
                    className={`rounded-xl h-full p-[4px] flex items-center justify-center flex-col`}
                  >
                    <span className="px-3 py-3 my-3  rounded text-center">
                      <AiFillStar size={35} className="text-orange-500" />
                    </span>
                    <h2 className="text-gray-800 my-2 font-bold text-xl ">
                      Second Place
                    </h2>
                    <p className="text-justify">
                      +2000 Cohere API Credits.Prizes are spilt among team
                      members
                    </p>
                  </div>
                </div>
                <div className="card mx-2 my-3 shadow-xl hover:shadow-2xl rounded-xl p-3 hover:cursor-pointer">
                  <div
                    className={`rounded-xl h-full p-[4px] flex items-center justify-evenly flex-col`}
                  >
                    <span className="px-3 py-3 my-3  rounded text-center">
                      <AiFillStar size={35} className="text-orange-500" />
                    </span>
                    <h2 className="text-gray-800 my-2 font-bold text-xl ">
                      Third Place
                    </h2>
                    <p className="text-justify">
                      +1000 Cohere API Credits. Prizes are spilt among team
                      members
                    </p>
                  </div>
                </div>
                <div className="card mx-2 my-3 shadow-xl hover:shadow-2xl rounded-xl p-3 hover:cursor-pointer">
                  <div
                    className={`rounded-xl h-full p-[4px] flex items-center justify-center flex-col`}
                  >
                    <span className="px-3 py-3 my-3  rounded text-center">
                      <AiFillStar size={35} className="text-orange-500" />
                    </span>
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
      <div className="w-full my-10 bg-[#f89320]">
        <div className="">
          <div className="mx-auto p-5 container">
            <h1 className="mb-5 text-3xl font-extrabold text-center text-white md:text-5xl lg:text-6xl">
              Timeline for Hackathon
            </h1>
            <div className="container w-[70%] mt-5 md:w-[60%] lg:w-[60%] mx-auto">
              <ol className="relative border-l border-white dark:border-white ">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      7<sup>th</sup>
                    </span>{' '}
                    April 2023
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Application/Enrollment deadline
                  </h3>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      28<sup>th</sup>
                    </span>{' '}
                    April 2023
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Hack kick-off livestream
                  </h3>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      29-30<sup>th</sup>
                    </span>{' '}
                    April 2023{' '}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Workshop sessions
                  </h3>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border  border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      6<sup>th</sup>
                    </span>{' '}
                    May 2023{' '}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Project submission deadline
                  </h3>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      13<sup>th</sup>
                    </span>{' '}
                    April 2023{' '}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Winner livestream announcement{' '}
                  </h3>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full my-4 ">
        <div className="">
          <div className="mx-auto p-5 container">
            <h1 className="mb-4 text-3xl font-extrabold text-center text-white md:text-5xl lg:text-6xl">
              Transformers Hackathon details
            </h1>
            <div className="container w-[70%] mt-5 md:w-[60%] lg:w-[60%] mx-auto">
              <ol className="relative border-l border-white dark:border-white      items-center sm:flex">
                <li className="mb-4 ml-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      7<sup>th</sup>
                    </span>{' '}
                    April 2023
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Application/Enrollment deadline
                  </h3>
                </li>
                <li className="mb-4 ml-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      28<sup>th</sup>
                    </span>{' '}
                    April 2023
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Hack kick-off livestream
                  </h3>
                </li>
                <li className="ml-4 mb-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      29-30<sup>th</sup>
                    </span>{' '}
                    April 2023{' '}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Workshop sessions
                  </h3>
                </li>
                <li className="ml-4 mb-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border  border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      6<sup>th</sup>
                    </span>{' '}
                    May 2023{' '}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Project submission deadline
                  </h3>
                </li>
                <li className="ml-4 mb-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white  bg-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">
                    <span>
                      13<sup>th</sup>
                    </span>{' '}
                    April 2023{' '}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Winner livestream announcement{' '}
                  </h3>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full my-4 ">
        <div className="">
          <div className="mx-auto p-5 container">
            <h1 className="mb-5 text-xl font-bold text-center  text-gray-700 md:text-2xl lg:text-xl">
              Hackathon Sponsors and Partners
            </h1>
            <div className="container mx-auto w-[90%]">
              <div className="flex items-center justify-center mx-auto flex-wrap">
                <div className="w-1/3 sm:w-44 px-4 my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/136/highres/imageedit_1_9736518548.jpg"
                    alt="Ai Saturday Lagos"
                    width="100%"
                  />
                </div>
                <div className="w-2/3 sm:w-44 px-4  my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/137/highres/Untitled.png"
                    alt="Ai Saturday Lagos"
                    width="100%"
                  />
                </div>
                <div className="w-1/3 sm:w-44 px-4  my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/142/highres/imageedit_19_8898109917.png"
                    alt="Arewa Datascience Community"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-44 px-4  my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/141/highres/imageedit_17_6751278248.jpg"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-44 px-4   my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/139/highres/imageedit_7_8508616043.jpg"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-44 px-4  my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/140/highres/imageedit_9_6463237720.jpg"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
                <div className="w-1/3 sm:w-44 px-4  my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/145/highres/imageedit_21_8843030975.png"
                    alt="Arewa Datascience Community"
                    width={'100%'}
                  />
                </div>

                <div className="w-1/3 sm:w-44 px-4  my-2">
                  <img
                    src="https://s3.amazonaws.com/challengepost/sponsors/logos/000/030/144/highres/Primary_%281%29.png"
                    alt="Ai Saturday Lagos"
                    width={'100%'}
                  />
                </div>
              </div>
            </div>
          </div>
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

          <div className="w-full my-10 ">
            <div className="">
              <div className="mx-auto p-5 container">
                <h1 className="mb-6 text-2xl font-bold text-center text  text-gray-700 md:text-2xl lg:text-2xl">
                  Judging Crteria{' '}
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
                  <div className="my-3">
                    <img
                      width={'95px'}
                      className="rounded-full"
                      alt=""
                      src="https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/002/434/851/datas/large.png"
                    />

                    <span className="font-semibold ">Tejumade Afonja</span>
                    <br />
                    <span>Judge- Ai Saturday Lagos</span>
                  </div>
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
