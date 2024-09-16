import Container from "./Container"
import logo from "../assets/logo.png"
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <section className='bg-[url("../src/assets/footer.jpg")] bg-center bg-no-repeat bg-cover py-20'>
            <Container>
                <div className="">
                    <img src={logo} alt="logo" className="w-[100px] h-[50px]" />
                </div>
                <div className="my-7">
                    <div className="flex font-suse font-normal text-[16px] text-white">
                        <h3 className="uppercase">Hotline:</h3>
                        <a href="#" className="pl-2 hover:underline underline-offset-4">16760</a>
                    </div>
                    <div className="flex font-suse font-normal text-[16px] text-white">
                        <h3 className="uppercase">Email:</h3>
                        <a href="#" className="pl-2 hover:underline underline-offset-4">hello@ngn@gmail.com</a>
                    </div>
                </div>
                <div className="border-y-[1px] border-[#a1a0a0] py-5">
                    <div className="w-[10%] flex justify-between text-white">
                        <FaFacebookF />
                        <BsInstagram />
                        <FaLinkedin />
                        <FaYoutube />
                    </div>
                </div>
                <p className="font-suse font-normal text-[14px] text-white pt-7">© 2024 Real Estate. All Rights Reserved.</p>
            </Container>
        </section>
    )
}

export default Footer