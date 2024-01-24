import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 = "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/f/9/e/9-393863-9-puma-asphalt-white-original-imagjmppg7ygpbmh.jpeg?q=20&crop=true";
const img2 = "https://hiraoka.com.pe/media/mageplaza/blog/post/m/a/macbook_air_vs._macbook_pro-_cuales_son_sus_diferencias.jpg";

const arr: DataType[] = [
  {
    photo: <img src={img1} alt="shoes" />,
    name: "Pume shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/products/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="mackbook" />,
    name: "Mackbook",
    price: 123000,
    stock: 213,
    action: <Link to="/admin/products/sdaskdnkasjdn">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  // TableHOC ek function return krta ,
  //  toh function bar-bar create na hoo toh mai isse useCallback me rakhoonga
  const Table = useCallback(() => {
   return TableHOC<DataType>(columns, data, "dashboard-product-box", "products")();
  }, [columns,data]);

  return (
    <>
      <div className="adminContainer">
        {/* sidebar  */}
        <AdminSidebar />

        {/* main  */}
        <main>{Table()}</main>
        <Link to={"/admin/products/new"} className="new-Product-btn">
        <FaPlus/> 
        </Link>
      </div>
    </>
  );
};

export default Products;
