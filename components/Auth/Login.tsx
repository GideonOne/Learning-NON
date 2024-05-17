import React from 'react';
import { Button, Input, Modal, PasswordInput, TextInput } from '@mantine/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as classes from './login.css'
import { IconAt, IconLock } from '@tabler/icons-react';

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
    //     .min(6, { message: "Password must be at least 6 characters long" })
    //     .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    //     .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    //     .regex(/\d/, { message: "Password must contain at least one number" })
    //     .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
});

type Inputs = z.infer<typeof schema>;

const LoginModal: React.FC<AuthModalProps> = ({ opened, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(`Login as ${data.email}`);
    };

    const iconEmail = <IconAt size={16} />
    const iconPassword = <IconLock style={{ width: 'rem(18)', height: 'rem(18)' }} stroke={1.5} />

    return (
        <Modal opened={opened} onClose={onClose} title="Login" centered>
            <form className={classes.body} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label> {errors.email && <span className={classes.errorMessage}>*{errors.email.message}</span>}
                    <Input placeholder="Your email" leftSection={iconEmail} type="email" {...register("email")} />
                    {/* {errors.email && <span>{errors.email.message}</span>} */}
                </div>
                <div>
                    <label>Password</label> {errors.password && <span className={classes.errorMessage}>*{errors.password.message}</span>}
                    <PasswordInput leftSection={iconPassword} placeholder="Your password" type="password" {...register("password")} />
                    {/* {errors.password && <span>{errors.password.message}</span>} */}
                </div>
                <Button className={classes.buttonLogin} color='gray' radius={20} type="submit">Submit</Button>
            </form>
        </Modal>
    );
};

export default LoginModal;
