import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./Store.module.css";
import Slider from './Slider';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <>
            <Slider />
            <h1 className={styles.Header}>Special Product</h1>
            <div className={styles.container} >
                {
                    products.map(product => <Product 
                            key={product.id} 
                            productData = {product}
                        />)
                }
            </div>
        </>
    );
};

export default Store;