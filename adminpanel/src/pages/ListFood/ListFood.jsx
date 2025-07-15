import React, {useEffect, useState}from 'react';
import {toast} from 'react-toastify';
import './ListFood.css';
import { deleteFood, getFoodList } from '../../services/foodService.js';

const ListFood = () => {
  const [list, setList] = useState([]);
  const fetchList = async() => {
    try{
      const data = await getFoodList();
      setList(data);
    }
    catch(error){
      toast.error("Error while reading the foods", error);
    }
  }

  const removeFood = async (foodId) => {
    try{
      const success = await deleteFood(foodId);
      if(success){
        toast.success('Food removed');
        await fetchList();
      }
      else{
        toast.error("Error occured while removing food");
      }
    }
    catch(error){
      toast.error('Error occured while removing food', error);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  
  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className='table'>
          <thead >
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => {
              return (
                <tr key = {index}>
                <td><img src = {item.imageUrl} alt ="" height ={48} width ={48} /> </td>
                <td>{item.name}</td>
                <td> {item.category}</td>
                <td>&#36;{item.price}</td>
                <td className='text-danger'>
                  <i className='bi bi-x-circle-fill' onClick = { () => removeFood(item.id)}></i>
                </td>
                </tr>
              )
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListFood;