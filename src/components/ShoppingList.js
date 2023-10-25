import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ searchQuery, setSearch] = useState("")
  
  

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const searchedItems = items.filter(item =>{
    return item.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const itemsToDisplay = searchedItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchQuery}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
