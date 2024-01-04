import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  phoneNumber: string;
  business: string;
  purpose: string;
  lengthOfUse: string;
};



export default function QuoteForm({setShowQuote}:{setShowQuote:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

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
      if(response.data === "Email sent successfully"){
        setShowSuccess(true);
      }
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  //handler
  function closeQuote(){
    setShowQuote(false);
  }

  

  return (
         
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[101]">
    <div className="bg-white p-4 rounded w-full w-[85%] md:w-[75%] lg:w-[50%]">
      <div className="flex items-start mb-2">
  <button className="inline-flex items-center text-white rounded justify-center bg-gray-700 p-2" onClick={closeQuote} type="button">
    Back
  </button>
</div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white w-full flex flex-col justify-self-center"
    >
      <label>First Name</label>
      <input
        {...register("firstName", { required: "First Name is Required" })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      {errors.firstName && <p className="text-xs text-red-500">*{errors.firstName.message}</p>}
      <label>Last Name</label>
      <input
        {...register("lastName", { required: "Last Name is Required" })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      {errors.lastName && <p className="text-xs text-red-500">*{errors.lastName.message}</p>}
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
      {errors.email && <p className="text-xs text-red-500">*{errors.email.message}</p>}
      <label>Zipcode</label>
      <input
        {...register("zipCode", { required: "Zip Code is required" })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      {errors.zipCode && <p className="text-xs text-red-500">*{errors.zipCode.message}</p>}
      <label>Phone Number</label>
      <input {...register("phoneNumber")} className="text-black p-1 border-2 border-jblue mr-4" />
      <label>Business Name (Optional)</label>
      <input {...register("business")} className="text-black p-1 border-2 border-jblue mr-4" />
      <label>Purpose For Trailer (Buy, Sell, Storage)</label>
      <input
        {...register("purpose", { required: "Purpose is required" })}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      {errors.purpose && <p className="text-xs text-red-500">*{errors.purpose.message}</p>}
      <label>Length of Use</label>
      <input
        {...register("lengthOfUse")}
        className="text-black p-1 border-2 border-jblue mr-4"
      />
      <div className="flex flex-col items-start justify-center">
  <input
    type="submit"
    className="text-start bg-jblue rounded text-white mt-4 p-2 cursor-pointer"
  />
</div>

    </form>
    </div>

    {showSuccess && (

<div className="fixed inset-0 bg-black bg-opacity-50 z-[102]">
<div className="bg-white rounded text-start w-4/5 p-4 font-semibold fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <p>Request Sent Successfully! Please wait up to 2 business days for a response.</p>
  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={closeQuote}>
    Got it!
  </button>
</div>
</div>

    )}
    </div>
  );
}
