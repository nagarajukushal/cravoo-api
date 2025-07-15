import axios from 'axios';

const API_URL = "http://localhost:8080/api/foods";
export const addFood = async (foodData, image) => {
    const formData = new FormData();
    formData.append("food", JSON.stringify(foodData));
    formData.append("file", image);

    try {
     await axios.post(
        API_URL,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      
    } catch (error) {
      console.log("Error", error);
      throw error;
    }

}