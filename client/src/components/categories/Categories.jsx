import { PlusOutlined,EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import {  Form  } from "antd";
import "./style.css";
import Add from "./Add";
import Edit from "./Edit";

const Categories = ({categories,setCategories}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();


  return (
    <ul className="flex gap-4 md:flex-col text-lg">
    {categories.map((item) => (
      <li className="category-item" key={item._id}>
        <span>{item.title}</span>
      </li>
    ))}




      <li
        className="category-item !bg-orange-500 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li
        className="category-item !bg-red-500 hover:opacity-90"
        onClick={() => setIsEditModalOpen(true)}
      >
        <EditOutlined className="md:text-2xl" />
      </li>
      <Add 
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        setCategories={setCategories}
        />

<Edit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />


    </ul>
  );
};

export default Categories
