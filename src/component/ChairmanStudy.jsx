import study from "../assets/owner/study.png"


const ChairmanStudy = () => {
    return (
        <section className="w-full h-full mb-20">
            <section className="flex justify-between items-center h-full bg-[#e2e2e294]">
                {/* Left section */}
                <div className="w-[50%] flex justify-center items-center">
                    <img src={study} alt="study" className="w-[400px]" />
                </div>

                {/* Right section */}
                <div className="bg-[#003a71] p-20 w-[50%] pr-[203.8px] h-full flex items-center">
                    <div className="text-white">
                        <p className="font-suse font-normal text-[16px]">
                            Md Aminur Rashid is an entrepreneur operating in diversified fields. After obtaining his MBA from Institute of Business Administration (IBA), the top business school in Bangladesh, he worked for 12 years with Siemens AG’s Bangladesh office, then started his own business that reached 300 million USD turnover in a short period of time.
                            <br /><br />
                            Emerging Credit Rating Agency has rated Edison Group “AA+” due to its strength in corporate governance, finance, management, and business processes. He is the co-founder of Symphony Brand, a market leader in Bangladesh that has been rated the top mobile phone brand in Bangladesh for 3 consecutive years. Out of many other startups and new ventures, two are worth mentioning: One is the leading e-commerce company, Pickaboo, in 2017 and 2018 rated the best e-commerce site in Bangladesh by Brand Forum due to trust and customer satisfaction; another is the recently launched footwear factory taking orders for shoes from brands including Deichmann, Fila, H&M, Decathlon, Aldo, Gap, and Merrel. Aminur Rashid and his Edison Group’s continued success in different business areas reflect the tremendous potential of Bangladesh.
                            <br /><br />
                            Reference:
                            <a href="https://mittalsouthasiainstitute.harvard.edu/bangladesh-rising-speakers/" className="text-white underline underline-offset-4 pl-2">https://mittalsouthasiainstitute.harvard.edu/bangladesh-rising-speakers/</a>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ChairmanStudy;
