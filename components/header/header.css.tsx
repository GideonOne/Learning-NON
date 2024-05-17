import { style } from '@vanilla-extract/css';
import { vars } from '../../theme';
import { buttonDefault } from '@/app/globals.css';

export const header = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.2rem 0',
    backgroundColor: vars.colors.white[0],
    color: vars.colors.black[0],
    borderRadius: '0 0 20px 20px',
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: "90vw",
    zIndex: 20,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const body = style({
    width: "100%",
    padding: '0 2rem',
})

export const titleMain = style({
    fontSize: 32,
    fontWeight: 530,
})

export const titleSub = style({
    fontSize: 32,
    fontWeight: 700,
    color: vars.colors.red[1]
})

export const buttonLogin = style({
    padding: '0.5rem 3rem',
    color: vars.colors.white[0],
    backgroundColor: vars.colors.black[0],
}) + ' ' + buttonDefault

export const navItems = style({
    display: 'flex',
    justifyContent: 'space-between',
});