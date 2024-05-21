import { style } from "@vanilla-extract/css";
import { vars } from "../../../theme";
import { buttonDefault } from "../globals.css";

export const body = style({
    display: 'flex',
    flexDirection: 'column',
    margin: '12rem 8rem 25rem'
})

export const profileImage = style({
    width: 200,
    height: 200,
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const upperPart = style({
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    paddingBottom: '2rem',
    borderBottom: `1px solid ${vars.colors.black[7]}`
})

export const upperPartInfoContainer = style({
    padding: '2rem 3rem',
    borderLeft: `1px solid ${vars.colors.black[7]}`
})

export const upperPartInfoSubContainer = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    fontSize: 18,
    fontWeight: 'bold'
})

export const upperPartInfoText = style({
    fontWeight: '100'
})

export const lowerPart = style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '3rem',
    rowGap: '4rem',
    paddingTop: '1rem'
})

export const inputContainer = style({
})

export const inputSubContainer = style({
    position: 'relative',
})

export const textTitle = style({
    fontSize: 16,
    fontWeight: '100',
    paddingBottom: 10,
})

export const textInput = style({
    position: 'absolute',
    width: '100%',
})

export const buttonEdit = style({
    width: '10rem',
    marginTop: '5rem',
    fontWeight: 'bold',
    backgroundColor: vars.colors.black[2],
    right: 0
}) + ' ' + buttonDefault

export const buttonCancel = style({
    backgroundColor: vars.colors.red[2],
}) + ' ' + buttonEdit

export const buttonLogout = style({
    backgroundColor: vars.colors.black[2],
    right: 0
}) + ' ' + buttonDefault