import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import Image from "next/image";
import { XCircleIcon } from "lucide-react";

const ImageAddAndDelete: React.FC = ({}) => {
  // Define the type for the preview state as an array of strings (data URLs)
  const [preview, setPreview] = useState<string[]>([]);

  useEffect(() => {
    console.log(preview);
  }, [preview]);

  const changedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newPreviews: string[] = []; // Store new previews

      // Process each file asynchronously
      Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onload = (loadEvent) => {
          if (loadEvent.target) {
            const dataUrl = loadEvent.target.result as string;
            newPreviews.push(dataUrl); // Add the new data URL to the array
          }

          // When all files have been processed, update the state
          if (newPreviews.length === files.length) {
            setPreview((prev) => [...prev, ...newPreviews]); // Update the state with all new previews
          }
        };

        reader.readAsDataURL(file); // Start reading the file
      });
    }
  };

  const removeFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    const indexOfPhoto = event.currentTarget.getAttribute("data-index");

    if (indexOfPhoto !== null) {
      const index = parseInt(indexOfPhoto, 10); // Parse the string to an integer
      if (!isNaN(index) && index >= 0 && index < preview.length) {
        // Ensure the index is valid
        const updatedPreview = [...preview]; // Create a copy of the preview array
        updatedPreview.splice(index, 1); // Remove the item at the specified index
        setPreview(updatedPreview); // Set the updated array as the new state
      }
    }
  };

  return (
    <div>
      <form>
        <input type="file" name="file" multiple onChange={changedHandler} />{" "}
        {/* Handle file changes */}
        <div className="flex flex-wrap">
          {preview.map((url, index) => (
            <div
              key={`${index}-div`}
              className="relative" // Make the button position relative to this container
            >
              {/* Button to remove the image */}
              <button
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
      </form>
    </div>
  );
};

export default ImageAddAndDelete;
