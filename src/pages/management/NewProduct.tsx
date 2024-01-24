import { ChangeEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const NewProduct = () => {


   const [name, setName] = useState<string>("");
   const [price, setPrice] = useState<number>();
   const [stock, setStock] = useState<number>();
   const [photo, setPhoto] = useState<string>("");

   const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    //  ek toh file ho sakti hai ya undefined ho sakti hai ( File | undefined )
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
              <article>
                <form >
                  <h2>New Product</h2>
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
                  <button type="submit">create</button>
                </form>
              </article>
        </main>

        </div>
    </>
  )
}

export default NewProduct
