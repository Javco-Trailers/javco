import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  zipcode: string;
  phoneNumber: string;
  business: string;
  purpose: string;
  lengthOfUse: string;
};

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.ENDPOINT}/send-mail`,
        data
      );
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-self-center w-1/4"
    >
      <label>First Name</label>
      <input
        {...register("firstName", { required: true })}
        className="text-black p-1"
      />
      <label>Last Name</label>
      <input
        {...register("lastName", { required: true })}
        className="text-black p-1"
      />
      <label>Email</label>
      <input
        type="text"
        className="text-black p-1"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label>Zipcode</label>
      <input
        {...register("zipcode", { required: true })}
        className="text-black p-1"
      />
      <label>Phone Number</label>
      <input {...register("phoneNumber")} className="text-black p-1" />
      <label>Business Name (Optional)</label>
      <input {...register("business")} className="text-black p-1" />
      <label>Purpose For Trailer</label>
      <input
        {...register("purpose", { required: true })}
        className="text-black p-1"
      />
      <label>Length of Use</label>
      <input
        {...register("lengthOfUse", { required: true })}
        className="text-black p-1"
      />
      <input type="submit" className="cursor-pointer" />
    </form>
  );
}
