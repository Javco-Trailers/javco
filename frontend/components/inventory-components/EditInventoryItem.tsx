import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { XCircleIcon } from "lucide-react";
import {
  updateInventoryItem,
  deleteInventoryItem,
  getPhotosForSingleInventory,
} from "@/globalFunctions/apiCalls/apiCalls";
import ConfirmationModal from "../adminComponents/ConfirmationScreen";

interface InventoryItem {
  _id: string;
  year: number;
  make: string;
  model: string;
  price: string;
  short_description: string;
  detailed_description: string;
  image_ids: string[]; // Array of existing image IDs
}

interface EditInventoryItemProps {
  inventoryItem: InventoryItem; // The existing inventory item to edit
  setInventoryItems: Dispatch<SetStateAction<InventoryItem[] | null>>;
  inventoryItems: InventoryItem[];
  index: number;
}

type Inputs = {
  year: string;
  make: string;
  model: string;
  price: string;
  short_description: string;
  detailed_description: string;
  files: any;
};

const EditInventoryItem: React.FC<EditInventoryItemProps> = ({
  inventoryItem,
  setInventoryItems,
  inventoryItems,
  index,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      year: inventoryItem.year.toString(),
      make: inventoryItem.make,
      model: inventoryItem.model,
      price: inventoryItem.price,
      short_description: inventoryItem.short_description,
      detailed_description: inventoryItem.detailed_description,
    },
  });

  const [preview, setPreview] = useState<string[]>([]); // Initialize with empty array
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  useEffect(() => {
    if (preview.length > 0) {
      const uploadedFilestoMakeInitialArray: any[] = [];
      preview.map((url, index) => {
        uploadedFilestoMakeInitialArray.push(
          base64ToFile(url, `${inventoryItem._id}${index}`)
        );
      });

      setUploadedFiles(uploadedFilestoMakeInitialArray);
    }
  }, [preview]);

  useEffect(() => {
    // Fetch and set images
    getPhotosForSingleInventory(setPreview, inventoryItem._id);
  }, [inventoryItem._id]); // Only fetch images when component mounts or inventory ID changes

  // changing the preview to files to send back

  function base64ToFile(dataUrl: string, filename: string) {
    // Extract the base64 data
    const base64String = dataUrl.split(",")[1]; // Remove the prefix to get only the base64 content

    // Convert base64 to binary
    const binaryString = atob(base64String);

    // Convert binary string to Uint8Array
    const binaryData = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      binaryData[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob from the binary data
    const blob = new Blob([binaryData], { type: "image/jpeg" });

    // Create a File object from the Blob with a filename
    return new File([blob], filename, { type: "image/jpeg" });
  }

  //change for adding files
  const changedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newPreviews: string[] = [];
      const newFiles: File[] = [];

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
    const formData = new FormData();

    // Ensure fields are correctly appended to FormData
    formData.append("year", data.year);
    formData.append("make", data.make);
    formData.append("model", data.model);
    formData.append("short_description", data.short_description || "");
    formData.append("detailed_description", data.detailed_description || "");
    formData.append("price", data.price);

    // Handle files
    uploadedFiles.forEach((file, index) => {
      formData.append(`files`, file); // 'files' is the key to represent multiple files
    });

    updateInventoryItem(inventoryItem._id, formData); // Call API to update

    reset(); // Optionally reset form after submission
  };

  const handleDelete = () => {
    const newInventoryItems = inventoryItems.filter((_, i) => i !== index); // Create a new array without the deleted item
    setInventoryItems(newInventoryItems); // Update state with the new array
    deleteInventoryItem(inventoryItem._id); // Deletes the inventory item
    setShowConfirm(false);
  };

  const handleConfirmModal = () => {
    setShowConfirm((prev: boolean) => !prev);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-4 border-black border p-1 rounded space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="year">Year:</label>
          <div>
            <input
              type="number"
              {...register("year", { required: true })} // Register input with React Hook Form
              defaultValue={inventoryItem.year.toString()}
            />
            {errors.year && <span>Year is required</span>}
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <label htmlFor="make">Make:</label>
            <input
              type="text"
              {...register("make", { required: true })}
              defaultValue={inventoryItem.make}
            />
            {errors.make && <span>Make is required</span>}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="model">Model:</label>
          <textarea
            {...register("model", { required: true })}
            defaultValue={inventoryItem.model}
          />
          {errors.model && <span>Model is required</span>}
        </div>

        <div className="flex flex-col w-1/4">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            {...register("price", { required: true })}
            defaultValue={inventoryItem.price.toString()} // Convert to string
          />
          {errors.price && <span>Price is required</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="short_description">Short Description:</label>
          <textarea
            {...register("short_description")}
            defaultValue={inventoryItem.short_description}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="detailed_description">Detailed Description:</label>
          <textarea
            {...register("detailed_description")}
            defaultValue={inventoryItem.detailed_description}
          />
        </div>

        <label htmlFor="files">Files:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={changedHandler}
        />
        <div className="flex flex-wrap">
          {preview.map((url, index) => (
            <div key={index} className="relative">
              <button
                onClick={removeFile}
                data-index={index}
                className="absolute top-3 right-3 bg-white rounded-full text-red-500 hover:text-red-700"
              >
                <XCircleIcon size={24} />
              </button>
              <Image
                src={url}
                alt={`Preview ${index}`}
                height={200}
                width={200}
                className="p-2 rounded"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="px-4 py-2 bg-jblue hover:bg-pink-700 text-white rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleConfirmModal}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </form>
      {showConfirm && (
        <ConfirmationModal
          sendToBackendFunction={handleDelete}
          closeFunction={handleConfirmModal}
        />
      )}
    </div>
  );
};

export default EditInventoryItem;
