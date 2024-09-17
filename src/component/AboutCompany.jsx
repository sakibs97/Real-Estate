import Container from "./Container"
import Skyscraper from "../assets/about/Skyscraper Building.mp4"

const AboutCompany = () => {
    return (
        <section className="bg-[#e2e2e294] py-20 px-3">
            <Container className='flex justify-between items-center'>
                <div className="w-1/2">
                    <h2 className="font-suse font-bold text-4xl text-[#012464d6] uppercase leading-[50px]">who
                        <br />
                        we are</h2>
                    <h6 className="font-suse font-semibold text-[16px] leading-[40px] pt-5">EDISON Group</h6>
                    <p className="font-suse font-normal text-[14px] leading-[25px] text-[#000]">

                        EDISON Group is a leading local conglomerate in Bangladesh, known for its commitment to enhancing customers' lives through reliable products and services. Established in 2009, the group has rapidly expanded its portfolio in the technology, communication, power, electronics, real estate, value-added services, e-commerce, appliances, gadget and accessories, and footwear sectors. With a focus on powerful brands and diversified investments, Edison Group is committed to driving innovation and growth in Bangladesh's dynamic business landscape.
                    </p>
                    <h6 className="font-suse font-semibold text-[16px] leading-[40px] pt-5">EDISON Real Estate</h6>
                    <p className="font-suse font-normal text-[14px] leading-[25px] text-[#000]">
                        EDISON Group ventured into the real estate sector in 2015 with a dream team dedicated to merging value and innovation in evolving real estate sector of Bangladesh. We aim to satisfy our customers and be the country's most trusted and respected real estate brand. Infusing biophilic and elegant design, modern amenities, cutting-edge technologies, best-in-class materials, total quality control, timely execution, and unparalleled services, we try to maximize customers’ value. The sumptuous amenities of our creations ensure that customers’ upscaled living standard is not limited to square feet of 3/4-bedroom apartments. As we develop our projects in owned land, we offer optimum value for luxury so that life is celebrated to its fullest at the dream homes. Our customer-centric approaches, innovation, and financial strength have made us the largest developer in Bashundhara R/A in less than three years of operation there. This enabled us to expand our horizon across the country and address customers’ growing demand for improvised residences.
                    </p>
                    <button className="font-suse font-bold text-md relative text-[#000] py-2 px-[22px] border-[1px] border-[#000] hover:border-[#012464d6] after:absolute after:bg-[#012464d6] after:top-0 after:right-0 after:w-full after:h-full after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                        <span className="relative z-10">Read More</span>
                    </button>
                </div>
                <div className="w-[40%]">
                    <video
                        className="w-full"
                        controls
                    >
                        <source src={Skyscraper}
                            type="video/mp4" />
                    </video>
                </div>
            </Container>
        </section>
    )
}

export default AboutCompany