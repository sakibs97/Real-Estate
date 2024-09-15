
import Container from "./Container";
import Slider from "react-slick";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdPlayArrow } from "react-icons/md";

function SampleNextArrow(props) {
    const { style } = props;
    return (
        <div

            style={{ ...style, display: "none", background: "red" }}

        />
    );
}

function SamplePrevArrow(props) {
    const { style } = props;
    return (
        <div

            style={{ ...style, display: "none" }}

        />
    );
}


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

    return (
        <section className="relative">
            <Slider {...settings}>
                <div className="">
                    <div className='relative bg-banbg bg-cover bg-no-repeat bg-center w-full h-[1000px]'>
                        <div className="absolute inset-0 bg-[rgb(0,0,0,.7)] opacity-100 animate-fadeOut"></div>
                        <div className="">
                            <h2 className="font-suse font-bold lg:text-5xl md:text-4xl text-3xl text-white uppercase absolute left-1/2 transform -translate-x-[70%] bottom-1/2 translate-y-1/2">
                                Redefining Happiness
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='relative bg-ban2bg bg-cover bg-no-repeat bg-center w-full h-[1000px]'>
                        <div className="absolute inset-0 bg-[rgb(0,0,0,.7)] opacity-100 animate-fadeOut"></div>
                        <div className="">
                            <h2 className="font-suse font-bold text-5xl text-white uppercase absolute left-1/2 transform -translate-x-[70%] bottom-1/2 translate-y-1/2">
                                A pice of heaven on your
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='relative bg-ban3bg bg-cover bg-no-repeat bg-center w-full h-[1000px]'>
                        <div className="absolute inset-0 bg-[rgb(0,0,0,.7)] opacity-100 animate-fadeOut"></div>
                        <div className="">
                            <h2 className="font-suse font-bold text-5xl text-white uppercase absolute left-1/2 transform -translate-x-[70%] bottom-1/2 translate-y-1/2">
                                Oasis of comfort
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='relative bg-ban4bg bg-cover bg-no-repeat bg-center w-full h-[1000px]'>
                        <div className="absolute inset-0 bg-[rgb(0,0,0,.7)] opacity-100 animate-fadeOut"></div>
                        <div className="">
                            <h2 className="font-suse font-bold text-5xl text-white uppercase absolute left-1/2 transform -translate-x-[70%] bottom-1/2 translate-y-1/2">
                                Boulevard that manes your heart sing
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='relative bg-ban4bg bg-cover bg-no-repeat bg-center w-full h-[1000px]'>
                        <div className="absolute inset-0 bg-[rgb(0,0,0,.7)] opacity-100 animate-fadeOut"></div>
                        <div className="">
                            <h2 className="font-suse font-bold text-5xl text-white uppercase absolute left-1/2 transform -translate-x-[70%] bottom-1/2 translate-y-1/2">
                                A visual treat you can never tire of
                            </h2>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className="bg-[rgb(0,0,0,0.7)] text-white leading-[50px] absolute left-1/2 transform -translate-x-[50%] bottom-1/4 w-full lg:block hidden">
                <Container className=''>
                    <div className="flex items-center justify-between w-1/2">
                        <div className="flex items-center">
                            <BsFillBoxSeamFill className="mr-5" />
                            <h3 className="font-suse font-normal text-[14px] uppercase banner-after relative hover:text-[rgba(255,255,255,0.57)] duration-500 cursor-pointer">
                                Explore Projects</h3>
                        </div>
                        <div className="flex items-center w-3/5 justify-between">
                            <span><MdPlayArrow className="" /></span>
                            <h4 className="font-suse font-normal text-[14px] uppercase banner-after relative hover:text-[rgba(255,255,255,0.57)] duration-500 cursor-pointer">Ongoing</h4>
                            <h4 className="font-suse font-normal text-[14px] uppercase banner-after relative hover:text-[rgba(255,255,255,0.57)] duration-500 cursor-pointer">Completed</h4>
                            <h4 className="font-suse font-normal text-[14px] uppercase banner-after relative hover:text-[rgba(255,255,255,0.57)] duration-500 cursor-pointer">Upcoming</h4>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Banner;
