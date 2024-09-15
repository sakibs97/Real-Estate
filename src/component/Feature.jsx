import Container from "./Container";
import Slider from "react-slick";
import Featur from "../assets/Feature/Feature.jpg";
import Featur2 from "../assets/Feature/Feature2.jpg";
import Featur3 from "../assets/Feature/Feature3.jpeg";
import Featur4 from "../assets/Feature/Feature4.png";
import Featur5 from "../assets/Feature/Feature5.jpg";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-[-100px] right-[200px] border-[2px] rounded-full border-[#000] p-4 hover:bg-[rgba(1,36,100,0.84)] hover:text-white hover:border-[rgba(1,36,100,0.84)] transition-all cursor-pointer">
            <GrLinkNext />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-[-100px] right-[280px] border-[2px] rounded-full border-[#000] p-4 hover:bg-[rgba(1,36,100,0.84)] hover:text-white hover:border-[rgba(1,36,100,0.84)] transition-all cursor-pointer">
            <GrLinkPrevious />
        </div>
    );
}

const Feature = () => {

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <section className="py-10 bg-[rgba(226,226,226,0.58)]">
            <Container>
                <div className="w-1/2">
                    <h6 className="font-suse font-semibold leading-[50px] tracking-widest uppercase text-lg text-[rgba(12,12,12,0.36)]">Featured projects </h6>
                    <h2 className="font-suse font-bold text-3xl text-[rgba(1,36,100,0.84)] leading-[50px] uppercase mb-5">Bespoke Enclaves with finesse
                        in architecture and design</h2>
                </div>
            </Container>
            <div className="my-10">
                <Slider {...settings}>
                    <div className="relative group mx-5">
                        <img src={Featur5} alt="Feature" className="h-[650px] w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out  group-hover:-scale-x-100" />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-[rgba(0,0,0,0.5)] w-[90%] group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="absolute bottom-14 left-0 px-8">
                            <h3 className="font-suse font-bold text-3xl text-white">Edison Angelo</h3>
                            <p className="font-suse font-normal text-[14px] text-white">Bashundhara R/A</p>
                            <div className="pt-5 absolute bottom-[70px]  opacity-0  group-hover:opacity-100 group-hover:relative group-hover:bottom-0 z-0 duration-500 ease-in-out group-hover:animate-fadeIn">
                                <p className="font-suse font-normal text-white text-[14px] w-[400px]">
                                    EDISON ANGELO, a true luxurious sculpture to transcend your living artistry that will make you fall in love with every stroll you take in this angelic address.
                                    <br />
                                    <br />
                                    For Apartment Tour-
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                    <br />
                                    <br />
                                    For Virtual experience -
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                </p>
                            </div>

                            <button className="font-suse font-bold text-md relative text-[#fff] py-2 px-5 border-[1px] border-[#fff] hover:border-[rgba(1,36,100,0.84)] after:absolute after:bg-[rgba(1,36,100,0.84)] after:top-0 after:left-0 after:w-full after:h-full after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                                <span className="relative z-10">Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative group mx-5">
                        <img src={Featur3} alt="Feature3" className="h-[650px] w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out  group-hover:-scale-x-100" />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-[rgba(0,0,0,0.5)] w-[90%] group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="absolute bottom-14 left-0 px-8">
                            <h3 className="font-suse font-bold text-3xl text-white">Edison Angelo</h3>
                            <p className="font-suse font-normal text-[14px] text-white">Bashundhara R/A</p>
                            <div className="pt-5 absolute bottom-[70px]  opacity-0  group-hover:opacity-100 group-hover:relative group-hover:bottom-0 z-0 duration-500 ease-in-out group-hover:animate-fadeIn">
                                <p className="font-suse font-normal text-white text-[14px] w-[400px]">
                                    EDISON ANGELO, a true luxurious sculpture to transcend your living artistry that will make you fall in love with every stroll you take in this angelic address.
                                    <br />
                                    <br />
                                    For Apartment Tour-
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                    <br />
                                    <br />
                                    For Virtual experience -
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                </p>
                            </div>

                            <button className="font-suse font-bold text-md relative text-[#fff] py-2 px-5 border-[1px] border-[#fff] hover:border-[rgba(1,36,100,0.84)] after:absolute after:bg-[rgba(1,36,100,0.84)] after:top-0 after:left-0 after:w-full after:h-full after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                                <span className="relative z-10">Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative group mx-5">
                        <img src={Featur2} alt="Feature2" className="h-[650px] w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out  group-hover:-scale-x-100" />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-[rgba(0,0,0,0.5)] w-[90%] group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="absolute bottom-14 left-0 px-8">
                            <h3 className="font-suse font-bold text-3xl text-white">Edison Angelo</h3>
                            <p className="font-suse font-normal text-[14px] text-white">Bashundhara R/A</p>
                            <div className="pt-5 absolute bottom-[70px]  opacity-0  group-hover:opacity-100 group-hover:relative group-hover:bottom-0 z-0 duration-500 ease-in-out group-hover:animate-fadeIn">
                                <p className="font-suse font-normal text-white text-[14px] w-[400px]">
                                    EDISON ANGELO, a true luxurious sculpture to transcend your living artistry that will make you fall in love with every stroll you take in this angelic address.
                                    <br />
                                    <br />
                                    For Apartment Tour-
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                    <br />
                                    <br />
                                    For Virtual experience -
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                </p>
                            </div>

                            <button className="font-suse font-bold text-md relative text-[#fff] py-2 px-5 border-[1px] border-[#fff] hover:border-[rgba(1,36,100,0.84)] after:absolute after:bg-[rgba(1,36,100,0.84)] after:top-0 after:left-0 after:w-full after:h-full after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                                <span className="relative z-10">Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative group mx-5">
                        <img src={Featur4} alt="Feature4" className="h-[650px] w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out  group-hover:-scale-x-100" />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-[rgba(0,0,0,0.5)] w-[90%] group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="absolute bottom-14 left-0 px-8">
                            <h3 className="font-suse font-bold text-3xl text-white">Edison Angelo</h3>
                            <p className="font-suse font-normal text-[14px] text-white">Bashundhara R/A</p>
                            <div className="pt-5 absolute bottom-[70px]  opacity-0  group-hover:opacity-100 group-hover:relative group-hover:bottom-0 z-0 duration-500 ease-in-out group-hover:animate-fadeIn">
                                <p className="font-suse font-normal text-white text-[14px] w-[400px]">
                                    EDISON ANGELO, a true luxurious sculpture to transcend your living artistry that will make you fall in love with every stroll you take in this angelic address.
                                    <br />
                                    <br />
                                    For Apartment Tour-
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                    <br />
                                    <br />
                                    For Virtual experience -
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                </p>
                            </div>

                            <button className="font-suse font-bold text-md relative text-[#fff] py-2 px-5 border-[1px] border-[#fff] hover:border-[rgba(1,36,100,0.84)] after:absolute after:bg-[rgba(1,36,100,0.84)] after:top-0 after:left-0 after:w-full after:h-full after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                                <span className="relative z-10">Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative group mx-5">
                        <img src={Featur} alt="Feature" className="h-[650px] w-[90%] cursor-pointer transform transition-transform duration-500 ease-in-out  group-hover:-scale-x-100" />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-[rgba(0,0,0,0.5)] w-[90%] group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer"></div>
                        <div className="absolute bottom-14 left-0 px-8">
                            <h3 className="font-suse font-bold text-3xl text-white">Edison Angelo</h3>
                            <p className="font-suse font-normal text-[14px] text-white">Bashundhara R/A</p>
                            <div className="pt-5 absolute bottom-[70px]  opacity-0  group-hover:opacity-100 group-hover:relative group-hover:bottom-0 z-0 duration-500 ease-in-out group-hover:animate-fadeIn">
                                <p className="font-suse font-normal text-white text-[14px] w-[400px]">
                                    EDISON ANGELO, a true luxurious sculpture to transcend your living artistry that will make you fall in love with every stroll you take in this angelic address.
                                    <br />
                                    <br />
                                    For Apartment Tour-
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                    <br />
                                    <br />
                                    For Virtual experience -
                                    <a href="" className="pl-2 underline-offset-2 underline text-[#30bb23] cursor-pointer">click here</a>
                                </p>
                            </div>

                            <button className="font-suse font-bold text-md relative text-[#fff] py-2 px-5 border-[1px] border-[#fff] hover:border-[rgba(1,36,100,0.84)] after:absolute after:bg-[rgba(1,36,100,0.84)] after:top-0 after:left-0 after:w-full after:h-full after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                                <span className="relative z-10">Learn More</span>
                            </button>
                        </div>
                    </div>



                </Slider>
            </div>
        </section>
    )
}

export default Feature