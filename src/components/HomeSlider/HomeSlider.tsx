import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { TiArrowRight, TiArrowLeft } from 'react-icons/ti';

const HomeSlider = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    showIndicators: true,
  };

  return (
    <>
      {/* <div className="w-full mb-4 "> */}
      {/* <div className="relative box-border h-[450px]"> */}
      {/* <Slider ref={sliderRef} {...settings} className="w-full "> */}
      {/* <div
              className="w-full bg-no-repeat bg-cover bg-center bg-[conic-gradient(var(--tw-gradient-stops)),url('https://res.cloudinary.com/owujib/image/upload/v1680478882/ai-saturdays-imgs/Group_1_nqp4ec.jpg')] from-amber-200 via-violet-600 to-sky-900"
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="w-full  text-right">
                <div className="px-10 py-4 mx-auto max-w-2xl lg:max-w-6xl">
                  <div className="max-w-2xl">
                    <h1 className="md:text-4xl font-semibold tracking-tight text-white text-5xl">
                      AI Saturdays Lagos
                    </h1>
                    <div className="my-6">
                      <p className="mt-4 text-base text-white font-light leading-7">
                        The pool of true experts in the field is small, and
                        Alibaba, Amazon, Facebook, Google, Microsoft and other
                        tech giants have hired many of them. Learn the skills
                        that power cutting-edge technology and shape the future
                        of innovation.
                        <br /> - <em>Artificial Intelligence</em>
                      </p>

                      <div className="mt-6 flex gap-6 justify-end">
                        <Link
                          className="px-4 py-2 border-white border-2 hover:bg-white  hover:text-black hover:border-white bg-transparent text-white"
                          to="/learning-tracks"
                        >
                          Learning Tracks
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      {/* <div className="w-full md:h-[85%] lg:h-[85%] h-[455px] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.7)),url('https://res.cloudinary.com/owujib/image/upload/v1680055265/ai-saturdays-imgs/IMG_20190202_112621_hju44s.jpg')] bg-no-repeat bg-cover bg-center">
              <div className="w-full text-right">
                <div className="px-10  py-4 mx-auto max-w-2xl lg:max-w-6xl">
                  <div className="max-w-2xl">
                    <h1 className="md:text-8xl font-bold tracking-tight text-white text-5xl">
                      About <br />
                      us
                    </h1>
                    <div className="my-9">
                      <p className="mt-4 text-base text-white font-light leading-7">
                        We are enthusiasts with a zeal to create a positive
                        impact. Our impact has grown beyond the borders of Lagos
                        and Nigeria We are building one of Africas' largest
                        network of AI experts
                      </p>
                      <div className="mt-6 flex gap-6 justify-end">
                        <Link
                          className="px-4 py-2 border-white border-2 hover:bg-white  hover:text-black hover:border-white bg-transparent text-white"
                          to="/learning-tracks"
                        >
                          View more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      {/* </Slider> */}
      {/* <div className="text-right w-full absolute top-[86%] px-12 left-2 ">
            <button
              className="rounded text-white border-2 border-white hover:border-orange-400 hover:text-orange-400 bg-transparent p-1 px-3 my-2 mx-2 text-2xl "
              onClick={() => {
                sliderRef?.current?.slickPrev();
              }}
            >
              <TiArrowLeft />
            </button>
            <button
              className="rounded text-white border-2 border-white hover:border-orange-400 hover:text-orange-400 bg-transparent p-1 px-3 my-2 mx-2 text-2xl "
              onClick={() => {
                sliderRef?.current?.slickNext();
              }}
            >
              <TiArrowRight />
            </button>
          </div> */}
      {/* </div> */}
      {/* </div> */}

      <div className="w-full mt-20 flex justify-center items-center bg-[linear-gradient(to_left_bottom,rgba(248,147,32,0.4),rgba(248,147,32,0.5),rgba(248,147,32,0.8)),url('https://res.cloudinary.com/owujib/image/upload/v1680478882/ai-saturdays-imgs/Group_1_nqp4ec.jpg')] bg-no-repeat bg-cover">
        <div className="py-14">
          <div className="">
            <div className="">
              <div className="mx-auto md:w-[80%] lg:w-[80%] h-[200px] flex items-center justify-center ">
                <div className="w-[80%] md:w-full ">
                  <h1 className="text-2xl md:text-4xl my-3 font-bold text-white mb-4">
                    CohereAI Hack <br />
                    Leveraging Cohere's Multilingual Embedding to Empower
                    Creativity
                  </h1>

                  <Link
                    to="#"
                    className="bg-white mt-4  px-4 py-2 text-xl rounded-md"
                  >
                    About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="px-4 py-12 container  text-center">
            <div className="w-[85%] md:w-[70%] mx-auto">
              <h1 className="text-lg md:text-4xl font-bold text-white">
                Leveraging AI Innovation in Nigeira
              </h1>
              <p className="text-white">
                The pool of true experts in the field is small, and Alibaba,
                Amazon, Facebook, Google, Microsoft and other tech giants have
                hired many of them.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
