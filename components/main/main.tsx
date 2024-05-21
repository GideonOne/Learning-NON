"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Title, Text, Button, Anchor, Group } from '@mantine/core';
import * as classes from './main.css'
import Item from './items/item';
import { getStocks } from '../../api/stock';
import { useAppContext } from '../../context/appContext';


// Define the type of the stock
type StockType = {
    createdAt: Date;
    name: string;
    image: string;
    amount: number;
    price: number;
    id: string;
    cartAmount: number;
};

const Main: React.FC = () => {
    const [stock, setStock] = useState<StockType[]>([]);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await getStocks();
                const stocksWithCartAmount = response.map(stockItem => ({
                    ...stockItem,
                    cartAmount: 0
                }));

                setStock(stocksWithCartAmount);
            } catch (err) {
                console.error('Get Stocks fail:', err);
            }
        };

        fetchStocks();
    }, []);

    return (
        <main>
            <div className={classes.imageSections}>
            </div>
            <Group justify='center'>

                <div className={classes.body}>
                    <div className={classes.subBody}>
                        <div className={classes.title}>We have everything you need!</div>
                        <Group>
                            <Button className={classes.buttonActive} color="gray" variant='filled' radius='xl'>All</Button>
                            <Button className={classes.buttonInActive} color="black" variant='outline' radius='xl'>Music</Button>
                            <Button className={classes.buttonInActive} color="black" variant='outline' radius='xl'>Furniture</Button>
                            <Button className={classes.buttonInActive} color="black" variant='outline' radius='xl'>Others</Button>
                        </Group>
                    </div>
                    <Group justify='center' gap="xl">
                        {stock.map(s => (
                            <Item key={s.id} id={s.id} name={s.name} image={s.image} amount={s.amount} price={s.price} cartAmount={s.cartAmount} />
                        ))}
                    </Group>
                </div>
            </Group>
        </main>
    );
};

export default Main;
