import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";
import { buttonDefault } from "@/app/globals.css";

export const container = style({
    margin: '0 1rem',
    position: 'relative',
    height: '100%',
    overflowY: 'auto',
    maxHeight: 'calc(100% - 60px)',
    borderBottom: `1px solid ${vars.colors.black[7]}`,
})

export const emptyCart = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    fontSize: 20,
    color: vars.colors.black[7],
})

export const totalContainer = style({
    width: '90%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    padding: '1rem',
    zIndex: 1,
})


export const subTotalContainer = style({
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '1rem',
    justifyContent: 'space-between',
})

export const totalText = style({
    fontWeight: 'bold',
    fontSize: 18,
    color: vars.colors.black[0]
})

export const buttonCheckout = style({
    width: '100%',
    backgroundColor: vars.colors.black[0],
}) + ' ' + buttonDefault