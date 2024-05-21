"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Group, Button, Avatar, Drawer } from '@mantine/core';
import * as classes from './header.css'
import { IconShoppingCart } from '@tabler/icons-react';
import Login from '../auth/login';
import Cart from '../cart/cart';
import { useAppContext } from '../../context/appContext';

const Header: React.FC = () => {
    const [modalLogin, setModalLogin] = useState(false);
    const [drawerCart, setDrawerCart] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {state} = useAppContext();

    useEffect(() => {
        const loggedInStatus = state.user;
        setIsLoggedIn(!!loggedInStatus); // Convert to boolean
    }, [state.user]);

    return (
        <nav>
            <Login opened={modalLogin} onClose={() => { setModalLogin(false) }} />
            <Cart opened={drawerCart} onClose={() => {setDrawerCart(false)}}/>
            <header className={classes.header}>
                <div className={classes.body}>
                    <Group justify='space-between'>
                        <Link className={classes.titleMain} href='/'>
                            <span className={classes.titleSub}>E</span>-ComM
                        </Link>
                        <Group gap='lg'>
                            <a onClick={() => { setDrawerCart(true) }}>
                                <IconShoppingCart
                                    style={{ width: '2rem', height: '2rem' }}
                                    stroke={1.7}
                                />
                            </a>
                            {isLoggedIn ? (
                                <Link href='/Profile'>
                                    <Avatar src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg" alt="it's me" />
                                </Link>
                            ) : (
                                <Button className={classes.buttonLogin} color="gray" variant='filled' radius='xl' onClick={() => { setModalLogin(true) }}>Login</Button>
                            )}
                        </Group>
                    </Group>
                </div>
            </header>
        </nav>

    );
};

export default Header;
