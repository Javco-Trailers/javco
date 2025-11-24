import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../app/globals.css";
import Image from "next/image";
import { XCircleIcon } from "lucide-react";
import { addNewInventoryItem } from "@/globalFunctions/apiCalls/apiCalls";
import ConfirmationModal from "../adminComponents/ConfirmationScreen";
import { InventoryItem } from "@/app/types/types";

type Inputs = {
  year: string;
  make: string;
  model: string;
  price: string;
  short_description: string;
  detailed_description: string;
  files: any;
};

interface NewInventoryItemProps {
  inventoryItems: InventoryItem[] | null;
  setInventoryItems: any
}

const NewInventoryItem: React.FC<NewInventoryItemProps> = ({inventoryItems, setInventoryItems}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [preview, setPreview] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(Boolean);
  const [formDataToSend, setFormDataToSend] = useState<any>(null);

  const changedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newPreviews: string[] = []; // Store new previews
      const newFiles: File[] = [];

      // Process each file asynchronously
      Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onload = (loadEvent) => {
          if (loadEvent.target) {
            const dataUrl = loadEvent.target.result as string;
            newPreviews.push(dataUrl);
            newFiles.push(file);
          }

          if (newPreviews.length === files.length) {
            setPreview((prev) => [...prev, ...newPreviews]);
            setUploadedFiles((prev) => [...prev, ...newFiles]);
          }
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const removeFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = event.currentTarget.getAttribute("data-index") || "";
    const indexAsNumber = parseInt(index);

    if (
      !isNaN(indexAsNumber) &&
      indexAsNumber >= 0 &&
      indexAsNumber < preview.length
    ) {
      const updatedPreview = [...preview];
      const updatedFiles = [...uploadedFiles];

      updatedPreview.splice(indexAsNumber, 1); // Remove the preview
      updatedFiles.splice(indexAsNumber, 1); // Remove the corresponding file

      setPreview(updatedPreview);
      setUploadedFiles(updatedFiles); // Update the state
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    // Ensure form data is properly initialized
    const formData = new FormData();

    // Ensure fields are correctly appended to FormData
    formData.append("year", data.year);
    formData.append("make", data.make);
    formData.append("model", data.model);
    formData.append("detailed_description", data.detailed_description || "");
    formData.append("price", data.price);

    // Handle files
    uploadedFiles.forEach((file, index) => {
      formData.append(`files`, file); // 'files' is the key to represent multiple files
    });
    setFormDataToSend(formData);
    setShowConfirm(true);
  };

  //send the form to the backend on confirm
  const handleSendToBackend = () => {
    addNewInventoryItem(formDataToSend, inventoryItems, setInventoryItems, reset, setUploadedFiles, setPreview);
    setShowConfirm(false);
  };
  const closeConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Form fields with validation */}
        <div>
          <label htmlFor="year" className="mr-2">
            Year:
          </label>
          <input
            {...register("year", { required: true })}
            className="input-style"
            placeholder="Enter year"
            type="number"
          />
          {errors.year && <p className="text-red-500">Year is required</p>}
        </div>
        <div>
          <label htmlFor="make" className="mr-2">
            Make:
          </label>
          <input
            {...register("make", { required: true })}
            className="input-style"
            placeholder="Enter make"
          />
          {errors.make && <p className="text-red-500">Make is required</p>}
        </div>
        <div>
          <label htmlFor="model" className="mr-2">
            Model:
          </label>
          <input
            {...register("model", { required: true })}
            className="input-style"
            placeholder="Enter model"
          />
          {errors.make && <p className="text-red-500">Model is required</p>}
        </div>
        <div>
          <label htmlFor="price" className="mr-2">
            Price:
          </label>
          <input
            {...register("price", { required: true })}
            className="input-style"
            placeholder="Enter price"
          />
          {errors.make && <p className="text-red-500">Price is required</p>}
        </div>
    
        <div className="flex flex-col">
          <label htmlFor="detailed_description">Detailed Description</label>
          <textarea
            {...register("detailed_description", { required: true })}
            className="input-style p-2"
            placeholder="Enter detailed description"
          />
          {errors.make && (
            <p className="text-red-500">Detailed description is required</p>
          )}
        </div>
        <label htmlFor="files" className="mr-2">
          Files:
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          multiple
          onChange={changedHandler}
        />{" "}
        {/* Handle file changes */}
        <div className="flex flex-wrap">
          {preview.map((url, index) => (
            <div
              key={`${index}-div`}
              className="relative" // Make the button position relative to this container
            >
              {/* Button to remove the image */}
              <button
                type="button"
                onClick={removeFile}
                key={`button-for-removal-${index}`}
                data-index={index} // Set the data-index
                className="absolute z-10 top-3 right-3 bg-white rounded-full text-black-500 hover:text-red-700"
              >
                <XCircleIcon size={24} /> {/* Display the "X" icon */}
              </button>
              <Image
                src={url}
                alt={`Preview ${index}`}
                key={`Preview ${index}`}
                height={200}
                width={200}
                className="p-2 rounded "
              />
            </div>
          ))}
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="px-4 py-2 bg-jblue hover:bg-pink-700 text-white rounded"
        >
          Submit
        </button>
      </form>
      {showConfirm && (
        <ConfirmationModal
          sendToBackendFunction={handleSendToBackend}
          closeFunction={closeConfirm}
        />
      )}
    </div>
  );
};

export default NewInventoryItem;
