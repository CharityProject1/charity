import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Home from "../dashboardAdmin/overview";
import Users from "../dashboardAdmin/users";
import Message from "../dashboardAdmin/message";


function Routedd() {
  return (
    <div className="flex flex-row-reverse">
      <Sidebar />
      <div className="flex-1 p-4 lg:mr-64">
        <Routes>
          <Route path="/overview" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<Navigate to="/overview" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Routedd;
