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
      <div className="mt-4 w-full py-4">
        <div className="md:w-full w-full lg:w-full mt-4 py-4 md:h-80">
          <div className="items-center justify-center flex flex-col ">
            <h1 className="mb-5 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-700 from-orange-400">
                Learning Tracks.
              </span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {learningTracks.map((track) => (
                <div
                  key={track.id}
                  className="rounded-xl card m-2 h-[140px]  cursor-pointer border hover:shadow-md  transform hover:-translate-y-1 transition-all duration-400"
                >
                  <div
                    className={`rounded-xl h-full  p-[4px]  bg-gradient-to-r to-gray-500 from-orange-400`}
                  >
                    <div className="flex flex-col justify-center h-full bg-white text-white rounded-lg">
                      <div className="m-3 flex justify-center flex-col items-center">
                        <h1 className=" text-gray-700">
                          <track.icon size={30} className="text-gray-700" />
                        </h1>
                        <h2 className="text-lg text-center text-gray-700 mb-2 ">
                          {track.title}
                        </h2>
                        {/* <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                      Space, the final frontier. These are the voyages of the
                      Starship Enterprise. Its five-year mission: to explore
                      strange new worlds.
                    </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full max-w-full h-auto py-4 bg-orange-400">
        <div className="mt-4 mx-auto  lg:max-7xl md:max-w-6xl py-7 ">
          <h1 className="mb-5 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-white">
              Latest Updates.
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((track, index) => (
              <div
                key={index}
                className="card mx-2 my-3  h-[150px] md:h-[150px] cursor-pointer border-transparent p-3 border-gray-500 rounded-lg shadow-md shadow-gray-700 bg-white hover:shadow-md transform hover:-translate-x-0 hover:-translate-y-2 transition-all duration-200"
              >
                <div
                  className={`rounded-xl h-full p-[4px] flex items-start justify-center flex-col`}
                >
                  <h2 className="text-base text-gray-700 mb-2 ">
                    Application for the 7th cohort is open
                  </h2>
                  {/* <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                    If you are eager to learn data science, machine learning or
                    deep learning, then you should consider applying.
                  </p> */}

                  <Link
                    to="/"
                    className="text-sm  mt-3 text-black inline-flex item-center"
                  >
                    view more <HiArrowNarrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
