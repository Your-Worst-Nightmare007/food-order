import React, { useContext, useEffect, useState } from 'react';
import classes from './headerCartButton.module.css';
import CartIcon from '../Cart/cartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartCxt = useContext(CartContext);
    const {items} =cartCxt
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`
    useEffect(() => {
        if (items.length === 0)
            return;
        setBtnIsHighLighted(true);
        const timer = setTimeout(() => { 
            setBtnIsHighLighted(false);
        }, 300);
        return () => {
            clearTimeout(timer); 
        }
    }, [items]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;