"use client"

import React, { useEffect, useState } from "react"
import CustomLayout from "../customLayout"
import * as classes from "./page.css"
import { Button, Group, Input, PasswordInput } from "@mantine/core"
import { IconUser, IconAt, IconPhone } from "@tabler/icons-react"
import { useAppContext } from "../../../context/appContext"
import { redirect } from "next/navigation"
import { updateUser } from "../../../api/user"
import { vars } from "../../../theme"
import { useMutation } from "@tanstack/react-query"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    createdAt: z.string().datetime(),
    name: z.string()
        .min(1, { message: 'First name cannot be empty' }),
    lastName: z.string()
        .min(1, { message: 'Last name cannot be empty' }),
    emailPassword: z.string(),
    image: z.string(),
});

type Inputs = z.infer<typeof schema>;

const Profile: React.FC = () => {

    const { dispatch } = useAppContext();
    const userJson = localStorage.getItem("user");
    const storedUser = userJson ? JSON.parse(userJson) : null;
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema)
    });

    useEffect(() => {
        if (!storedUser) {
            redirect("/")
        }
    }, [storedUser])

    const Logout = () => {
        dispatch({ type: "LOGOUT" })
    }

    const [editMode, setEditMode] = useState(false);
    const handleEditClick = () => {
        setEditMode(true); // Enable edit mode
    };

    const [userData, setUserData] = useState({
        createdAt: storedUser?.createdAt ?? new Date(),
        name: storedUser?.name ?? "",
        lastName: storedUser?.lastName ?? "",
        emailPassword: storedUser?.emailPassword ?? "",
        image: storedUser?.image ?? ""
    });

    const setName = (value: string) => setUserData(data => ({ ...data, name: value }));
    const setLastName = (value: string) => setUserData(data => ({ ...data, lastName: value }));

    const mutation = useMutation({
        mutationFn: (data: Inputs) => {
            return updateUser(data);
        },
        onSuccess(data) {
            dispatch({ type: 'UPDATE_USER', payload: data });
            setEditMode(false)
        },
        onError(error) {
            console.error('Update user failed:', error.message);
        }
    })

    const onSubmit: SubmitHandler<Inputs> = async (input) => {
        // console.log(input);
        
        mutation.mutate(input);
    };

    return (
        <CustomLayout>
            <form className={classes.body} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.upperPart}>
                    <img className={classes.profileImage} src={userData.image} alt="it's me" />
                    <div className={classes.upperPartInfoContainer}>
                        <p className={classes.upperPartInfoSubContainer}>
                            <IconUser size={24} />
                            <span>Name: </span>
                            <span className={classes.upperPartInfoText}>{userData.name} {userData.lastName}</span>
                        </p>
                        <p className={classes.upperPartInfoSubContainer}>
                            <IconAt size={24} />
                            <span>Email: </span>
                            <span className={classes.upperPartInfoText}>{userData.emailPassword.split('&')[0]}</span>
                        </p>
                        <p className={classes.upperPartInfoSubContainer}>
                            <IconPhone size={24} />
                            <span>Tel: </span>
                            <span className={classes.upperPartInfoText}>-</span>
                        </p>
                        <Button color="black" className={classes.buttonLogout} onClick={Logout}>Logout</Button>
                    </div>
                </div>
                <hr />
                <div className={classes.lowerPart}>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>First Name
                            {errors.name && <span className={classes.errorMessage}> *{errors.name.message}</span>}
                        </div>
                        <div className={classes.inputSubContainer}>
                            <Input {...register("name")} size="md" placeholder="Your First Name" value={userData.name} className={classes.textInput} disabled={!editMode} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Last Name
                            {errors.lastName && <span className={classes.errorMessage}> *{errors.lastName.message}</span>}
                        </div>
                        <div className={classes.inputSubContainer}>
                            <Input {...register("lastName")} size="md" placeholder="Your Last Name" value={userData.lastName} className={classes.textInput} disabled={!editMode} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Email</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your Email" value={userData.emailPassword.split('&')[0]} className={classes.textInput} disabled />
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Password</div>
                        <div className={classes.inputSubContainer}>
                            <PasswordInput size="md" type="password" value={userData.emailPassword.split('&')[1]} placeholder="Your Password" className={classes.textInput} disabled />
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Phone</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your Phone Number" className={classes.textInput} disabled />
                        </div>
                    </div>
                </div>
                <input type="hidden" {...register("emailPassword")} value={userData.emailPassword} />
                <input type="hidden" {...register("image")} value={userData.image} />
                <input type="hidden" {...register("createdAt")} value={userData.createdAt} />
                {!editMode && (
                    <Button
                        color="black"
                        size="md"
                        className={classes.buttonEdit}
                        variant="filled"
                        onClick={handleEditClick} // Toggle edit mode
                    >
                        Edit
                    </Button>
                )}
                {editMode && (
                    <Group>
                        <Button
                            color="black"
                            size="md"
                            className={classes.buttonEdit}
                            variant="filled"
                            type="submit" // Confirm changes
                        >
                            Confirm
                        </Button>
                        <Button
                            color={vars.colors.red[0]}
                            size="md"
                            className={classes.buttonCancel}
                            variant="filled"
                            onClick={() => setEditMode(false)} // Cancel edit mode
                        >
                            Cancel
                        </Button>
                    </Group>
                )}
            </form>
        </CustomLayout>
    )
}

export default Profile;

