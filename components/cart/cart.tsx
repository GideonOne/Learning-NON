import { Button, Drawer } from '@mantine/core';
import React from 'react';
import CartItem from './cartItem';
import * as classes from './cart.css'
import { useAppContext } from '../../context/appContext';
import Link from 'next/link';

interface CartDrawerProps {
    opened: boolean;
    onClose: () => void;
}

const cartDrawer: React.FC<CartDrawerProps> = ({ opened, onClose }) => {
    const { state } = useAppContext();
    return (
        <Drawer styles={{ title: { fontSize: 20, margin: '0 1rem' }, body: { height: '90vh' } }} size='md' opened={opened} onClose={onClose} position='right' title="My Cart">
            <div className={classes.container}>
                {
                    state.cart.length === 0 &&
                    <div className={classes.emptyCart}>
                        <p>Your cart is empty</p>
                    </div>
                }
                {state.cart.map(s => (
                    <CartItem id={s.id} name={s.name} amount={s.amount} image={s.image} price={s.price} cartAmount={s.cartAmount} />
                ))}
            </div>
            <div className={classes.totalContainer}>
                <div className={classes.subTotalContainer}>
                    <span className={classes.totalText}>Subtotal</span>
                    <span className={classes.totalText}>{state.cart.reduce((acc, item) => acc + item.price * item.cartAmount, 0)} Baht</span>
                </div>
                <Link href="/Checkout">
                    <Button color='gray' className={classes.buttonCheckout}>Checkout</Button>
                </Link>
            </div>
        </Drawer>
    )
}

export default cartDrawer;
