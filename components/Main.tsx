import React from 'react';
import Image from 'next/image';
import { Container, Title, Text, Button, Anchor, Group } from '@mantine/core';
import * as classes from './Main.css'

const Main: React.FC = () => {

    return (
        <main>
            <div className={classes.imageSections}>
                <Group justify='center'>

                    <div className={classes.body}>
                        <div className={classes.subBody}>
                            <div className={classes.title}>We have everything you need!</div>
                            <Group>
                                <Button className={classes.buttonCat} color="black" variant='filled' radius='xl'>All</Button>
                                <Button className={classes.buttonCat} color="black" variant='outline' radius='xl'>Music</Button>
                                <Button className={classes.buttonCat} color="black" variant='outline' radius='xl'>Furniture</Button>
                                <Button className={classes.buttonCat} color="black" variant='outline' radius='xl'>Others</Button>
                            </Group>
                        </div>
                    </div>
                </Group>
            </div>


        </main>
    );
};

export default Main;
