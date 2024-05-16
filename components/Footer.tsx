"use client";

import React from "react";
import * as classes from "./Footer.css";
import { Group } from "@mantine/core";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <Group justify="space-between" align="start" className={classes.container} grow>
                <div className={classes.block_1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                <div className={classes.block_2}>
                    <p className={classes.addressTitle}>
                        Contract Us
                    </p>
                    <ul>
                        <li>Address: 123 Parnua Industrial Park Moo 4 Highway No.11</li>
                        <li>Phone number: 6653 581499</li>
                        <li>Email: Example@gmail.com</li>
                    </ul>
                </div>
                <p className={classes.block_3}>
                    <Link className={classes.footerLink} href=''>Home</Link>
                    <Link className={classes.footerLink} href=''>New</Link>
                    <Link className={classes.footerLink} href=''>About</Link>
                    <Link className={classes.footerLink} href=''>Terms & Services</Link>
                    <Link className={classes.footerLink} href=''>Policies</Link>
                </p>
            </Group>
            <div className={classes.copyRight}>Copyright © 2024 By Thanakorn Sriwannawit</div>
        </footer>
    )
}

export default Footer;