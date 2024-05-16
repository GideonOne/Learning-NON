import { style } from '@vanilla-extract/css';
import { vars } from '../theme';

export const footer = style({
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: vars.colors.black[1],
    color: vars.colors.white[0],
    zIndex: 100,
})

export const container = style({
    padding: '2rem',
})

export const addressTitle = style({
    fontSize: 20
})

export const block_1 = style({
    padding: '1rem 3rem 10rem 1rem',
    borderRight: '1px solid',
})

export const block_2 = style({
    flexGrow: 1,
    padding: '0 2rem'
})

export const block_3 = style({
    display: 'flex',
    flexDirection: 'column',
})

export const footerLink = style({
    color: vars.colors.white[0],
    marginBottom: 30,
    marginLeft: '5rem'
})

export const copyRight = style({
    backgroundColor: vars.colors.black[0],
    color: vars.colors.white[0],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.7rem',
})

