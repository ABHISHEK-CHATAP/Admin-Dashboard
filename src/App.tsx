import { lazy, Suspense } from "react";
import "./styles/app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loaderr from "./components/Loaderr";
const Dashboard = lazy(()=> import("./pages/dashboard"))  ;
const Products  = lazy(()=> import("./pages/Products")) ;
const Transaction  = lazy(()=> import("./pages/Transaction")) ;
const Customer  = lazy(()=> import("./pages/Customers")) ;



const App = () => {


  return (
    <>

    <Router>
      <Suspense fallback={<Loaderr/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        <Route path="/admin/transaction" element={<Transaction/>}/>
        <Route path="/admin/customer" element={<Customer/>}/>
        {/* charts  */}
        
        {/* apps  */}
      </Routes>
      </Suspense>
    </Router>
    
    </>
  )
}

export default App
