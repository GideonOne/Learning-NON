"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Group, Button, Modal, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import * as classes from './header.css'
import { IconShoppingCart } from '@tabler/icons-react';
import Login from '../auth/login';

const Header: React.FC = () => {
    const [opened, { open, close, toggle }] = useDisclosure(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(!!loggedInStatus); // Convert to boolean
    }, []);

    return (
        <nav>
            <Login opened={opened} onClose={close} />
            <header className={classes.header}>
                <div className={classes.body}>
                    <Group justify='space-between'>
                        <Link className={classes.titleMain} href='/'>
                            <span className={classes.titleSub}>E</span>-ComM
                        </Link>
                        <Group gap='lg'>
                            <Link href='/Cart'>
                                <IconShoppingCart
                                    style={{ width: '2rem', height: '2rem' }}
                                    stroke={1.7}
                                />
                            </Link>
                            {isLoggedIn ? (
                                <Link href='/Profile'>
                                    <Avatar src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg" alt="it's me" />
                                </Link>
                            ) : (
                                <Button className={classes.buttonLogin} color="gray" variant='filled' radius='xl' onClick={open}>Login</Button>
                            )}
                        </Group>
                    </Group>
                </div>
            </header>
        </nav>

    );
};

export default Header;
