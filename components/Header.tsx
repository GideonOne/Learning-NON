"use client";

import React from 'react';
import Link from 'next/link'
import { Group, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import * as classes from './Header.css'
import { IconShoppingCart } from '@tabler/icons-react';
import Login from './Auth/Login';

const Header: React.FC = () => {
    const [opened, { open, close, toggle }] = useDisclosure(false);
    return (
        <div>
            <Login opened={opened} onClose={close} />
            <header className={classes.header}>
                <div className={classes.body}>
                    <Group justify='space-between'>
                        <Link className={classes.titleMain} href='/'>
                            <span className={classes.titleSub}>E</span>-ComM
                        </Link>
                        <Group>
                            <Link href='/Cart'>
                                <IconShoppingCart
                                    style={{ width: '2rem', height: '2rem' }}
                                    stroke={1.7}
                                />
                            </Link>
                            <Button className={classes.buttonLogin} color="black" variant='filled' radius='xl' onClick={open}>Login</Button>
                        </Group>
                    </Group>
                </div>
            </header>
        </div>

    );
};

export default Header;
