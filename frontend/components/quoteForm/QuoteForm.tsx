import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  // email: string;
  zipCode: string;
  phoneNumber: string;
  business: string;
  purpose: string;
  lengthOfUse: string;
};



export default function QuoteForm({setShowQuote}:{setShowQuote:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [dataForEmail, setDataForEmail] = useState<FormValues | null>(null);

  useEffect(() =>{
    if(dataForEmail){
      document.getElementById("hiddenLink")?.click();
      setShowQuote(false);
    }
  }, [dataForEmail])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
   setDataForEmail(data);
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
      {/* <label>Email</label>
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
      {errors.email && <p className="text-xs text-red-500">*{errors.email.message}</p>} */}
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
      <div className="flex flex-col items-center justify-center">
  <input
    type="submit"
    className="text-start bg-jblue rounded text-white mt-4 p-2 cursor-pointer"
  />
</div>
    </form>
    <div className='flex justify-start items-start'>
        <a className='text-jblue underline' href={"/creditApplication.pdf"} target="_blank" download>Download Credit Application PDF</a>
        </div>
    </div>
    <a id="hiddenLink" className="hidden" href={`mailto:info@javco.co?subject=Javco Inquiry&body=First Name: ${dataForEmail?.firstName}
    %0D%0ALast Name: ${dataForEmail?.lastName}%0D%0AZip code: ${dataForEmail?.zipCode}%0D%0ALength of use: ${dataForEmail?.lengthOfUse}%0D%0A
    Phone number: ${dataForEmail?.phoneNumber}%0D%0APurpose: ${dataForEmail?.purpose}%0D%0ABusiness Name: ${dataForEmail?.business || "Business name not specified"}%0D%0A%0D%0APlease prodvide any additional information below this line%0D%0A%0D%0A_________________________________________________________`}/>  
    </div>
  );
}
