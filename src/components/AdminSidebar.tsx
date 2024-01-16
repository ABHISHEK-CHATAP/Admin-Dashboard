// import {  IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill , RiCoupon3Fill} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Children } from "react";
import { FaChartBar, FaChartPie, FaChartLine, FaStopwatch, FaGamepad } from "react-icons/fa";



const AdminSidebar = () => {
  const location = useLocation();
  // console.log("object location",location)

  const ListLink = [
    { url: "/admin/dashboard", text: "Dashboard" , icon: <RiDashboardFill/>, location: location  },
    { url: "/admin/products", text: "Product" , icon: <RiShoppingBag3Fill/>, location: location  },
    { url: "/admin/customer", text: "Customer" , icon: <AiFillFileText/>, location: location  },
    { url: "/admin/transaction", text: "Transaction" , icon: <IoIosPeople/>, location: location  },
  ];

  const Charts = [
    {url:"admin/chart/bar", text:"Bar", icon:<FaChartBar/>, location: location},
    {url:"admin/chart/pie", text:"Pie",icon:<FaChartPie/>, location: location},
    {url:"admin/chart/line", text:"Line",icon:<FaChartLine/>, location: location},
  ];

  const Apps = [
    {url:"admin/app/stopwatch", text:"Stopwatch", icon:<FaStopwatch/>, location: location},
    {url:"admin/app/coupon", text:"Coupon",icon:<RiCoupon3Fill/>, location: location},
    {url:"admin/app/toss", text:"Toss",icon:<FaGamepad/>, location: location},
  ]

  return (
    <>
      <aside>
        <h2>Logo.</h2>
        {/* dashboard start  */}
        <div>
          <h5>Dashboard</h5>
          <ul>
          <Each of={ListLink}
            render={(item:any, index:any) => 
            <Li  key={index} location={location} url={item.url} Icon={item.icon} text={item.text} />
          } />
          </ul>
        </div>
        {/* DashBoard end  */}
        {/* charts start  */}
        <div>
          <h5>Charts</h5>
          <ul>
          <Each of={Charts}
            render={(item:any, index:any) => 
              <li key={index} style={{backgroundColor:location?.pathname.includes(item.url) ? "rgba(0,115,255,0.1)" : "white"}}>
              <Link to={item.url}>{item.icon}{item.text}</Link>
              </li>
          } />
          </ul>
        </div>
        {/* charts end  */}
        {/* apps start  */}
        <div>
          <h5>Apps</h5>
          <ul>
          <Each of={Apps}
            render={(item:any, index:any) => 
              <li key={index} style={{backgroundColor:location?.pathname.includes(item.url) ? "rgba(0,115,255,0.1)" : "white"}}>
              <Link to={item.url}>{item.icon}{item.text}</Link>
              </li>
          } />
          </ul>
        </div>
        {/* apps end  */}
      </aside>
    </>
  );
};


// ---------------------------------------------------------------------------------------
//Created a Li => ListLink component to use above

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: any;
}
const Li = ({ location,url ,Icon,text}: LiProps) => {
  return (
    <>
     <li  style={{backgroundColor:location?.pathname.includes(url) ? "rgba(0,115,255,0.1)" : "white"}}>
      <Link to={url}>{Icon}{text}</Link>
      </li>
    </>
  );
};


// ---------------------------------------------------------------------------------------


const Each = ({render, of}:any) => Children.toArray(of.map((item: any,index: any) => render(item, index)));


export default AdminSidebar;
