import Container from "./Container";
import Skyscraper from "../assets/about/Skyscraper Building.mp4"
import Luxury from "../assets/banner/Luxury5.jpg"


const AboutUs = () => {


    return (
        <section className="my-14">
            <Container className="flex justify-between items-center gap-10">
                <div className="w-1/2">
                    <h6 className="font-suse font-semibold leading-[50px] tracking-widest uppercase text-lg text-[rgba(12,12,12,0.36)]">About Us</h6>
                    <h2 className="font-suse font-bold text-3xl text-[#012464d6] leading-[50px] uppercase mb-5">Redefining your standard of living</h2>
                    <p className="font-suse font-normal text-sm text-[#000] leading-[25px]">Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the real estate sector in 2015 with its “dream team” dedicated to merge value and innovation in the evolving real estate sector of Bangladesh. Through considerable focus on design, structural dimension, and feasibility in the sense of space and resource conservation; as well as environmental soundness; we deliver you optimum support in residential and commercial accommodation.
                        <br></br>
                        <br></br>
                        Conjoining the expertise of different fields to develop and bring in the quintessence of contemporary lifestyle, we provide distinguished services and strictly maintain project handover deadlines. We assure you to be your most reliable developer in Dhaka in terms of integrity and credibility.
                    </p>
                    <button className="font-suse font-bold text-md relative text-[#000] py-2 px-5 border-[1px] border-[#30bb23] hover:border-[rgba(1,36,100,0.84)] after:absolute after:bg-[rgba(1,36,100,0.84)] after:top-0 after:left-0 after:w-full after:h-full after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                        <span className="relative z-10">Learn More</span>
                    </button>
                </div>
                <div className="w-1/2">
                    <video
                        className="w-full h-auto"
                        controls
                        poster={Luxury}
                    >
                        <source src={Skyscraper}
                            type="video/mp4" />
                    </video>
                </div>

            </Container>
        </section>
    );
}

export default AboutUs;
