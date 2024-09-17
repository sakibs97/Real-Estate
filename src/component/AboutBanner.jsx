import Container from "./Container"


const AboutBanner = () => {
    return (
        <section className='bg-[url("../src/assets/aboutPart/aboutBanner.jpg")] relative bg-cover bg-no-repeat bg-center h-[500px]'>
            <Container>
                <h2 className="font-suse font-bold text-5xl text-white absolute bottom-7 block uppercase">About Us</h2>
            </Container>
        </section>
    )
}

export default AboutBanner