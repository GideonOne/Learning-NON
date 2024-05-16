import { globalStyle } from '@vanilla-extract/css';

globalStyle('a:link, a:visited,  a:hover, a:active', {
    textDecoration: 'none',
    color: '#000000',
})

// globalStyle('p', {
//     fontSize: 16,
// })