import { ReactElement, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC";



interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  }, {
    Header: "Action",
    accessor: "action",
  },
];


const arr: DataType[] = [
  {
    user: "Abhishek",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: (<span className="red">Processing </span>) ,
    action : (<Link to={"/admin/transaction/sajknaskd"}>manage</Link> )
  },  {
    user: "Janie",
    amount: 6000,
    discount: 800,
    quantity: 1,
    status: (<span className="green">shipped </span>) ,
    action : (<Link to={"/admin/transaction/sajknaskd"}>manage</Link> )
  },  {
    user: "Ayush",
    amount: 3000,
    discount: 200,
    quantity: 2,
    status: (<span className="purple">delivered </span>) ,
    action : (<Link to={"/admin/transaction/sajknaskd"}>manage</Link> )
  },
 
];




const Transaction = () => {

  const [data] = useState<DataType[]>(arr);
  
  // TableHOC ek function return krta ,
  //  toh function bar-bar create na hoo toh mai isse useCallback me rakhoonga
  const Table = useCallback(() => {
   return TableHOC<DataType>(columns, data, "dashboard-product-box", "Transaction")();
  }, [columns,data]);
  
  return (
  <>
  
  <div className="adminContainer">
    {/* sidebar  */}
    <AdminSidebar/>
    {/* main  */}
   <main>
   {Table()}
   </main>
   </div>
  </>
  )
}

export default Transaction
