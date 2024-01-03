import { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { PlusOutlined,EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const Products = ({categories}) => {
  const [products, setProducts] = useState([]);
  const [isAddtModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);




  return (
    <div className="products-wrapper grid grid-cols-card gap-4">
      {products.map((item) => (
        <ProductItem item={item}/>
      ))}

       <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-400 flex justify-center items-center rounded-3xl min-h-[180px]
       " onClick={()=> setIsAddModalOpen(true)}> 
       <PlusOutlined  className="text-white md:text-3xl hover:opacity-25"/>
       </div>
       <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-red-400 flex justify-center items-center rounded-3xl min-h-[180px] " onClick={()=> navigate("/products")}> 
       <EditOutlined  className= "text-white md:text-3xl hover:opacity-25 "/>
       </div>
       <Add 
        isAddModalOpen={isAddtModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        products={products}
        setProducts={setProducts}
        
        />
       </div>
  );
};
export default Products;
