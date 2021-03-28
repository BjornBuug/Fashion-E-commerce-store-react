import React from 'react'
import './AllCategories.css'

const AllCategories = ({filterModel, categories}) => {
    return (
        <div className="btn-container">
            {categories.map((category, index)=> {
                return (
                
                <button className="filter-btn"
                        onClick={()=> filterModel(category)}
                        key={index} > {category}</button>

                )
            })}
        </div>
    )
}

export default AllCategories
