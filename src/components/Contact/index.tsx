import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import {
  ContactContainer,
  ContactContent,
  ErrorText,
  FormStyled,
  ImageContainer,
  InputContainer,
} from "./styles";
import formImg from "@/images/formImg.png";
import PrimaryBtn from "../Buttons/primaryBtn";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (e: FormEvent) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact">
      <ContactContainer
       
      >
        <h2>Send me a message!</h2>

        <ContactContent>
          <FormStyled
            action="https://formsubmit.co/ca0b86c13d72fb2c60603b79480c24ac"
            target="_blank"
            onSubmit={onSubmitHandler}
            method="POST"
          >
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
          </FormStyled>

          <ImageContainer>
            <img src={formImg} alt="a girl on a rocket" />
          </ImageContainer>
        </ContactContent>
      </ContactContainer>
    </section>
  );
};
export default Contact;
