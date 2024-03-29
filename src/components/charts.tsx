
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions, ArcElement, PointElement, LineElement, Filler,} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
// ye component banaya hai [[[ Bar, Doughnut,pie,line ]]] chart ke fir inhe use kr sakte hai ,
//  just by calling kahi pr bhi bs data pass krkr

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend , ArcElement,PointElement,LineElement, Filler);
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface BarChartProps {
  horizontal?: boolean;
  data_1 : number[];
  data_2 : number[];
  title_1 : string;
  title_2: string;
  bgColor_1 : string;
  bgColor_2 : string;
  labels?: string[];
}
// sring[] || number[]  => array me nuber ya string 1 se zyada...

 export const BarChart = ({horizontal=false, data_1=[],data_2=[],title_2,title_1,bgColor_1,bgColor_2,labels=months}:BarChartProps) =>{
    
     const options:ChartOptions<"bar"> = {
      responsive: true,
      indexAxis: horizontal ? "y" : "x",
      plugins: {
        legend: {
         display:true,
        },
        title: {
          display: false,
          text: 'Chart.js Bar Chart',
        },
      },
      scales: { 
        y:{
            beginAtZero:true,
            grid:{
                display: false,
            }
        },
        x:{
            grid:{
                display: false,
            }
        },
      }
    };
    
     const data:ChartData<"bar", number[], string> = {
      labels,
      datasets: [
        {
          label: title_1,
          data: data_1,
          backgroundColor: bgColor_1,
          barThickness:"flex",
          barPercentage:1,
          categoryPercentage:0.4
        },
        {
          label: title_2,
          data: data_2,
          backgroundColor: bgColor_2,
          barThickness:"flex",
          barPercentage:1,
          categoryPercentage:0.4
        },
      ],
    };


    return(
     <>
     <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
    </>
    )
}


// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------

//  Creating Doughnut Chart for 3rd row Dashbaord drom above data set 

interface DoughnutChartProps {
  labels: string[];
  data : number[];
  bgColor : string[];
  cutout?: number | string;
  legends? : boolean;
  offset?: number[];
}

 export const DonutChart = ({labels,data,bgColor,cutout,legends=true,offset}:DoughnutChartProps) => {

  const dougnutData:ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [{
      data,
      backgroundColor:bgColor,
      borderWidth:0,
      offset,
    }]
  };

  const dougnutOptions:ChartOptions<"doughnut"> = {
     responsive:true,
     plugins:{
        legend:{
          display:legends,
          position:"bottom",
          labels:{
            padding:40,
          }
        }      
     },
     cutout
  };

  return (
  <>
  <Doughnut data={dougnutData} options={dougnutOptions}/>
  </>
  )
 }

 // ---------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------


// Creating Pie chart for pie chart page

interface PieChartProps {
  labels: string[];
  data : number[];
  bgColor : string[];
  offset?: number[];
}

 export const PieChart = ({labels,data,bgColor,offset}:PieChartProps) => {

  const PieChartData:ChartData<"pie", number[], string> = {
    labels,
    datasets: [{
      data,
      backgroundColor:bgColor,
      borderWidth:1,
      offset,
    }]
  };

  const PieChartOptions:ChartOptions<"pie"> = {
     responsive:true,
     plugins:{
        legend:{
          display:false,
        }      
     },
  };

  return (
  <>
  <Pie data={PieChartData} options={PieChartOptions}/>
  </>
  )
 } 


  // ---------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------


// Creating Line Chart for in Line Chart Page

interface LineChartProps {
  data : number[];
  label : string;
  backgroundColor : string;
  borderColor : string;
  labels?: string[];
}
// sring[] || number[]  => array me nuber ya string 1 se zyada...

 export const LineChart = ({data,label,backgroundColor,borderColor,labels=months}:LineChartProps) =>{
    
     const options:ChartOptions<"line"> = {
      responsive: true,
      plugins: {
        legend: {
         display:true,
        },
        title: {
          display: false,
          text: 'Chart.js Bar Chart',
        },
      },
      scales: { 
        y:{
            beginAtZero:true,
            grid:{
                display: false,
            }
        },
        x:{
            grid:{
                display: false,
            }
        },
      }
    };
    
     const lineChartData:ChartData<"line", number[], string> = {
      labels,
      datasets: [
        {
          fill:true,
          label,
          data,
          backgroundColor,
          borderColor,
        }
      ],
    };


    return(
     <>
     <Line  options={options} data={lineChartData} />;
    </>
    )
}
