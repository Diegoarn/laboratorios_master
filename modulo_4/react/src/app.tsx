import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./loginpage";
import { AppCompany } from "./members-list/app-company";
import { RickPage } from "./rick-list/app-rick";
import { MemberData } from "./members-list/member-data";
import { ContextProvider } from "./members-list/context";

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/companyList/app" element={<AppCompany />} />
          <Route path="/rickmorty" element={<RickPage />} />
          <Route path="/memberdata/:login" element={<MemberData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};
