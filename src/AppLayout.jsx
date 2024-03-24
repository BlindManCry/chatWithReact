import { Outlet } from "react-router";
import ChatMembers from "./pages/ChatMembers/ChatMembers";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";

function AppLayout() {
  return (
    <div className="flex min-h-[100vh]">
      <div className="w-[30%] bg-gray-100">
        <ChatMembers />
      </div>

      <div className="w-[40%]">
        <Outlet />
      </div>

      <div className="w-[30%]">
        <PersonalInfo />
      </div>
    </div>
  );
}

export default AppLayout;
