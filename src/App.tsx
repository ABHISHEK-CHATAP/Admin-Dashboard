import { lazy, Suspense } from "react";
import "./styles/app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loaderr from "./components/Loaderr";
const Dashboard = lazy(()=> import("./pages/Dashboard"));
const Products  = lazy(()=> import("./pages/Products")) ;
const Transaction  = lazy(()=> import("./pages/Transaction")) ;
const Customer  = lazy(()=> import("./pages/Customers")) ;
const NewProduct  = lazy(()=> import("./pages/management/NewProduct")) ;
const ProductManagement  = lazy(()=> import("./pages/management/ProductManagement")) ;
const TransactionManagement  = lazy(()=> import("./pages/management/TransactionManagement")) ;


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

        {/* management id's path */}
        <Route path="/admin/products/new" element={<NewProduct/>} />
        <Route path="/admin/products/:id" element={<ProductManagement/>} />
        <Route path="/admin/transaction/:id" element={<TransactionManagement/>} />
      </Routes>
      </Suspense>
    </Router>
    
    </>
  )
}

export default App
