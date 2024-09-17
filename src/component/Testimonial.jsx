import Container from "./Container"
import owner from "../assets/owner/owner.jpeg"
import owner2 from "../assets/owner/owner2.jpeg"
import owner4 from "../assets/owner/owner4.jpg"
import owner5 from "../assets/owner/owner5.jpg"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import Slider from "react-slick";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute bottom-5 right-1/2 transform translate-x-[160%] cursor-pointer">
            <FaArrowRightLong />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute bottom-5 left-1/2 transform -translate-x-[100%] cursor-pointer z-10">
            <FaArrowLeftLong className="" />
        </div>
    );
}


const Testimonial = () => {

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <section className="py-10">
            <Container>
                <div className="w-1/2">
                    <h6 className="font-suse font-semibold leading-[50px] tracking-widest uppercase text-lg text-[rgba(12,12,12,0.36)]">Testimonial</h6>
                    <h2 className="font-suse font-bold text-3xl text-[rgba(1,36,100,0.84)] leading-[50px] uppercase mb-5">What customers say about us</h2>
                </div>
                <div className="my-8 mx-2">
                    <Slider {...settings}>
                        <div className="">
                            <div className="flex justify-between">
                                <div className="">
                                    <img src={owner} alt="owner" className="w-[530px] h-[350px]" />
                                </div>
                                <div className="w-[50%]">
                                    <h5 className="font-suse font-bold leading-[50px] text-2xl text-[rgba(1,36,100,0.84)]">Homeowner's Reflections on Apartments</h5>
                                    <p className="font-suse font-normal text-[14px] text-[#000] leading-[30px] pt-5">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab soluta corrupti rem facilis explicabo quibusdam inventore sequi maxime. Quas molestiae nostrum, blanditiis distinctio praesentium unde beatae consectetur est nihil?
                                        <br />
                                        <br />
                                        <span className="text-lg">Owner Name</span>
                                        <br />
                                        <a className="text-md">Apartments Owner</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between">
                                <div className="">
                                    <img src={owner2} alt="owner2" className="w-[530px] h-[350px]" />
                                </div>
                                <div className="w-[48%]">
                                    <h5 className="font-suse font-bold leading-[50px] text-2xl text-[rgba(1,36,100,0.84)]">Homeowner's Reflections on Apartments</h5>
                                    <p className="font-suse font-normal text-[14px] text-[#000] leading-[30px] pt-5">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab soluta corrupti rem facilis explicabo quibusdam inventore sequi maxime. Quas molestiae nostrum, blanditiis distinctio praesentium unde beatae consectetur est nihil?
                                        <br />
                                        <br />
                                        <span className="text-lg">Owner Name</span>
                                        <br />
                                        <a className="text-md">Apartments Owner</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between">
                                <div className="">
                                    <img src={owner4} alt="owner4" className="w-[530px] h-[350px]" />
                                </div>
                                <div className="w-[48%]">
                                    <h5 className="font-suse font-bold leading-[50px] text-2xl text-[rgba(1,36,100,0.84)]">Homeowner's Reflections on Apartments</h5>
                                    <p className="font-suse font-normal text-[14px] text-[#000] leading-[30px] pt-5">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab soluta corrupti rem facilis explicabo quibusdam inventore sequi maxime. Quas molestiae nostrum, blanditiis distinctio praesentium unde beatae consectetur est nihil?
                                        <br />
                                        <br />
                                        <span className="text-lg">Owner Name</span>
                                        <br />
                                        <a className="text-md">Apartments Owner</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between">
                                <div className="">
                                    <img src={owner5} alt="owner5" className="w-[530px] h-[350px]" />
                                </div>
                                <div className="w-[48%]">
                                    <h5 className="font-suse font-bold leading-[50px] text-2xl text-[rgba(1,36,100,0.84)]">Homeowner's Reflections on Apartments</h5>
                                    <p className="font-suse font-normal text-[14px] text-[#000] leading-[30px] pt-5">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab soluta corrupti rem facilis explicabo quibusdam inventore sequi maxime. Quas molestiae nostrum, blanditiis distinctio praesentium unde beatae consectetur est nihil?
                                        <br />
                                        <br />
                                        <span className="text-lg">Owner Name</span>
                                        <br />
                                        <a className="text-md">Apartments Owner</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between">
                                <div className="">
                                    <img src={owner} alt="owner" className="w-[530px] h-[350px]" />
                                </div>
                                <div className="w-[48%]">
                                    <h5 className="font-suse font-bold leading-[50px] text-2xl text-[rgba(1,36,100,0.84)]">Homeowner's Reflections on Apartments</h5>
                                    <p className="font-suse font-normal text-[14px] text-[#000] leading-[30px] pt-5">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab soluta corrupti rem facilis explicabo quibusdam inventore sequi maxime. Quas molestiae nostrum, blanditiis distinctio praesentium unde beatae consectetur est nihil?
                                        <br />
                                        <br />
                                        <span className="text-lg">Owner Name</span>
                                        <br />
                                        <a className="text-md">Apartments Owner</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Testimonial