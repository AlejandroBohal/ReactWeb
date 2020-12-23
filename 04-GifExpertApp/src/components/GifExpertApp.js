import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = ({defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    //const handleAdd = (category) =>{
        //setCategories(categories => [...categories,'category']);
    //    setCategories([...categories,category]);
    //}
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories}></AddCategory>
          <hr/>
          <ol>
              { 
                categories.map(category => (
                    //<li key={category}>{category}</li>
                    <GifGrid
                        key={category}
                        category={category}>
                        
                    </GifGrid>)
                ) 
              }
          </ol>
        </>
    )
}

export default GifExpertApp
