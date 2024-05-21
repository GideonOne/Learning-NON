import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const container = style({
    width: '100%',
    padding: '1rem 0',
    borderBottom: `1px solid ${vars.colors.black[7]}`,
})

export const cover = style({
    width: 'auto',
    height: 100,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: `1px solid ${vars.colors.black[7]}`,
    borderRadius: 15,
    padding: 10,
})

export const subContainer = style({
    flex: 1,
    height: '100%',
    alignContent: 'space-between',
})

export const headerText = style({
    fontSize: 18,
    fontWeight: 600,
    color: vars.colors.black[0]
})

export const tagText = style({
    color: vars.colors.black[7]
})

export const buttonContainer = style({
    padding: '0.5rem 0'
})

export const buttonCart = style({
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    fontSize: 18,
    border: `1px solid ${vars.colors.black[7]}`,
    borderRadius: 20,
    padding: '4px 16px',
    color: vars.colors.black[0],
})

export const buttonDelete = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '50%',
    border: `1px solid ${vars.colors.black[7]}`
})