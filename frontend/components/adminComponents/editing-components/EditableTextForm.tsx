"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { fetchText } from "@/globalFunctions/apiCalls/apiCalls";
import HomePreviewPage from "./PreviewHomePage";
import ConfirmationModal from "../ConfirmationScreen";
import RentalsPagePreview from "./PreviewRentalsPage";
import PreviewSalesPage from "./PreviewSalesPage";
import AboutUsSection from "@/components/aboutUs/AboutUsSection";
import { replaceText } from "@/globalFunctions/apiCalls/apiCalls";

interface FormData {
  [key: string]: {
    [key: string]: string;
  };
}

interface EditableTextFormProps {
  currentTab: string;
}

const EditableTextForm: React.FC<EditableTextFormProps> = ({ currentTab }) => {
  const [allText, setAllText] = useState<any>(null);
  const [textWithinResponse, setTextWithinResponse] = useState<any>(null);
  const [newTextToSendToBackend, setNewTextToSendToBackend] =
    useState<any>(null);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  useEffect(() => {
    fetchText(setAllText);
  }, []);

  useEffect(() => {
    if (allText) {
      setTextWithinResponse(JSON.parse(allText[0].text));
    }
  }, [allText]);

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setTextWithinResponse(data);
    setNewTextToSendToBackend(data);
  };

  const handleShowConfirm = () => {
    setShowConfirm((prev: boolean) => !prev);
  };

  const handleSendToBackend = () => {
    replaceText(allText[0]._id, newTextToSendToBackend);
    handleShowConfirm();
    setNewTextToSendToBackend(null);
  };

  return (
    <div className="flex flex-row w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 p-2">
        {textWithinResponse && (
          <>
            <div
              className={`${currentTab !== "Home" ? "hidden" : ""} p-2 mt-2`}
            >
              <h2 className="font-bold underline mb-2 text-jblue">Home Page</h2>
              <div className="flex flex-col">
                <label className="text-sm mr-2">Main Header:</label>
                <textarea
                  className="p-1"
                  {...register("text.Home_Page.Main_Header", {
                    required: true,
                  })}
                  defaultValue={textWithinResponse.text.Home_Page.Main_Header}
                  placeholder={textWithinResponse.text.Home_Page.Main_Header}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mr-2">Second Header:</label>
                <textarea
                  className="p-1"
                  {...register("text.Home_Page.Second_Header", {
                    required: true,
                  })}
                  defaultValue={textWithinResponse.text.Home_Page.Second_Header}
                  placeholder={textWithinResponse.text.Home_Page.Second_Header}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mr-2">Info About Javco:</label>
                <textarea
                  className="p-1"
                  {...register("text.Home_Page.Info_About_Javco", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.Home_Page.Info_About_Javco
                  }
                  placeholder={
                    textWithinResponse.text.Home_Page.Info_About_Javco
                  }
                />
              </div>
              <div className="flex flex-col mt-2 w-full">
                <h3 className="font-bold text-jblue underline">
                  Types of Trailers{" "}
                </h3>
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">Type One:</label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Home_Page.Types_Of_Trailers.Type_One",
                        {
                          required: true,
                        }
                      )}
                      defaultValue={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_One
                      }
                      placeholder={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_One
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">Type Two:</label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Home_Page.Types_Of_Trailers.Type_Two",
                        {
                          required: true,
                        }
                      )}
                      defaultValue={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_Two
                      }
                      placeholder={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_Two
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Type Three:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Home_Page.Types_Of_Trailers.Type_Three",
                        {
                          required: true,
                        }
                      )}
                      defaultValue={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_Three
                      }
                      placeholder={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_Three
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Type Four:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Home_Page.Types_Of_Trailers.Type_Four",
                        {
                          required: true,
                        }
                      )}
                      defaultValue={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_Four
                      }
                      placeholder={
                        textWithinResponse.text.Home_Page.Types_Of_Trailers
                          .Type_Four
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <h3 className="font-bold text-jblue underline">Link Text</h3>
                  <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col">
                      <label className="text-sm text-jblue mr-2">
                        Link to Rentals:
                      </label>
                      <input
                        className="w-1/2"
                        {...register(
                          "text.Home_Page.Link_Text.Link_To_Rental_Text",
                          {
                            required: true,
                          }
                        )}
                        defaultValue={
                          textWithinResponse.text.Home_Page.Link_Text
                            .Link_To_Rental_Text
                        }
                        placeholder={
                          textWithinResponse.text.Home_Page.Link_Text
                            .Link_To_Rental_Text
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-jblue mr-2">Filler:</label>
                      <input
                        className="w-1/2"
                        {...register("text.Home_Page.Link_Text.Filler", {
                          required: true,
                        })}
                        defaultValue={
                          textWithinResponse.text.Home_Page.Link_Text.Filler
                        }
                        placeholder={
                          textWithinResponse.text.Home_Page.Link_Text.Filler
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-jblue mr-2">
                        Link to Sales:
                      </label>
                      <input
                        className="w-1/2"
                        {...register(
                          "text.Home_Page.Link_Text.Link_To_Sales_Text",
                          {
                            required: true,
                          }
                        )}
                        defaultValue={
                          textWithinResponse.text.Home_Page.Link_Text
                            .Link_To_Sales_Text
                        }
                        placeholder={
                          textWithinResponse.text.Home_Page.Link_Text
                            .Link_To_Sales_Text
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-jblue mr-2">
                        Link to Email:
                      </label>
                      <input
                        className="w-1/2"
                        {...register("text.Home_Page.Link_Text.Link_To_Email", {
                          required: true,
                        })}
                        defaultValue={
                          textWithinResponse.text.Home_Page.Link_Text
                            .Link_To_Email
                        }
                        placeholder={
                          textWithinResponse.text.Home_Page.Link_Text
                            .Link_To_Email
                        }
                      />
                    </div>
                  </div>{" "}
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Link to Inventory:
                    </label>
                    <textarea
                      className="w-full p-1"
                      {...register("text.Home_Page.Link_To_Inventory", {
                        required: true,
                      })}
                      defaultValue={
                        textWithinResponse.text.Home_Page.Link_To_Inventory
                      }
                      placeholder={
                        textWithinResponse.text.Home_Page.Link_To_Inventory
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${currentTab !== "Rentals" ? "hidden" : ""} p-2 mt-2`}
            >
              <h2 className="font-bold underline mb-2 text-jblue">
                Rentals Page
              </h2>

              <div className="flex flex-col">
                <label className="text-sm mr-2">Main Header:</label>
                <textarea
                  className="p-1"
                  {...register("text.Rentals_Page.Main_Header", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.Rentals_Page.Main_Header
                  }
                  placeholder={textWithinResponse.text.Rentals_Page.Main_Header}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mr-2">Text Under Photo:</label>
                <textarea
                  className="p-1"
                  {...register("text.Rentals_Page.Text_Under_Photo", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.Rentals_Page.Text_Under_Photo
                  }
                  placeholder={
                    textWithinResponse.text.Rentals_Page.Text_Under_Photo
                  }
                />
              </div>

              <div className="flex flex-col mt-2 w-full">
                <h3 className="font-bold text-jblue underline">
                  Storage Section
                </h3>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Header:</label>
                  <input
                    className="p-1"
                    {...register(
                      "text.Rentals_Page.Storage_Section.Section_Header",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Rentals_Page.Storage_Section
                        .Section_Header
                    }
                    placeholder={
                      textWithinResponse.text.Rentals_Page.Storage_Section
                        .Section_Header
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Paragraph:</label>
                  <textarea
                    className="p-1"
                    {...register(
                      "text.Rentals_Page.Storage_Section.Section_Paragraph_Before_Link_1",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Rentals_Page.Storage_Section
                        .Section_Paragraph_Before_Link_1
                    }
                    placeholder={
                      textWithinResponse.text.Rentals_Page.Storage_Section
                        .Section_Paragraph_Before_Link_1
                    }
                  />
                </div>

                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Link One Text:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Rentals_Page.Storage_Section.Link_One_Text",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Link_One_Text
                      }
                      placeholder={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Link_One_Text
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Filler Between Texts:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Rentals_Page.Storage_Section.Filler_Between_Texts",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Filler_Between_Texts
                      }
                      placeholder={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Filler_Between_Texts
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Link Two Text:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Rentals_Page.Storage_Section.Link_Two_Text",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Link_Two_Text
                      }
                      placeholder={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Link_Two_Text
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Ending Text:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Rentals_Page.Storage_Section.Ending_Text",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Ending_Text
                      }
                      placeholder={
                        textWithinResponse.text.Rentals_Page.Storage_Section
                          .Ending_Text
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 w-full">
                <h3 className="font-bold text-jblue underline">
                  Cartage Section
                </h3>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Header:</label>
                  <input
                    className="p-1"
                    {...register(
                      "text.Rentals_Page.Cartage_Section.Section_Header",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Rentals_Page.Cartage_Section
                        .Section_Header
                    }
                    placeholder={
                      textWithinResponse.text.Rentals_Page.Cartage_Section
                        .Section_Header
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Paragraph:</label>
                  <textarea
                    className="p-1"
                    {...register(
                      "text.Rentals_Page.Cartage_Section.Section_Paragraph",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Rentals_Page.Cartage_Section
                        .Section_Paragraph
                    }
                    placeholder={
                      textWithinResponse.text.Rentals_Page.Cartage_Section
                        .Section_Paragraph
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col mt-2 w-full">
                <label className="text-sm text-jblue mr-2">
                  Credit Application Text:
                </label>
                <textarea
                  className="p-1"
                  {...register("text.Rentals_Page.Credit_Application_Text", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.Rentals_Page.Credit_Application_Text
                  }
                  placeholder={
                    textWithinResponse.text.Rentals_Page.Credit_Application_Text
                  }
                />
              </div>

              <div className="flex flex-col mt-2 w-full">
                <h3 className="font-bold text-jblue underline">
                  Industries We Serve
                </h3>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Header:</label>
                  <input
                    className="p-1"
                    {...register(
                      "text.Rentals_Page.Industries_We_Serve.Section_Header",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Rentals_Page.Industries_We_Serve
                        .Section_Header
                    }
                    placeholder={
                      textWithinResponse.text.Rentals_Page.Industries_We_Serve
                        .Section_Header
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">List Items:</label>
                  {textWithinResponse.text.Rentals_Page.Industries_We_Serve.List_Items.map(
                    (item: string, index: number) => (
                      <input
                        key={index}
                        className="p-1 mt-1"
                        {...register(
                          `text.Rentals_Page.Industries_We_Serve.List_Items.${index}`,
                          { required: true }
                        )}
                        defaultValue={item}
                        placeholder={`Item ${index + 1}`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${currentTab !== "Sales" ? "hidden" : ""} p-2 mt-2`}
            >
              {" "}
              <h2 className="font-bold underline mb-2 text-jblue">
                Sales Page
              </h2>
              <div className="flex flex-col mt-2 w-full">
                <h3 className="font-bold text-jblue underline">
                  Buy Trailers Section
                </h3>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Header:</label>
                  <input
                    className="p-1"
                    {...register(
                      "text.Sales_Page.Buy_Trailers_Section.Section_Header",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                        .Section_Header
                    }
                    placeholder={
                      textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                        .Section_Header
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Paragraph:</label>
                  <textarea
                    className="p-1"
                    {...register(
                      "text.Sales_Page.Buy_Trailers_Section.Section_Paragraph_Before_Link_1",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                        .Section_Paragraph_Before_Link_1
                    }
                    placeholder={
                      textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                        .Section_Paragraph_Before_Link_1
                    }
                  />
                </div>

                <div className="flex flex-wrap p-2">
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Link To Phone:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Sales_Page.Buy_Trailers_Section.Link_To_Phone",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Link_To_Phone
                      }
                      placeholder={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Link_To_Phone
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Filler Between Links:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Sales_Page.Buy_Trailers_Section.Filler_Between_Links",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Filler_Between_Links
                      }
                      placeholder={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Filler_Between_Links
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Link To Email:
                    </label>
                    <input
                      className="w-1/2"
                      {...register(
                        "text.Sales_Page.Buy_Trailers_Section.Link_To_Email",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Link_To_Email
                      }
                      placeholder={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Link_To_Email
                      }
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-sm text-jblue mr-2">
                      Text Before Inventory Link:
                    </label>
                    <textarea
                      className="w-auto"
                      {...register(
                        "text.Sales_Page.Buy_Trailers_Section.Text_Before_Inventory_Link",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Text_Before_Inventory_Link
                      }
                      placeholder={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Text_Before_Inventory_Link
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-jblue mr-2">
                      Inventory Link Text:
                    </label>
                    <textarea
                      className="w-auto"
                      {...register(
                        "text.Sales_Page.Buy_Trailers_Section.Inventory_Link_Text",
                        { required: true }
                      )}
                      defaultValue={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Inventory_Link_Text
                      }
                      placeholder={
                        textWithinResponse.text.Sales_Page.Buy_Trailers_Section
                          .Inventory_Link_Text
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2 w-full">
                <h3 className="font-bold text-jblue underline">
                  Sell Your Trailer Section
                </h3>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Section Header:</label>
                  <input
                    className="p-1"
                    {...register(
                      "text.Sales_Page.Sell_Your_Trailer_Section.Section_Header",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Sales_Page
                        .Sell_Your_Trailer_Section.Section_Header
                    }
                    placeholder={
                      textWithinResponse.text.Sales_Page
                        .Sell_Your_Trailer_Section.Section_Header
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">
                    Text Before Email Link:
                  </label>
                  <textarea
                    className="p-1"
                    {...register(
                      "text.Sales_Page.Sell_Your_Trailer_Section.Text_Before_Email_Link",
                      { required: true }
                    )}
                    defaultValue={
                      textWithinResponse.text.Sales_Page
                        .Sell_Your_Trailer_Section.Text_Before_Email_Link
                    }
                    placeholder={
                      textWithinResponse.text.Sales_Page
                        .Sell_Your_Trailer_Section.Text_Before_Email_Link
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mr-2">Link To Email:</label>
                  <input
                    className="p-1"
                    {...register("text.Sales_Page.Link_To_Email", {
                      required: true,
                    })}
                    defaultValue={
                      textWithinResponse.text.Sales_Page.Link_To_Email
                    }
                    placeholder={
                      textWithinResponse.text.Sales_Page.Link_To_Email
                    }
                  />
                </div>
              </div>
            </div>

            <div
              className={`${
                currentTab !== "About Us" ? "hidden" : ""
              } p-2 mt-2`}
            >
              <h2 className="font-bold underline mb-2 text-jblue">
                About Us Page
              </h2>

              <div className="flex flex-col">
                <label className="text-sm mr-2">Main Header:</label>
                <textarea
                  className="p-1"
                  {...register("text.About_Us_Page.Main_Header", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.About_Us_Page.Main_Header
                  }
                  placeholder={
                    textWithinResponse.text.About_Us_Page.Main_Header
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mr-2">Paragraph One:</label>
                <textarea
                  className="p-1"
                  {...register("text.About_Us_Page.Paragraph_One", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.About_Us_Page.Paragraph_One
                  }
                  placeholder={
                    textWithinResponse.text.About_Us_Page.Paragraph_One
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mr-2">Paragraph Two:</label>
                <textarea
                  className="p-1"
                  {...register("text.About_Us_Page.Paragraph_Two", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.About_Us_Page.Paragraph_Two
                  }
                  placeholder={
                    textWithinResponse.text.About_Us_Page.Paragraph_Two
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mr-2">Paragraph Three:</label>
                <textarea
                  className="p-1"
                  {...register("text.About_Us_Page.Paragraph_Three", {
                    required: true,
                  })}
                  defaultValue={
                    textWithinResponse.text.About_Us_Page.Paragraph_Three
                  }
                  placeholder={
                    textWithinResponse.text.About_Us_Page.Paragraph_Three
                  }
                />
              </div>
            </div>
          </>
        )}
        <div className="flex flex-col w-1/4">
          {" "}
          <button
            type="submit"
            className="bg-jblue hover:bg-pink-700 text-white mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Preview Changes
          </button>
          {newTextToSendToBackend && (
            <button
              type="button"
              onClick={handleShowConfirm}
              className="bg-jblue hover:bg-pink-700 text-white mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
          )}
        </div>
      </form>{" "}
      {textWithinResponse && currentTab === "Home" && (
        <div className="w-1/2 border-l-2 border-gray-200">
          <HomePreviewPage previewText={textWithinResponse} />
        </div>
      )}
      {textWithinResponse && currentTab === "Rentals" && (
        <div className="w-3/4 border-l-2 border-gray-200">
          <RentalsPagePreview previewText={textWithinResponse} />
        </div>
      )}
      {textWithinResponse && currentTab === "Sales" && (
        <div className="w-3/4 border-l-2 border-gray-200">
          <PreviewSalesPage previewText={textWithinResponse} />
        </div>
      )}
      {textWithinResponse && currentTab === "About Us" && (
        <div className="w-3/4 border-l-2 border-gray-200">
          <AboutUsSection parsedText={textWithinResponse} />
        </div>
      )}
      {showConfirm && (
        <ConfirmationModal
          closeFunction={handleShowConfirm}
          sendToBackendFunction={handleSendToBackend}
        />
      )}
    </div>
  );
};

export default EditableTextForm;
