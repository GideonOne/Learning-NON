"use client";

import React, { useState } from 'react';
import { Button, Input, Modal, PasswordInput, TextInput } from '@mantine/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as classes from './login.css'
import { IconAt, IconLock } from '@tabler/icons-react';
import { useAppContext } from '../../context/appContext';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../api/auth';

interface AuthModalProps {
    opened: boolean;
    onClose: () => void;
}

const schema = z.object({
    email: z.string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" }),
    password: z.string()
        .min(1, { message: "Password is required" })
});

type Inputs = z.infer<typeof schema>;



const LoginModal: React.FC<AuthModalProps> = ({ opened, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema)
    });

    const { dispatch } = useAppContext();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await loginUser(data.email, data.password);
            const user = response;
            dispatch({ type: 'LOGIN', payload: user });
            onClose();
        } catch (err) {
            console.error('Login failed:', err);
            alert('Login failed, your email and password is not valid');
        }
    };

    const iconEmail = <IconAt size={16} />
    const iconPassword = <IconLock style={{ width: 'rem(18)', height: 'rem(18)' }} stroke={1.5} />

    return (
        <Modal styles={{ title: { fontSize: 20 } }} opened={opened} onClose={onClose} title="Login" centered>
            <form className={classes.body} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label> {errors.email && <span className={classes.errorMessage}>*{errors.email.message}</span>}
                    <Input placeholder="Your email" leftSection={iconEmail} type="email" {...register("email")} />
                </div>
                <div>
                    <label>Password</label> {errors.password && <span className={classes.errorMessage}>*{errors.password.message}</span>}
                    <PasswordInput leftSection={iconPassword} placeholder="Your password" type="password" {...register("password")} />
                </div>
                <Button className={classes.buttonLogin} color='gray' radius={20} type="submit">Submit</Button>
            </form>
        </Modal>
    );
};

export default LoginModal;
