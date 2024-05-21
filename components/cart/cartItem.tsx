import { Group } from "@mantine/core";
import React from "react";
import { IconPlus, IconMinus, IconTrash } from "@tabler/icons-react";
import * as classes from "./cartItem.css"
import { vars } from "../../theme";
import { useAppContext } from "../../context/appContext";

interface CartProps {
    id: string;
    name: string;
    image: string;
    price: number;
    amount: number;
    cartAmount: number;
}

const cartItem: React.FC<CartProps> = ({ id, name, image, price, amount, cartAmount }) => {
    const { dispatch } = useAppContext();

    const addItem = () => {
        if (amount - cartAmount == 0) {
            return alert("Item out of stock");
        }
        dispatch({ type: 'ADD_TO_CART', payload: { id, name, image, price, amount, cartAmount } })
    };

    const removeItem = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
    };

    const clearItem = () => {
        dispatch({ type: 'CLEAR_CART', payload: { id } })
    };

    return (
        <Group align="start" className={classes.container}>
            <img src={image} className={classes.cover} />
            <div className={classes.subContainer}>
                <div>
                    <Group justify="space-between">
                        <span className={classes.headerText}>{name}</span>
                        <span className={classes.headerText}>{price * cartAmount} Baht</span>
                    </Group>
                    <span className={classes.tagText}>Others</span>
                </div>
                <Group className={classes.buttonContainer}>
                    <div className={classes.buttonCart}>
                        <IconPlus size={20} color={vars.colors.black[4]} onClick={addItem} />
                        <span>{cartAmount}</span>
                        <IconMinus size={20} color={vars.colors.black[4]} onClick={removeItem} />
                    </div>
                    <div className={classes.buttonDelete}>
                        <IconTrash size={20} color={vars.colors.black[4]} onClick={clearItem} />
                    </div>
                </Group>
            </div>
        </Group>
    )
}

export default cartItem;