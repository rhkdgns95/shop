import React from 'react';
import CartPresenter from './CartPresenter';
import CartProvider from './CartProvider';

const Cart = () => (
    <CartProvider>
        <CartContainer />
    </CartProvider>
);

const CartContainer = () => (
    <CartPresenter/>
);

export default Cart;