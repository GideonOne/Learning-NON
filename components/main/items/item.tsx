"use client"

import { Button, Group, LoadingOverlay } from '@mantine/core';
import React from 'react';
import * as classes from './item.css'
import Link from 'next/link';
import { useAppContext } from '../../../context/appContext';

interface ItemProps {
    id: string;
    name: string;
    image: string;
    amount: number;
    price: number;
    cartAmount: number;
    isLoading: boolean;
}

const Item: React.FC<ItemProps> = ({ id, name, image, amount, price, cartAmount, isLoading }) => {
    const { state, dispatch } = useAppContext();

    const addToCart = () => {
        if (state.user) {
            dispatch({ type: 'ADD_TO_CART', payload: { id, name, image, price, amount, cartAmount } })
        }
        else {
            alert("Please login to add to cart");
        }
    };

    return (
        <div className={classes.container}>
            <Link href=''>
                <div className={classes.upperPart}>
                    <div className={classes.tag}>Others</div>
                    <img className={classes.cover} src={image} alt="ItemCover" />
                </div>
                <div className={classes.lowerPart}>
                    <div className={classes.title}>{name}</div>
                    <Group justify='space-between'>
                        <span className={classes.remaining}>{amount} Left</span>
                        <span>{price} Baht</span>
                    </Group>
                </div>
            </Link>

            <Group className={classes.buttonContainer} justify='space-between' grow>
                <Button className={classes.buttonCart} color='gray' variant='outline' radius='xl' onClick={addToCart}>Add to Cart</Button>
                <Link href='/Checkout' passHref>
                    <Button className={classes.buttonBuy} color='black' variant='filled' radius='xl'>Buy Now</Button>
                </Link>
            </Group>
            <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: 'black' }} />
        </div>
    );
}

export default Item;