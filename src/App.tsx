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
//charts path
const Bar = lazy(()=> import("./pages/charts/Bar"));
const Pie = lazy(()=> import("./pages/charts/Pie"));
const Line = lazy(()=> import("./pages/charts/Line"));
//apps
const Stopwatch = lazy(()=> import("./pages/apps/Stopwatch"));
const Coupon = lazy(()=> import("./pages/apps/Coupon"));
const Toss = lazy(()=> import("./pages/apps/Toss"));


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
        <Route path="/admin/chart/bar"  element={<Bar/>} />
        <Route path="/admin/chart/pie"  element={<Pie/>} />
        <Route path="/admin/chart/line"  element={<Line/>} />
        
        {/* apps  */}
        <Route path="/admin/app/stopwatch" element={<Stopwatch/>} />
        <Route path="/admin/app/coupon" element={<Coupon/>} />
        <Route path="/admin/app/toss" element={<Toss/>} />

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
