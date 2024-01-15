import {  IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Children } from "react";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside>
        <h2>Logo.</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <Li url={"/admin/dashboard"} text={"Dashboard"} location={location} Icon={RiDashboardFill } />
          </ul>
        </div>
      </aside>
    </>
  );
};


// ---------------------------------------------------------------------------------------
//Created a Li component to use above

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, location, text, Icon }: LiProps) => {
 
    const ListLink = [
        { url: "/admin/dashboard", text: "Dashboard" , icon: <RiDashboardFill/>, location: location  },
        { url: "/admin/products", text: "Product" , icon: <RiShoppingBag3Fill/>, location: location  },
        { url: "/admin/customer", text: "Customer" , icon: <AiFillFileText/>, location: location  },
        { url: "/admin/transaction", text: "Transaction" , icon: <IoIosPeople/>, location: location  },
    ];

  return (
    <>

    <Each of={ListLink}
     render={(item:any, index:any) => <li key={index}><Link to={item.url}>{item.icon}{item.text}</Link></li> }
    />
      {/* <li>
        <Link to={url}>
          <Icon />
          {text}
        </Link>
      </li> */}
    </>
  );
};
// ---------------------------------------------------------------------------------------


const Each = ({render, of}:any) => Children.toArray(of.map((item: any,index: any) => render(item, index)));




export default AdminSidebar;
