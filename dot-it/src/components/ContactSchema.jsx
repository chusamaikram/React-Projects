import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
});
