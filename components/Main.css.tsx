import { style } from '@vanilla-extract/css';
import { vars } from '../theme';

export const imageSections = style({
    width: '100%',
    height: 680,
    backgroundImage: "url('/landing/livingroom.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
})

export const body = style({
    width: '90vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: vars.colors.white[0],
    marginTop: '38rem',
    borderRadius: '20px 20px 0 0',
    padding: '1rem 0',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
})

export const subBody = style({
    padding: '0 2rem',
})

export const title = style({
    fontSize: 26,
    fontWeight: 570,
    color: vars.colors.black[0],
    marginBottom: '2rem'
})

export const buttonCat = style({
    padding: '0.5rem 1.5rem',
    fontSize: 16,
    fontWeight: 500,
})
