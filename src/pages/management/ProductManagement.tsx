import { ChangeEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const ProductManagement = () => {

  const image ="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/7072870/2022/11/6/0a574caf-ed55-484c-8fb8-637ddf90c72a1667718129532PUMAMotorsportMenBlackSFKartCatMidIIISneakers1.jpg"

   const [name, setName] = useState<string>("Puma Shoes");
   const [price, setPrice] = useState<number>(2345);
   const [stock, setStock] = useState<number>(10);
   const [photo, setPhoto] = useState<string>(image);

   const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
     const file: File | undefined = e.target.files?.[0];
     const reader :FileReader = new FileReader();
     if(file){
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        if(typeof reader.result === "string"){
          setPhoto(reader.result)
          }
        }
       }
     }

  return (
    <>
     <div className="adminContainer">
        {/* sidebar  */}
        <AdminSidebar />

        {/* main  */}
        <main className="new-product-management-container">
          {/* 1st part  */}
          <section>
             <strong>ID - kdsjkfsf</strong>
             <img src={photo} alt="product" />
             <p>{name}</p> 
             {stock > 0 ? (<span className="green">{stock} Available</span>):(<span className="red">Not Available</span>)} 
             <h3>$ {price}</h3>
          </section>

            {/* 2nd part  */}
              <article>
                <form >
                  <h2>Manage</h2>
                  <div>
                    <label >Name</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
                  </div>
                  <div>
                    <label >Price</label>
                    <input type="number" placeholder="Price" value={price} onChange={(e)=>setPrice(Number(e.target.value))} required />
                  </div>
                  <div>
                    <label >Stock</label>
                    <input type="number" placeholder="Stock" value={stock} onChange={(e)=>setStock(Number(e.target.value))} required />
                  </div>
                  <div>
                    <label >Photo</label>
                    <input type="file" placeholder="Photo"  onChange={changeImageHandler} required />
                  </div>
                  {photo && <img src={photo} alt="New_Img" />}
                  <button type="submit">update</button>
                </form>
              </article>
        </main>

        </div>
    </> 
  )
}
export default ProductManagement
