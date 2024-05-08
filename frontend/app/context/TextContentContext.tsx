import React, { createContext } from "react";
import data from "../../textForApp.json";

interface TextContext {
  textForApp: any; // You might want to specify a more precise type
}

const defaultTextValue: TextContext = {
  textForApp: data,
};

// Create a context with a default value
const TextContext = createContext<TextContext>(defaultTextValue);

const TextContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const textForApp = defaultTextValue;

  return (
    <TextContext.Provider value={textForApp}>{children}</TextContext.Provider>
  );
};

// Use named exports for context and provider
export { TextContext, TextContextProvider };
