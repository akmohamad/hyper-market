import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <Link className={styles.productLink} to="/login">Login</Link>
                <Link className={styles.productLink} to="/signup">Signup</Link>
                <Link className={styles.productLink} to="/chartline">Chartline</Link>
                <Link className={styles.productLink} to="/categories">Categories</Link>
                <Link className={styles.productLink} to="/discount">Discount</Link>
                


                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shop icon" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>


                <form class="d-flex ps-3" role="search">
                    <input class="form-control me-2 bg-dark text-light  " type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
                
            </div>
        </div>
    );
};

export default Navbar;