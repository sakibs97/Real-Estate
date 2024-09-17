import Container from "./Container"


const Purpose = () => {
    return (
        <section className='bg-[url("../src/assets/background/seamless.png")] bg-cover bg-center bg-no-repeat py-20'>
            <Container className='px-3'>
                <div className="flex justify-between items-center">
                    <div className="w-[45%] border-[1px] border-[#000] bg-[#f5f5f5fd] py-20 px-10">
                        <h4 className="font-suse font-semibold text-md text-[#083da0d6] uppercase tracking-widest pb-8">Purpose</h4>
                        <p className="font-suse font-bold text-4xl uppercase leading-[45px]">To improve the standard of living of our customers and make them happy. </p>
                    </div>
                    <div className="w-[45%] border-[1px] border-[#000] bg-[#f5f5f5fd] py-20 px-10">
                        <h4 className="font-suse font-semibold text-md text-[#083da0d6] uppercase tracking-widest pb-8">Vision</h4>
                        <p className="font-suse font-bold text-4xl uppercase leading-[45px]">To become the most trusted and respected real estate company in Bangladesh.</p>
                    </div>
                </div>
                <div className="mt-20 border-[1px] border-[#000] bg-[#f5f5f5fd] py-20 px-10">
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
    )
}

export default Purpose