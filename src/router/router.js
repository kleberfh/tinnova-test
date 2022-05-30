import {useEffect} from "react";
import Users from "../pages/Users";
import { Routes, Route } from "react-router-dom";
import {initializeDB} from "../services/indexedDB";
import Standard from "../components/Modals/Standard";
import { Reoverlay, ModalContainer } from 'reoverlay';
import CreateOrUpdateUser from "../pages/CreateOrUpdateUser";
import MenuController from "../components/Menu/MenuController";
import UserCreatedOrUpdated from "../components/Modals/UserCreatedOrUpdated";

export default function Router() {
  Reoverlay.config([
    {
      name: "UserCreatedOrUpdateModal",
      component: UserCreatedOrUpdated
    },
    {
      name: "Standard",
      component: Standard
    },
  ]);

  useEffect(() => {
    initializeDB();
  }, [])

  return(
    <>
      <MenuController />
      <Routes>
        <Route path="/" element={<CreateOrUpdateUser />} />
        <Route path="/:id" element={<CreateOrUpdateUser />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
      <ModalContainer />
    </>
  );
};