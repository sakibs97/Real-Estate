import Slider from "react-slick"
import Container from "./Container";
import team from "../assets/team/team.jpeg"
import team2 from "../assets/team/team2.jpg"
import team3 from "../assets/team/team3.jpg"
import team4 from "../assets/team/team4.jpeg"
import team5 from "../assets/team/team5.jpg"
import team6 from "../assets/team/team6.jpg"
import team7 from "../assets/team/team7.jpeg"

const Team = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    return (
        <section>
            <Container>
                <div className="">
                    <h6 className="font-suse font-semibold leading-[50px] tracking-widest uppercase text-lg text-[#0c0c0c5c]">Team</h6>
                    <h2 className="font-suse font-bold text-3xl text-[#012464d6] leading-[50px] uppercase mb-5">Management Team</h2>
                </div>
            </Container>
            <Slider {...settings} className="">
                <div className="mx-3">
                    <div className="relative group">
                        <img src={team} alt="" className="w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-x-0 bottom-0 h-0 w-[90%] bg-[rgba(0,0,0,0.2)]  group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="group-hover:animate-fadeIn">
                            <div className="absolute bottom-10 left-8 group-hover:bottom-20">
                                <h6 className="font-suse font-bold text-3xl text-white uppercase">Aminur Rashd</h6>
                            </div>
                            <div className="absolute bottom-10 left-8 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
                                <p className="font-suse font-normal text-[15px] text-white">Chairman & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-3">
                    <div className="relative group">
                        <img src={team2} alt="" className="w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-x-0 bottom-0 h-0 w-[90%] bg-[rgba(0,0,0,0.2)]  group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="group-hover:animate-fadeIn">
                            <div className="absolute bottom-10 left-8 group-hover:bottom-20">
                                <h6 className="font-suse font-bold text-3xl text-white uppercase">Ahmed Pasha</h6>
                            </div>
                            <div className="absolute bottom-10 left-8 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
                                <p className="font-suse font-normal text-[15px] text-white">Director </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-3">
                    <div className="relative group">
                        <img src={team3} alt="" className="w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-x-0 bottom-0 h-0 w-[90%] bg-[rgba(0,0,0,0.2)]  group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="group-hover:animate-fadeIn">
                            <div className="absolute bottom-10 left-8 group-hover:bottom-20">
                                <h6 className="font-suse font-bold text-3xl text-white uppercase">Sahedul Karim Munna</h6>
                            </div>
                            <div className="absolute bottom-10 left-8 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
                                <p className="font-suse font-normal text-[15px] text-white">Additional Director</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-3">
                    <div className="relative group">
                        <img src={team4} alt="" className="w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-x-0 bottom-0 h-0 w-[90%] bg-[rgba(0,0,0,0.2)]  group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="group-hover:animate-fadeIn">
                            <div className="absolute bottom-10 left-8 group-hover:bottom-20">
                                <h6 className="font-suse font-bold text-3xl text-white uppercase">Joyanta Prasad Roy</h6>
                            </div>
                            <div className="absolute bottom-10 left-8 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
                                <p className="font-suse font-normal text-[15px] text-white">Assistant Director</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-3">
                    <div className="relative group">
                        <img src={team5} alt="" className="w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-x-0 bottom-0 h-0 w-[90%] bg-[rgba(0,0,0,0.2)]  group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="group-hover:animate-fadeIn">
                            <div className="absolute bottom-10 left-8 group-hover:bottom-20">
                                <h6 className="font-suse font-bold text-3xl text-white uppercase">Aminur Rashd</h6>
                            </div>
                            <div className="absolute bottom-10 left-8 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
                                <p className="font-suse font-normal text-[15px] text-white">Assistant Diretor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-3">
                    <div className="relative group">
                        <img src={team6} alt="" className="w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-x-0 bottom-0 h-0 w-[90%] bg-[rgba(0,0,0,0.2)]  group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="group-hover:animate-fadeIn">
                            <div className="absolute bottom-10 left-8 group-hover:bottom-20">
                                <h6 className="font-suse font-bold text-3xl text-white uppercase">Aminur Rashd</h6>
                            </div>
                            <div className="absolute bottom-10 left-8 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
                                <p className="font-suse font-normal text-[15px] text-white">Assistant Diretor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-3">
                    <div className="relative group">
                        <img src={team7} alt="" className="w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-x-0 bottom-0 h-0 w-[90%] bg-[rgba(0,0,0,0.2)]  group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="group-hover:animate-fadeIn">
                            <div className="absolute bottom-10 left-8 group-hover:bottom-20">
                                <h6 className="font-suse font-bold text-3xl text-white uppercase">Aminur Rashd</h6>
                            </div>
                            <div className="absolute bottom-10 left-8 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
                                <p className="font-suse font-normal text-[15px] text-white">Assistant Diretor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <Container className='mb-20'>
                <button className="font-suse font-bold text-md relative text-[#000] py-3 px-[22px] border-[1px] border-[#000] hover:border-[#012464d6] after:absolute after:bg-[#012464d6] after:top-0 after:right-0 after:w-full after:h-full after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                    <span className="relative z-10">More About Our Team</span>
                </button>
            </Container>
        </section>
    )
}

export default Team