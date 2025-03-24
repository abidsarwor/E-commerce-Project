import React from 'react';
import ProductStore from "../../store/ProductStore.js";

const Products = () => {
    const {ListByRemark}=ProductStore();

    if (ListByRemark === null) {
        return <p>Loading...</p>;
    } else {
        return (
            <div>
                {ListByRemark.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        );
    }
};


export default Products;