import { useState, FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  ContactContainer,
  ContactContent,
  ErrorText,
  FormStyled,
  ImageContainer,
  InputContainer,
  SuccessMessage,
} from "./styles";
import formImg from "@/images/formImg.png";
import PrimaryBtn from "../Buttons/primaryBtn";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitHandler = async (e: FormEvent) => {
    const isValid = await trigger();
    e.preventDefault();

    if (isValid) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current!,
          {
            publicKey: "0CNtCu8oFGlGFpdZ1",
          }
        )
        .then(
          () => {
            setShowSuccessMessage(true);
            reset();
            setTimeout(() => setShowSuccessMessage(false), 3000);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section id="contact">
      <ContactContainer>
        <h2>Send me a message!</h2>

        <ContactContent>
          <FormStyled ref={form} onSubmit={onSubmitHandler}>
            <InputContainer>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <ErrorText>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <ErrorText>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </ErrorText>
              )}
            </InputContainer>

            <InputContainer>
              <textarea
                placeholder="Message"
                rows={6}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <ErrorText>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </ErrorText>
              )}
            </InputContainer>

            <PrimaryBtn type="submit">SUBMIT</PrimaryBtn>

            <AnimatePresence>
              {showSuccessMessage && (
                <SuccessMessage
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ x: -100, opacity: 0, transition: { duration: 0.5 } }}
                >
                  Message sent successfully!
                </SuccessMessage>
              )}
            </AnimatePresence>
          </FormStyled>

          <ImageContainer>
            <motion.div
              animate={{
                y: [-10, 10, -10],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              <img src={formImg} alt="a girl on a rocket" />
            </motion.div>
          </ImageContainer>
        </ContactContent>
      </ContactContainer>
    </section>
  );
};
export default Contact;
