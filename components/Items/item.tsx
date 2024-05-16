"use client"

import { Button, Group } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import * as classes from './item.css'
import Link from 'next/link';
import Image from 'next/image';

const Item: React.FC = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); //fix for rendering problems
    }, []);

    return (
        loading && (
            <Link href='/' className={classes.container}>
                <div className={classes.upperPart}>
                    <div className={classes.tag}>Music</div>
                    <div className={classes.cover}>
                        <Image src='/images/headphone.png' alt="ItemCover" layout='fill' objectFit='contain' />
                    </div>
                </div>
                <div className={classes.lowerPart}>
                    <div className={classes.title}>Headphone</div>
                    <Group justify='space-between'>
                        <span className={classes.remaining}>20 Left</span>
                        <span>600 Baht</span>
                    </Group>
                    <Group className={classes.buttonContainer} justify='space-between' grow>
                        <Button className={classes.buttonCart} color='gray' variant='outline' radius='xl'>Add to Cart</Button>
                        <Link href='/Cart' passHref>
                            <Button className={classes.buttonBuy} color='black' variant='filled' radius='xl'>Buy Now</Button>
                        </Link>
                    </Group>
                </div>
            </Link>
        )
    );
}

export default Item;