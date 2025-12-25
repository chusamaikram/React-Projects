import ContactForm from "../../../components/common/ContactForm";
import ContactThumbnail from "../../../assets/images/form-thumbnail.png"
import MainHeading from "../../../components/common/MainHeading";

export default function ContactUs() {
    return (
        <>
            <section className="mt-[71px] py-20 bg-[#FAFAFA]">
                <div className="container">
                    <MainHeading BeforeColoredtext="Let's connect and" coloredText="dot.it"
                        desc="Have questions? Your thoughts and feedback are important to us." />
                </div>
            </section>
            <ContactForm
                heading="Ready to dot your i’s and cross your t’s"
                desc="Our friendly team would love to hear from you."
                img={ContactThumbnail} />

        </>
    )
}