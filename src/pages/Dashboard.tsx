import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { Children } from "react";

const Each = ({render, of}:any) => Children.toArray(of.map((item: any,index: any) => render(item, index)));


const Dashboard = () => {
  return (
    <>
      <div className="adminContainer">
        {/* sidebar  */}
        <AdminSidebar />

        {/* main  */}
        <main className="dashboard">
          <div className="bar">
            <BsSearch />
            <input placeholder="Search for data, users " />
            <FaRegBell />
            <img src="https://encrypted-tbn0.gstatic.com/image?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp" />
          </div>
 
           {/* cards  */}
          <section className="widgetContainer">
            <WidgetItem percents={40} amount={true} value={3400000} heading="Revenue" color="rgb(0,115,255)" />
            <WidgetItem percents={-14}  value={400} heading="Users" color="rgb(0 198 202)" />
            <WidgetItem percents={80}  value={23000} heading="Transactions" color="rgb(255 196 0)" />
            <WidgetItem percents={30}  value={1000} heading="Products" color="rgb(75 0 255)" />
          </section>
         
          {/* Graph-Container  */}
          <section className="graphContainer">
            <div className="revenue-chart">
               <h2>Revenue & Transaction</h2>
               {/* graph  */}

            </div>
            <div className="dashboard-categories">
              <h2>Inventory</h2>
             {/* Inventory  */}
               <div>
               <Each of={data.categories}
                  render={(item:any, index:any) => 
                    <CategoryItem key={index} heading={item.heading} value={item.value} color={`hsl(${item.value*4},${item.value}%,50%)`}/>
                  } />
               </div>
            </div>
          </section>

        </main>
        {/* main end */}
      </div>
    </>
  );
};

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


interface widgetItemProps {
  heading: string;
  value: number;
  percents: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percents,
  color,
  amount,
}: widgetItemProps) => {
  return (
    <>
      <article className="widget">
        <div className="widgetInfo">
          <p>{heading}</p>
          <h4>{amount ? `$${value}` : value}</h4>
          {percents > 0 ? (
            <span className="green">
              <HiTrendingUp /> + {percents} %
            </span>
          ) : (
            <span className="red">
              <HiTrendingDown /> {percents}%
            </span>
          )}
        </div>

        <div className="widgetCircle" style={{
          background:`conic-gradient(${color} ${Math.abs(percents)/100 * 360}deg, rgb(255,255,255)0)`
        }}>
          <span style={{color}}>{percents}%</span>
        </div>
      </article>

    </>
  );
};


// Inventory category item 

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({color, value, heading}:CategoryItemProps)=>{
  return(
    <>
    <div className="category-Item">
      <h5>{heading}</h5>
      <div>
        {/* //bar  */}
        <div style={{backgroundColor:color, width:`${value}%`}}> </div>
      </div>
      <span>{value}%</span>
    </div>
    </>
  )
}

export default Dashboard;
