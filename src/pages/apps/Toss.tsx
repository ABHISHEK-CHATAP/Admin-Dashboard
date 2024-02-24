import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import head from "../../assets/Images/head.jpg";
import tail from "../../assets/Images/tail.jpg";

const Toss = () => {

  const [angle, setAngle] = useState<number>(0);

  const FlipCoin = () => {
    if (Math.random() > 0.5){
//       setAngle((prev)=> prev + 180);
//     }else{
//       setAngle((prev)=>prev + 360);
//     }
//   }

//   return (
//     <>
//      <div className="adminContainer">
//         {/* sidebar  */}
//         <AdminSidebar />

//         {/* main  */}
//         <main className="dashboard-app-container">
//           <h1>Toss</h1>
//           <section>
//             <article className="tosscoin"
//              onClick={FlipCoin} style={{transform: `rotateY(${angle}deg)`}}>
//                 <div></div>
//                 <div></div>
//             </article>
//           </section>
//         </main>
//       </div>
//     </>
//   )
// }

// export default Toss
