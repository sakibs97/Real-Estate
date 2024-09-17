import Container from "./Container"
import chairman from "../assets/owner/chairman.jpg"

const Purpose = () => {
    return (
        <section>
            <section className='bg-[url("../src/assets/background/seamless.png")] bg-cover bg-center bg-no-repeat py-20'>
                <Container className='px-3'>
                    <div className="flex justify-between items-center">
                        <div className="w-[45%] border-[1px] border-[#000] bg-white py-20 px-10">
                            <h4 className="font-suse font-semibold text-md text-[#083da0d6] uppercase tracking-widest pb-8">Purpose</h4>
                            <p className="font-suse font-bold text-4xl uppercase leading-[45px]">To improve the standard of living of our customers and make them happy. </p>
                        </div>
                        <div className="w-[45%] border-[1px] border-[#000] bg-white py-20 px-10">
                            <h4 className="font-suse font-semibold text-md text-[#083da0d6] uppercase tracking-widest pb-8">Vision</h4>
                            <p className="font-suse font-bold text-4xl uppercase leading-[45px]">To become the most trusted and respected real estate company in Bangladesh.</p>
                        </div>
                    </div>
                    <div className="mt-20 border-[1px] border-[#000] bg-white py-20 px-10">
                        <h4 className="font-suse font-semibold text-md text-[#083da0d6] uppercase tracking-widest pb-8">OUR VALUES</h4>
                        <div className="flex justify-between">
                            <h6 className="font-suse font-medium text-[16px] text-[#000]">Integrity</h6>
                            <h6 className="font-suse font-medium text-[16px] text-[#000]"> Respectful and Long Term Partnership </h6>
                            <h6 className="font-suse font-medium text-[16px] text-[#000]"> Customer Satisfaction</h6>
                            <h6 className="font-suse font-medium text-[16px] text-[#000]"> Open and Transparent Culture</h6>
                            <h6 className="font-suse font-medium text-[16px] text-[#000]"> Engaging and Growing Team Member</h6>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container className='flex justify-between px-3 my-20'>
                    <div className="w-[50%]">
                        <h6 className="font-suse font-semibold text-md text-[#0c0c0c5c] uppercase tracking-widest">Chairman</h6>
                        <h2 className="font-suse font-bold text-3xl text-[#012464d6] leading-[50px] uppercase mb-5">Md. Aminur Rashid</h2>
                        <p className="font-suse font-normal text-[14px] leading-[25px]">Edison Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population. We clearly understand the need for more trusted and reliable companies in the real estate sector.
                            <br /><br />
                            Companies will fill up this vacuum in the market and there will be a continuous effort to delight customers. We are a competent and motivated group of people, suppliers, and partners who will work closely to ensure strict processes and policies are followed in order to provide complete and consistent customer values. We will listen to our customers to drive continuous improvement and serve them with premium service in every way possible.
                        </p>
                    </div>
                    <div className="w-[40%]">
                        <img src={chairman} alt="chairman" />
                    </div>
                </Container>
            </section>
        </section>
    )
}

export default Purpose