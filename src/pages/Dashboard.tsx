import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <div className="adminContainer">
        {/* sidebar  */}
        <AdminSidebar />

        {/* main  */}
        <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input placeholder="Search for data, users " />
          <FaRegBell/>
          <img src="https://encrypted-tbn0.gstatic.com/image?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp" />
        </div>

        </main>
      </div>
    </>
  );      
};

export default Dashboard;
