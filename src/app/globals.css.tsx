import { globalStyle, style, } from '@vanilla-extract/css';

globalStyle('a', {
    textDecoration: 'none',
    color: '#000000',
})

export const buttonDefault = style({
    padding: '0.5rem 2rem',
    fontSize: 16,
    fontWeight: 500,
});