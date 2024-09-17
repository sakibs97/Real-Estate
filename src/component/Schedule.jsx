import Container from "./Container"
import Skyscraper from "../assets/about/Skyscraper Building.mp4"
import Luxury from "../assets/banner/Luxury5.jpg"

const Schedule = () => {
    return (
        <section>
            <section className='bg-[url("../src/assets/background/seamless.png")] bg-no-repeat bg-center bg-cover py-20'>
                <Container>
                    <div className="px-2">
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
            <section className='bg-[url("../src/assets/background/seamless.png")] bg-no-repeat bg-center bg-cover py-20' >
                <Container className="flex justify-between items-center bg-white shadow-2xl mx-2">
                    <div className="w-[65%]">
                        <img src={Luxury} alt="Luxury" className="w-full -scale-x-100" />
                    </div>
                    <div className="w-[35%] mx-10">
                        <h5 className="font-suse font-bold text-3xl leading-[50px] uppercase">Schedule a meeting</h5>
                        <div className="my-5">
                            <input type="text" placeholder="Full Name*" className="font-suse font-normal text-[14px] text-[#000] placeholder:text-[#000] border border-[#000] p-3 w-full focus:outline-[#012464d6] focus:-outline-offset-1" />
                        </div>
                        <div className="my-5">
                            <input type="number" name="phone number" id="number" placeholder="Phone Number" className="font-suse font-normal text-[14px] text-[#000] placeholder:text-[#000] border border-[#000] p-3 w-full focus:outline-[#012464d6] focus:-outline-offset-1" />
                        </div>
                        <div className="my-5">
                            <input type="email" name="" id="" placeholder="Email Address" className="font-suse font-normal text-[14px] text-[#000] placeholder:text-[#000] border border-[#000] p-3 w-full focus:outline-[#012464d6] focus:-outline-offset-1" />
                        </div>
                        <div className="">
                            <select name="" id="" className="font-suse font-normal text-[14px] text-[#000] placeholder:text-[#000] border border-[#000] p-3 w-full bg-white">
                                <option value="Time">Select A Time</option>
                                <option value="10AM">10AM</option>
                                <option value="12PM">12PM</option>
                                <option value="2PM">2PM</option>
                                <option value="4PM">4PM</option>
                                <option value="6PM">6PM</option>
                            </select>
                        </div>
                        <button className="font-suse font-bold text-md relative text-[#000] py-2 px-[22px] border-[1px] border-[#000] hover:border-[#012464d6] after:absolute after:bg-[#012464d6] after:top-0 after:right-0 after:w-full after:h-full after:scale-x-0 hover:after:scale-x-105 after:origin-bottom after:duration-700 after:z-0 z-10 hover:text-white transition-all duration-700 mt-10">
                            <span className="relative z-10">Submit</span>
                        </button>
                    </div>
                </Container>
            </section>
        </section>
    )
}

export default Schedule