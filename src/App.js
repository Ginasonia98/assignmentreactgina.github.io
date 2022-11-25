import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import CardForm from "./components/CardForm";
import ProductCard from "./components/ProductCard";

function App() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedId, setUpdatedId] = useState("");

  const [data, setData] = useState([]);

  const getData = () => {
    Axios({
      method: "get",
      url: "http://localhost:7777/product",
    }).then((response) => {
      console.log(response);
      setData(response.data.data);
    });
  };

  const postData = (data) => {
    Axios({
      method: "post",
      url: "http://localhost:7777/product",
      data,
    }).then((response) => {
      console.log(response);
      setName("");
      setDescription("");
      setImage("");
      setPrice("");
      getData();
    });
  };

  const editData = (data) => {
    Axios({
      method: "put",
      url: `http://localhost:7777/product/${updatedId}`,
      data,
    }).then((response) => {
      console.log(response);
      setName("");
      setDescription("");
      setImage("");
      setPrice("");
      setIsEdit(false);
      setUpdatedId("");
      getData();
    });
  };
  const deleteData = (id) => {
    if (window.confirm(`Delete ID ${id}?`)) {
    Axios({
      method: "post",
      url: `http://localhost:7777/product/delete/${id}`,
      data: {},
    }).then((response) => {
      console.log(response);
      getData();
    });
  }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleName = (text) => {
    setName(text);
  };

  const handleDescription = (text) => {
    setDescription(text);
  };

  const handleImage = (text) => {
    setImage(text);
  };

  const handlePrice = (number) => {
    setPrice(number);
  };

  const handleClick = () => {
    const newData = {
      name: name,
      description: description,
      image: image,
      price: price,
    };
    if (isEdit) {
      return editData(newData);
    }
    postData(newData);
  };

  const handleEdit = (index) => {
    setUpdatedId(data[index].id);
    setName(data[index].name);
    setDescription(data[index].description);
    setImage(data[index].image);
    setPrice(data[index].price);
    setIsEdit(true);
  };

  return (
    <>
      <div className="container">
        <div className="my-4">
          <CardForm
            name={name}
            description={description}
            image={image}
            price={price}
            handleName={handleName}
            handleImage={handleImage}
            handleDescription={handleDescription}
            handlePrice={handlePrice}
            handleClick={handleClick}
            isEdit={isEdit}
          />
        </div>
        <div className="row g-3">
          {data.map((item, index) => {
            const { id, name, description, image, price } = item;
            return (
              <div key={`product-${index}`} className="col-3">
                <ProductCard
                  name={name}
                  description={description}
                  image={image}
                  price={price}
                  handleDelete={() => deleteData(id)}
                  handleEdit={() => handleEdit(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
