import React, { useState } from "react";
import { assets } from "../../assets/assets";
// import { axios } from "axios";
import { addFood } from "../../services/foodService";
import { toast } from "react-toastify";

const AddFood = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biryani",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // stops reloading the entire browser.
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    try {
      await addFood(data, image);
      toast.success("Food added succesfully");
      setData({ name: "", description: "", category: "Biryani", price: "" });
      setImage(null);
    } catch (error) {
      toast.error("Error adding food", error);
    }
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="mx-2 mt-2">
      <div className="row justify-content-center">
        <div className=" card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlfor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlfor="category" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="Biryani"> Biryani</option>
                  <option value="Cake"> Cake</option>
                  <option value="Burger"> Burger</option>
                  <option value="Pizza"> Pizza</option>
                  <option value="Rolls"> Rolls</option>
                  <option value="Salad"> Salad</option>
                  <option value="Ice cream"> Ice cream</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlfor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>

              <div className="mb-3">
                <label htmlor="message" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlfor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt=" "
                    width={60}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
