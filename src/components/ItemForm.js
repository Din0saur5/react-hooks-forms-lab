import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
 const [name, setName]= useState('')
 const [category,setCategory] = useState('')


 function onSubmit(e){
  e.preventDefault()
  
  
  
  let newItem = {
    id:uuid(),
    name, 
    category,
  }
  onItemFormSubmit(newItem)
}
 function handleName(e){
  setName(e.target.value)
 }
 function handleCategory(e){
  setCategory(e.target.value)
 }
 
  

   
 
  

  return (
    <form onSubmit={onSubmit} className="NewItem" >
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
