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



export default function QuoteForm({setShowQuote}:{setShowQuote:React.Dispatch<React.SetStateAction<boolean>>}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-mail`,
        data
      );
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  //handler
  function closeQuote(){
    setShowQuote(false);
  }

  return (
    <div className="z-[101] bg-white rounded text-start w-4/5 p-2 font-semibold fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-start mb-2">
  <button className="inline-flex items-center text-white rounded justify-center bg-gray-700 p-2" onClick={closeQuote} type="button">
    Back
  </button>
</div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-self-center"
    >
      <label>First Name</label>
      <input
        {...register("firstName", { required: true })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      <label>Last Name</label>
      <input
        {...register("lastName", { required: true })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      <label>Email</label>
      <input
        type="text"
        className="text-black p-1 border-2 border-jblue mr-4"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p className="text-xs text-red-500">* {errors.email.message}</p>}
      <label>Zipcode</label>
      <input
        {...register("zipcode", { required: true })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      <label>Phone Number</label>
      <input {...register("phoneNumber")} className="text-black p-1 border-2 border-jblue mr-4" />
      <label>Business Name (Optional)</label>
      <input {...register("business")} className="text-black p-1 border-2 border-jblue mr-4" />
      <label>Purpose For Trailer</label>
      <input
        {...register("purpose", { required: true })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      <label>Length of Use</label>
      <input
        {...register("lengthOfUse")}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      <div className="flex flex-col items-start md:flex-row">
      <input type="submit" className="text-center bg-jblue text-white mt-4 p-2 w-1/5 cursor-pointervmr-4" />
      

      </div>
    </form>
    </div>
  );
}
