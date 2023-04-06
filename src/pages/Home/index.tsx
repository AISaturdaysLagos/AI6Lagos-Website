import React from 'react';
import { GiArtificialIntelligence, GiArchiveResearch } from 'react-icons/gi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { GrCloudComputer } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const learningTracks = [
    {
      id: 1,
      title: 'Data Science and Machine Learning',
      icon: GiArtificialIntelligence,
    },
    {
      id: 1,
      title: 'Deep Learning',
      icon: GiArchiveResearch,
    },
    {
      id: 1,
      title: 'Research',
      icon: GrCloudComputer,
    },
  ];
  return (
    <Layout>
      <HomeSlider />
      <div className="mt-6 w-full md:w-[80%] md:mx-auto py-4">
        <div className="my-4">
          <div className="items-center justify-center flex flex-col ">
            <h1 className="mb-2 text-xl font-extrabold text-center text-gray-700 md:text-4xl ">
              Learning Tracks
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {learningTracks.map((track) => (
                <div
                  key={track.id}
                  className="rounded-xl card m-2 h-[140px] shadow-md  transform hover:-translate-y-1 transition-all duration-400"
                >
                  <div className={`rounded-xl h-full  p-[4px]`}>
                    <div className="flex flex-col justify-center h-full bg-white text-white rounded-lg">
                      <div className="m-3 flex justify-center flex-col items-center">
                        <h1 className=" text-gray-700">
                          <track.icon size={30} className="text-gray-700" />
                        </h1>
                        <h2 className="text-lg text-center text-gray-700 mb-2 ">
                          {track.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full md:w-[80%] md:mx-auto py-4">
        <div className="mt-2 mx-auto  lg:max-7xl md:max-w-6xl py-7 ">
          <h1 className="mb-5 text-xl font-extrabold text-center text-gray-700 md:text-4xl ">
            Latest Updates
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[75%] mx-auto">
            <div className="card mx-2 my-3  h-[150px] md:h-[150px] cursor-pointer border-transparent p-3 border-gray-500 rounded-lg shadow-md  bg-white hover:shadow-md transform hover:-translate-x-0 hover:-translate-y-2 transition-all duration-200">
              <div
                className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
              >
                <h2 className="text-md font-semibold text-gray-700 mb-2 ">
                  CohereAIHack
                </h2>
                <p className="text-sm text-gray-700">
                  Leverage Cohere’s Multilingual Embedding to Empower Creativity
                </p>

                <a
                  href="https://ai6lagos.devpost.com/"
                  target="_blank"
                  className="text-sm  mt-3 text-gray-700 inline-flex item-center underline"
                  rel="noreferrer"
                >
                  Register
                </a>
              </div>
            </div>
            <div className="card mx-2 my-3  h-[150px] md:h-[150px]  border-transparent p-3 border-gray-500 rounded-lg shadow-md  bg-white hover:shadow-md transform hover:-translate-x-0 hover:-translate-y-2 transition-all duration-200">
              <div
                className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
              >
                <h2 className="text-md text-gray-700 mb-2 font-semibold">
                  AI Saturdays Lagos partners with NVIDIA
                </h2>
                <p className="text-sm text-gray-700">
                  AI Saturdays Lagos has kickstarted a partnership with NVIDIA,
                  and we will introduce the community to the vast resource and
                  tools available at NVIDIA
                </p>
              </div>
            </div>
            <div className="card mx-2 my-3  h-[150px] md:h-[150px]  border-transparent p-3 border-gray-500 rounded-lg shadow-md  bg-white hover:shadow-md transform hover:-translate-x-0 hover:-translate-y-2 transition-all duration-200">
              <div
                className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
              >
                <h2 className="text-md text-gray-700 mb-2 font-semibold">
                  AI Saturdays Lagos Recieves Grant
                </h2>

                <p className="text-gray-700 tex-sm">
                  Two projects from the AI6 Lagos research track received
                  IndabaX- AI4D research grant worth $8000
                </p>

                <a
                  href="https://www.pscp.tv/w/ch2AhDFxTFFHVkp2QXdwRUp8MXlvS01YTWFrTWt4UeTlYOHqH_gF5Ra1yFryc6g27d0GNcyD-Q4OqlOhRzi4?t=3s&s=09"
                  target="_blank"
                  className="text-sm  mt-3 text-gray-700 inline-flex item-center underline"
                  rel="noreferrer"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
