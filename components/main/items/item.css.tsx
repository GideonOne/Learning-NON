import { style } from '@vanilla-extract/css';
import { vars } from '../../../theme'
import { buttonDefault } from '@/app/globals.css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3rem',
    width: 350,
    position: 'relative',
})

export const upperPart = style({
    width: 350,
    height: 250,
    backgroundColor: vars.colors.white[1],
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
})

export const lowerPart = style({
    padding: '0.5rem 1.2rem',
})

export const cover = style({
    width: 'auto',
    height: 150,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
})

export const tag = style({
    position: 'absolute',
    backgroundColor: vars.colors.white[0],
    borderWidth: 1,
    border: `0.5px solid ${vars.colors.black[7]}`,
    padding: '1px 20px',
    borderRadius: 20,
    zIndex: 1,
    top: 10,
    right: 10
})

export const title = style({
    fontSize: 24,
    fontWeight: 500,
    color: vars.colors.black[0],
})

export const remaining = style({
    color: vars.colors.black[7]
})

export const buttonContainer = style({
    padding: '1rem 1.2rem 0'
})

export const buttonCart = style({
    backgroundColor: vars.colors.white[1],
    color: vars.colors.black[0]
}) + ' ' + buttonDefault;

export const buttonBuy = style({
    backgroundColor: vars.colors.black[2],
    color: vars.colors.white[0],
    width: '100%',
}) + ' ' + buttonDefault;
