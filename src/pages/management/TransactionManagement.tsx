import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import { orderItemType, orderType } from "../../types";
import { Link } from "react-router-dom";


const image ="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/7072870/2022/11/6/0a574caf-ed55-484c-8fb8-637ddf90c72a1667718129532PUMAMotorsportMenBlackSFKartCatMidIIISneakers1.jpg"

    const orderItems : orderItemType[] = [
      {
        name:"Puma Shoes",
        photo:image,
        _id:"asdsaasdas",
        quantity:4,
        price:2000,
      }
    ]



const TransactionManagement = () => {
 
    const [order, setOrder]=useState<orderType>(
      {
        name: "Abhishek Chatap",
        address: "77 Black Street",
        city: "NeyWord",
        state: "Nevada",
        country: "India",
        pinCode: 234435,
        status : "Processing",
        subtotal:4000,
        discount:1200,
        shippingCharges:0,
        tax:200,
        total: 4000 + 200 + 0 - 1200,
        orderItems,
        _id:"asdnasjdhbn",
      }
    );

    const {name,address,city,country,state,pinCode,status,subtotal,discount,shippingCharges,tax,total}= order;

  const updateHandler = ()=>{
    setOrder((prev) => ({...prev,  status : prev.status === "Processing" ? "Delivered" : "Shipped"}))
  }

  return (
    <>
  
  <div className="adminContainer">
        {/* sidebar  */}
        <AdminSidebar />

        {/* main  */}
        {/* [[[ new-product-management-container ]]] ==> className gives two paraller boxes */}
        <main className="new-product-management-container">
           <section>
            <h2>Order Items</h2>

            {
              order.orderItems.map((i,idx)=>(
                <ProductCard key={idx} name={i.name} photo={i.photo} _id={i._id} price={i.price} quantity={i.quantity} />
              ))
            }
           </section>

           <article className="shipping-info-card">
            <h1>Order Info</h1>
            <h5>User Info</h5>
            <p>Name : {name}</p>
            <p>
              Address :  {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
            </p>
            <h5>Amount Info</h5>
            <p>Subtotal : {subtotal}</p>
            <p>ShippingCharges : {shippingCharges}</p>
            <p>Tax : {tax}</p>
            <p>Discount : {discount}</p>
            <p>Subtotal : {subtotal}</p>
            <p>Total : {total}</p>
            
            <h5>Status Info</h5>
            <p>Status : 
              <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"}>
                {" "}{status}
              </span>
            </p>
            <button onClick={updateHandler}>Process Status</button>
           </article>
        </main>

        </div>
  </>
  )
}

// --------------------------------------------------------------------------------------------------

// left side product card
const ProductCard = ({name,photo,_id,quantity,price}:orderItemType)=>(
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/products/${_id}`}>{name}</Link>
    <span>$ {price} X {quantity} = $ {price*quantity}</span>
  </div>
)
// --------------------------------------------------------------------------------------------------


export default TransactionManagement
