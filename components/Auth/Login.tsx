import React from 'react';
import { Modal } from '@mantine/core';
import { useForm, SubmitHandler } from "react-hook-form"

interface AuthModalProps {
    opened: boolean;
    onClose: () => void;
}

type Inputs = {
    email: string
    password: string
}

const LoginModal: React.FC<AuthModalProps> = ({ opened, onClose }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <Modal opened={opened} onClose={onClose} title="Authentication" centered>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' {...register("email", {required: true})} />
                {errors.email && <span>This field is required</span>}
                <input type='password' {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </Modal>
    );
};

export default LoginModal;
