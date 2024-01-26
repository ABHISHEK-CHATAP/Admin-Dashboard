import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/charts";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"Aug", "Sept", "Oct", "Nov", "Dec"];

const Line = () => {
  return (
    <>
      <div className="adminContainer">
        {/* sidebar  */}
        <AdminSidebar />

        {/* main  */}
        <main className="chart-container">
          <h1>Line Charts</h1>
          <section>
            <LineChart
              data={[200,444,444,556,778,455,990,1444,256,447,1000,1200]}
              label="Users"
              borderColor="rgb(53,162,255)"
              backgroundColor="rgba(53,162,255,0.5)"
              labels={months}
            />
            <h2>Active Users</h2>
          </section>

          <section>
            <LineChart
              data={[40,60,244,100,143,120,41,47,50,56,32]}
              label="Products"
              borderColor="hsla(269,80%,40%)"
              backgroundColor="hsl(269,80%,40%,0.6)"
              labels={months}
            />
            <h2>Total Products (SKU)</h2>
          </section>

          <section>
            <LineChart
              data={[2400,14400,24100,34300,90000,20000,25600,44700,99000,144400,100000,120000]}
              label="Revenue"
              borderColor="hsla(129,80%,40%)"
              backgroundColor="hsl(129,80%,40%,0.6)"
              labels={months}
            />
            <h2>Total Revenue</h2>
          </section>

          <section>
            <LineChart
              data={[9000,12000,12000,9000,1000,5000,4000,1200,1100,1500,2000,5000]}
              label="Discount"
              borderColor="hsla(29,80%,40%)"
              backgroundColor="hsl(29,80%,40%,0.6)"
              labels={months}
            />
            <h2>Discount ALlotted</h2>
          </section>


        </main>
      </div>
    </>
  );
};

export default Line;
