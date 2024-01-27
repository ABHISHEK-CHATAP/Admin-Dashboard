// import {  IconType } from "react-icons";
import { Children, useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  // console.log("object location",location)

  // ------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------
  // for resonsive sidebar close & open
  const [ showModel, setShowModel] = useState<boolean>(false);
  const [ phoneActive, setPhoneActive] = useState<boolean>(window.innerWidth < 1100);
  // screen resize ke sath reload karna pad raha resopnsive check krne k liye == to avid this
  const resizeHandler = () =>{
    setPhoneActive(window.innerWidth < 1100)
  } ;

  useEffect(()=>{
    window.addEventListener("resize", resizeHandler);
    return ()=>{
      window.removeEventListener("resize", resizeHandler);
    }
  },[])

  // ab sereen reload nhi krni padegi resize eventListener se automatic ho jayega
   // ------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------



  const ListLink = [
    { url: "/admin/dashboard", text: "Dashboard" , icon: <RiDashboardFill/>, location: location  },
    { url: "/admin/products", text: "Product" , icon: <RiShoppingBag3Fill/>, location: location  },
    { url: "/admin/customer", text: "Customer" , icon: <AiFillFileText/>, location: location  },
    { url: "/admin/transaction", text: "Transaction" , icon: <IoIosPeople/>, location: location  },
  ];

  const Charts = [
    {url:"/admin/chart/bar", text:"Bar", icon:<FaChartBar/>, location: location},
    {url:"/admin/chart/pie", text:"Pie",icon:<FaChartPie/>, location: location},
    {url:"/admin/chart/line", text:"Line",icon:<FaChartLine/>, location: location},
  ];

  const Apps = [
    {url:"/admin/app/stopwatch", text:"Stopwatch", icon:<FaStopwatch/>, location: location},
    {url:"/admin/app/coupon", text:"Coupon",icon:<RiCoupon3Fill/>, location: location},
    {url:"/admin/app/toss", text:"Toss",icon:<FaGamepad/>, location: location},
  ]

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={()=> setShowModel(true)}>
          <HiMenuAlt1 />
        </button>
      )}


      <aside style={phoneActive ? {
          width:"20rem",
          height:"100vh",
          position:"fixed",
          top:0,
          left: showModel ? "0":"-20rem",
          transition: "all 0.5s",
        }: {}}>
          
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <h2>Logo.</h2>
          {phoneActive && (<button id="closeModel" onClick={()=>setShowModel(false)}>X</button>)}
          </div>
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
