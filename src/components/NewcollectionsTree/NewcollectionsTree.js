import React, {useState} from "react";
import Models from '../Data/Models';
import AllCategories from 'components/AllCategoriesfilter/AllCategories';
import ModelsCards from "components/ModelsCards/ModelsCards";
import './NewcollectionsTree.css';


    const AllCategoriesState = ['all', ...new Set(Models.map((model)=> model.category))];

    console.log(AllCategories);

    const NewcollectionsTree = () => {

    const [categories, setCategories] = useState(AllCategoriesState);
    const [Cards, setModelsCards] = useState(Models);
    
    const filterModel = (category) => { 

        if(category === 'all') {
            setModelsCards(Models);
            return;
        }
        const newModel = Models.filter((model)=> model.category === category);
        setModelsCards(newModel);
        
        
    }

    return (
    <section className="section-d">
    <h1> Nick Lauren Collections</h1>
    <AllCategories filterModel={filterModel} categories={categories} />
    <ModelsCards Cards={Cards} />
    </section>

    );

}


export default NewcollectionsTree;