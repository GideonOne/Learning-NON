"use client"

import React, { useEffect, useState } from "react"
import CustomLayout from "../customLayout"
import * as classes from "./page.css"
import { Button, Group, Input, PasswordInput } from "@mantine/core"
import { IconUser, IconAt, IconPhone } from "@tabler/icons-react"
import { useAppContext } from "../../../context/appContext"
import { redirect } from "next/navigation"
import { updateUser } from "../../../api/user"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { vars } from "../../../theme"

interface User {
    createdAt: Date;
    name: string;
    lastName: string;
    emailPassword: string;
    image: string;
}

const Profile: React.FC = () => {

    const { state, dispatch } = useAppContext();

    useEffect(() => {
        if (!state.user) {
            redirect("/")
        }
    }, [state.user])

    const Logout = () => {
        dispatch({ type: "LOGOUT" })
    }

    const [editMode, setEditMode] = useState(false);
    const handleEditClick = () => {
        setEditMode(true); // Enable edit mode
    };

    const [userData, setUserData] = useState({
        createdAt: state.user?.createdAt ?? new Date(),
        name: state.user?.name ?? "",
        lastName: state.user?.lastName ?? "",
        emailPassword: state.user?.emailPassword ?? "",
        image: state.user?.image ?? ""
    });

    const setCreatedAt = (value: Date) => setUserData(data => ({ ...data, createdAt: value }));
    const setName = (value: string) => setUserData(data => ({ ...data, name: value }));
    const setLastName = (value: string) => setUserData(data => ({ ...data, lastName: value }));
    const setEmailPassword = (value: string) => setUserData(data => ({ ...data, emailPassword: value }));
    const setImage = (value: string) => setUserData(data => ({ ...data, image: value }));


    const editUser = async (data: User) => {
        try {
            const response = await updateUser(data);
            const user = response;
            dispatch({ type: 'UPDATE_USER', payload: user });

        } catch (err) {
            console.error('Update user failed:', err);
        }
        finally {
            setEditMode(false);
        }
    };

    return (
        <CustomLayout>
            <section className={classes.body}>
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
                        <div className={classes.textTitle}>First Name</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your First Name" value={userData.name} className={classes.textInput} disabled={!editMode} onChange={(e) => setName(e.target.value)} />

                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Last Name</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your Last Name" value={userData.lastName} className={classes.textInput} disabled={!editMode} onChange={(e) => setLastName(e.target.value)} />
                            {/* <Button color="black" size="md" className={classes.buttonEdit} variant="filled">Edit</Button> */}
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
                            {/* <Button color="black" size="md" className={classes.buttonEdit} variant="filled">Edit</Button> */}
                        </div>
                    </div>
                </div>
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
                            onClick={() => { editUser(userData) }} // Confirm changes
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
            </section>
        </CustomLayout>
    )
}

export default Profile;

