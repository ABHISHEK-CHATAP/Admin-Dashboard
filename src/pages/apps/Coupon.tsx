import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";


const  allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
const allNumbers = "0123456789";
const allSymbols = "!@#$%^&*()_+-./:;<=>?";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setprefix] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  // copy to clipboard function
  const CopyText = async(coupon:string)=>{
    await  window.navigator.clipboard.writeText(coupon);

     //async mhi dia tha toh CopyText pr hover pr function void return kr raha tha
     // fir await ki jagah return kia or function pr hover kia toh fir[[ =>Promise<void>]] return kr rha tha
     //toh isliye async - awiat use krna pada
     // then setIsCopied ko true = to get copied msg 

    setIsCopied(true);
  }

  // form OnSubmit function
  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(!includeNumbers && !includeCharacters && !includeSymbols){
      return alert("Please select One At least ");
    }

    let result : string = prefix || "";

    const loopLength:number = size - result.length;

    for(let i = 0; i < loopLength; i++){

      let entireString:string = "";

      if(includeNumbers) entireString += allNumbers;
      if(includeCharacters) entireString += allLetters;
      if(includeSymbols) entireString += allSymbols;

      //[wrap into (Math.floor || ~~)]
      const RandomNumbers:number = ~~(Math.random()*entireString.length);
      result += entireString[RandomNumbers]

      setCoupon(result);
    }

//   }

  //every [coupon] change hoga toh setIsCopied(false) => means fir se copy krne ka option milega
  useEffect(()=>{
    setIsCopied(false)
  },[coupon])

//   return (
//     <>
//       <div className="adminContainer">
//         {/* sidebar  */}
//         <AdminSidebar />

//         {/* main  */}
//         <main className="dashboard-app-container">
//           <h1>Coupon</h1>
//           <section>
//             <form className="coupon-form" onSubmit={submitHandler}>
//               <input
//                 type="text"
//                 placeholder="Text to include in Coupon "
//                 value={prefix}
//                 onChange={(e) => setprefix(e.target.value)}
//                 maxLength={size}
//               />

//               <input
//                 type="number"
//                 placeholder="coupon length"
//                 value={size}
//                 onChange={(e) => setSize(Number(e.target.value))}
//                 maxLength={size} 
//                 min={8}
//                 max={25}
//               />

//               <fieldset>
//                 <legend>Include</legend>

//                 <input
//                   type="checkbox"
//                   checked={includeNumbers}
//                   onChange={() => setIncludeNumbers((prev) => !prev)}
//                 />
//                 <span>Numbers</span>

//                 <input
//                   type="checkbox"
//                   checked={includeCharacters}
//                   onChange={() => setIncludeCharacters((prev) => !prev)}
//                 />
//                 <span>Characters</span>

//                 <input
//                   type="checkbox"
//                   checked={includeSymbols}
//                   onChange={() => setIncludeSymbols((prev) => !prev)}
//                 />
//                 <span>Symbols</span>

//               </fieldset>

//               <button type="submit">Generate</button>
//             </form>

//             {coupon && (
//               <code>
//                 {coupon}{" "}
//                 <span onClick={() => CopyText(coupon)}>
//                   {isCopied ? "Copied" : "Copy"}
//                 </span>
//               </code>
//             )}
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Coupon;
