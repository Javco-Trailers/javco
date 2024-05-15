import React from "react";

interface ConfirmationModalProps {
  sendToBackendFunction: any;
  closeFunction: any;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  sendToBackendFunction,
  closeFunction,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
        <p className="mb-6">
          Are you sure you want to proceed with this action?
        </p>
        <div className="flex justify-end">
          <button
            onClick={closeFunction}
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={sendToBackendFunction}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
