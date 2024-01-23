import { 
    Inter, 
    Lusitana,
    Lobster_Two,
    Libre_Baskerville,
    Graduate,
    Six_Caps,
    Special_Elite,
    Smokum,
    Alfa_Slab_One,
 } from 'next/font/google';



export const inter = Inter({ 
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--inter-font',

});

export const lusitana = Lusitana({
    subsets: ['latin'], 
    weight: ['400', '700'],
    style: ['normal'],
    display: 'swap',
    variable: "--lustiana-font",
});

export const lobstertwo = Lobster_Two({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: "--lustiana-font",
});
 
export const baskerville = Libre_Baskerville({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: "--baskerville-font",
});

export const graduate = Graduate({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap',
    variable: "--graduate-font",
});

export const sixcaps = Six_Caps({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap',
    variable: "--sixcaps-font",
});

export const specialelite = Special_Elite({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap',
    variable: "--specialelite-font",
});

export const smokum = Smokum({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap',
    variable: "--smokum-font",
});

export const alphaslabone = Alfa_Slab_One({
    subsets: ['latin', 'latin-ext', 'vietnamese'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap',
    variable: "--alphaslabone-font",
});

