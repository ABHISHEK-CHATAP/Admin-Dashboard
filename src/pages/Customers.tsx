import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";


interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  }, {
    Header: "Action",
    accessor: "action",
  },
];

const img1 = "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg";
const img2 = "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg";

const arr: DataType[] = [
  {
    avatar: <img src={img1} style={{borderRadius:"50%"}} alt="shoes" />,
    name: "Abhishek",
    email: "abhi@gmail.com",
    gender: "Male",
    role: "user",
    action :(
      <button><FaTrash/></button>
    )
  },
  {
    avatar: <img src={img2} style={{borderRadius:"50%"}} alt="mackbook" />,
    name: "Janie",
    email: "janie@gmail.com",
    gender: "Female",
    role: "Admin",
    action :(
      <button><FaTrash/></button>
    )
  },
];


const Customers = () => {

  const [data] = useState<DataType[]>(arr);

  // TableHOC ek function return krta ,
  //  toh function bar-bar create na hoo toh mai isse useCallback me rakhoonga
  const Table = useCallback(() => {
   return TableHOC<DataType>(columns, data, "dashboard-product-box", "customers")();
  }, [columns,data]);

  return (
    <div className="adminContainer">
    {/* sidebar  */}
    <AdminSidebar/>
    {/* main  */}
   <main>
     {Table()}
   </main>
   </div>
  )
}

export default Customers
