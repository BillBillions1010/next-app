import { 
    Inter, 
    Lusitana,
    Lobster_Two,
    Libre_Baskerville,
    Graduate,
    Six_Caps,
 } from 'next/font/google';

export const inter = Inter({ 
    subsets: ['latin'],
    weight: ['400', '700'],

});

export const lusitana = Lusitana({
    subsets: ['latin'], 
    weight: ['400', '700'],
    style: ['normal'],
});

export const lobstertwo = Lobster_Two({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});

export const baskerville = Libre_Baskerville({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});

export const graduate = Graduate({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
});

export const sixcaps = Six_Caps({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
});