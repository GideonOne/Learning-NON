"use client"

import React from "react"
import CustomLayout from "../customLayout"
import * as classes from "./page.css"
import { Button, Group, Input, PasswordInput } from "@mantine/core"
import Image from "next/image"
import { IconUser, IconAt, IconPhone } from "@tabler/icons-react"

const Profile: React.FC = () => {
    return (
        <CustomLayout>
            <section className={classes.body}>
                <div className={classes.upperPart}>
                    <img className={classes.profileImage} src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg" alt="it's me" />
                    <div className={classes.upperPartInfoContainer}>
                        <p className={classes.upperPartInfoSubContainer}>
                            <IconUser size={24} />
                            <span>Name: </span>
                            <span className={classes.upperPartInfoText}>Thanakorn Sriwannawit</span>
                        </p>
                        <p className={classes.upperPartInfoSubContainer}>
                            <IconAt size={24} />
                            <span>Email: </span>
                            <span className={classes.upperPartInfoText}>email@example.com</span>
                        </p>
                        <p className={classes.upperPartInfoSubContainer}>
                            <IconPhone size={24} />
                            <span>Tel: </span>
                            <span className={classes.upperPartInfoText}>-</span>
                        </p>
                    </div>
                </div>
                <hr />
                <div className={classes.lowerPart}>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>First Name</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your First Name" className={classes.textInput} disabled/>
                            <Button color="black" size="md" className={classes.buttonEdit} variant="filled">Edit</Button>
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Last Name</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your Last Name" className={classes.textInput} disabled/>
                            <Button color="black" size="md" className={classes.buttonEdit} variant="filled">Edit</Button>
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Email</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your Email" className={classes.textInput} disabled/>
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Password</div>
                        <div className={classes.inputSubContainer}>
                            <PasswordInput size="md" type="password" placeholder="Your Password" className={classes.textInput} disabled/>
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.textTitle}>Phone</div>
                        <div className={classes.inputSubContainer}>
                            <Input size="md" placeholder="Your Phone Number" className={classes.textInput} disabled/>
                            <Button color="black" size="md" className={classes.buttonEdit} variant="filled">Edit</Button>
                        </div>
                    </div>
                </div>
            </section>
        </CustomLayout>
    )
}

export default Profile;

