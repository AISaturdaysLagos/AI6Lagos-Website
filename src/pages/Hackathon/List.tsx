import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const hackathonList = [
  {
    name: 'CohereAI Hack',
    ongoing: true,
    data: '28th April - 13th May 2023',
    description: `Use Cohere's multilingual embedding to empower your creativity, and foster innovation that drives progress and growth in Africa and beyond.`,
  },
  {
    name: 'LagosAi Hack 2',
    ongoing: false,
    data: '28th -  23th July, 2018',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor vitae tempore itaque, ea ipsa dignissimos corporis iure consequatur.
    `,
  },
] as const;
const HackathonList: React.FC = () => {
  return (
    <Layout>
      <div className="mt-20">
        <div className="bg-[linear-gradient(to_left_bottom,rgba(248,147,32,0.2),rgba(248,147,32,0.4),rgba(248,147,32,0.8)),url('https://res.cloudinary.com/owujib/image/upload/v1680478882/ai-saturdays-imgs/Group_1_nqp4ec.jpg')] bg-no-repeat bg-cover">
          <div className="mx-auto md:w-[80%] lg:w-[80%] h-[300px] flex items-center justify-center ">
            <div className="w-[80%] md:w-full text-center">
              <h1 className="text-2xl md:text-4xl my-3 font-bold text-white">
                Community Events{' '}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* about the hackathon */}

      {/* prizes */}
      <div className="w-full my-10 ">
        <div className="">
          <div className="mx-auto p-5 container ">
            <h1 className="mb-5 text-2xl font-bold text-center text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-700 from-orange-400">
                Explore Hackathons.
              </span>
            </h1>

            <div className="container mx-auto w-[75%]">
              <div className="grid grid-cols-1 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {hackathonList.map((hack, index) => (
                  <div
                    key={index}
                    className="card mx-2 my-3 h-auto  cursor-pointer  rounded-lg shadow-lg shadow-gray-300 bg-white hover:shadow-md transform hover:-translate-x-0 hover:-translate-y-2 transition-all duration-200"
                  >
                    <Link
                      to={hack?.ongoing ? '/hackathon/cohere-ai-hack' : '#'}
                    >
                      <div className="bg-gray-400 w-full h-[150px] rounded-t"></div>
                      <div className="p-4">
                        <span className="bg-orange-300 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                          <svg
                            aria-hidden="true"
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          {hack.ongoing ? 'ongoing' : 'ended'}
                        </span>
                      </div>
                      <div
                        className={` flex items-start justify-center flex-col p-4`}
                      >
                        <h2 className="text-lg font-bold text-gray-700 mb-1 ">
                          {hack.name}
                        </h2>
                        <p className="text-md w-full">{hack.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default HackathonList;
