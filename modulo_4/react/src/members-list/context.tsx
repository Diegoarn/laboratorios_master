import React from "react";

export const Context = React.createContext({
  company: "",
  setCompany: (company) => {},
});

export const ContextProvider = (props) => {
  const [company, setCompany] = React.useState("Lemoncode");

  return (
    <Context.Provider value={{ company, setCompany }}>
      {props.children}
    </Context.Provider>
  );
};
