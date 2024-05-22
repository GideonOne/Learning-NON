"use client"

import React, { useEffect, useState } from 'react';
import { Button, Group, LoadingOverlay, Text } from '@mantine/core';
import * as classes from './main.css';
import Item from './items/item';
import { useStocks } from '../../api/stock';

const Main: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;
  const totalItems = 20;

  const { data, isLoading } = useStocks(page, limit)

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / limit));
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <main>
      <div className={classes.imageSections}></div>
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
          {isLoading ? (
            <div className={classes.loadingContainer}>
              <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: 'black' }} />
            </div>
          ) : (
            <Group justify='center' gap="xl">
              {data?.map(s => (
                <Item key={s.id} id={s.id} name={s.name} image={s.image} amount={s.amount} price={s.price} cartAmount={s.cartAmount} isLoading={isLoading} />
              ))}
            </Group>
          )}
          <Group justify='center' mt="md">
            <Button color="gray" className={classes.buttonNav} onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</Button>
            <Text>{page} / {totalPages}</Text>
            <Button color="gray" className={classes.buttonNav} onClick={() => handlePageChange(page + 1)} disabled={page >= totalPages}>Next</Button>
          </Group>
        </div>
      </Group>
    </main>
  );
};

export default Main;
