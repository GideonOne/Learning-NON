import { style } from "@vanilla-extract/css";
import { buttonDefault } from "@/app/globals.css";
import { vars } from "../../theme";


export const body = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 20
})

export const buttonLogin = style({
    backgroundColor: vars.colors.black[0]
}) + ' ' + buttonDefault

export const errorMessage = style({
    color: vars.colors.red[0],
    fontSize: 12
})