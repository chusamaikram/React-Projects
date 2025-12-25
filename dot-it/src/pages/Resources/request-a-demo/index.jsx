
import FormThumbnail from "../../../assets/images/form-thumbnail.png"
import ContactForm from "../../../components/common/ContactForm"

export default function RequestDemo() {
    return (
        <>
            <section className="bg-[#FAFAFA] mt-[71px] py-20">
                <div className="container">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h1 className="text-[48px] font-semibold leading-15 text-[#011A35] ">See <span className="text-[#0160C9]">dot.it</span> in action</h1>
                        <p className="text-base leading-6">Ready to experience how dot.it transforms your inbox into your smartest sales tool?</p>
                    </div>
                </div>
            </section>
            <ContactForm heading="Book your demo "
                desc="Our team will walk you through key features, integrations, and real use cases to help you get started."
                img={FormThumbnail} />

        </>

    )
}