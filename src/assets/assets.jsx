
import logo_image from './Logo.png'
import Average_image from './Average.webp'
import cooked_image from './cooked.webp'
import Light from './lightbulb.png'
import burger_1 from './Burger1.png';
import burger_2 from './Burger2.jpg';
import burger_3 from './Burger3.jpg';
import burger_4 from './Burger4.jpg';
import burger_5 from './Burger5.jpg';
import burger_6 from './Burger6.jpg';
import burger_7 from './Burger7.jpg';
import burger_8 from './Burger8.jpg';
import burger_9 from './Burger9.jpg';
import burger_10 from './Burger10.jpg';
import burger_11 from './Burger11.jpg';
import burger_12 from './Burger12.jpg';
import burger_13 from './Burger13.jpg';
import burger_14 from './Burger14.jpg';
import burger_15 from './Burger15.jpg';
import burger_16 from './Burger16.jpg';
import burger_17 from './Burger17.jpg';
import burger_18 from './Burger18.jpg';
import burger_19 from './Burger19.jpg';
import burger_20 from './Burger20.webp';
import burger_21 from './Burger21.jpg';
import burger_22 from './Burger22.webp';
import burger_23 from './Burger23.webp';
import burger_24 from './Burger24.webp';
import burger_25 from './Burger25.webp';
import burger_26 from './Burger26.webp';
import burger_27 from './Burger27.webp';
import burger_28 from './Burger28.webp';
import burger_29 from './Burger29.webp';
import burger_30 from './Burger30.webp';
import burger_31 from './Burger31.webp';
import burger_32 from './Burger32.webp';
import burger_33 from './Burger33.webp';
import burger_34 from './Burger34.webp';
import burger_35 from './Burger35.webp';
import burger_36 from './Burger36.webp';
import burger_37 from './Burger37.webp';
import burger_38 from './Burger38.webp';
import burger_39 from './Burger39.jpg';
import burger_40 from './Burger40.jpg';
import burger_41 from './Burger41.jpg';
import burger_42 from './Burger42.webp';
import burger_43 from './Burger43.webp';

import Hero_video from './hero_video.mp4';
import Hero_2 from './hero2.jfif'
import Hero_3 from './hero3.jfif'
import Hero_4 from './hero4.jfif'
import Hero_5 from './hero5.jfif'

export const assets = {
    logo_image, Average_image, cooked_image, Light, Hero_2, Hero_3, Hero_4, Hero_5, Hero_video
}

export const LinksRoute = [
    { text: "Koti", route: "" },
    { text: "Tietoa", route: "about" },
    { text: "Menu", route: "menu" },
    { text: "Ominaisuudet", route: "feature" },
];

export const Features = [
    {
        icon: '🍔',
        head: 'Tuoreet Raaka-aineet',
        content: '100% tuore liha ja päivittäin leivotut sämpylät.'
    },
    {
        icon: '🔥',
        head: 'Täydellinen Paisto',
        content: 'Kokit paistavat täydellisyyteen asiantuntemuksellaan.'
    },
    {
        icon: '🚀',
        head: 'Nopea Toimitus',
        content: 'Kuuma ja tuore suoraan ovelle hetkessä.'
    },
    {
        icon: '💰',
        head: 'Paras Hinta',
        content: 'Premium-laatua edullisesti.'
    }
];




export const Burgers = [
    {
        id: 1,
        name: "Silver Beach",
        description:
            "CLASSIC: Briossisämpylä, paahdettu jalapenomajoneesi, pikkelöity punasipuli, 100 % suomalainen naudanlihapihvi, cheddarjuusto, amerikansalaatti, ketsuppi<br>SMASH: Sämpylä, paahdettu jalapenomajoneesi, pikkelöity punasipuli, kaksi 100 % suomalaista naudanliha smash-pihviä, amerikanjuusto, amerikansalaatti, ketsuppi",
        price: "13,90 €",
        image: burger_1,
        category: "lounasburger",
    },
    {
        id: 2,
        name: "Mill Basin",
        description:
            "Sämpylä, tryffelimajoneesi, rucola, 100 % suomalainen naudanlihapihvi, emmentaljuusto, karamellisoitu sipuli, herkkusienet, dijon-sinappi",
        price: "13,50 €",
        image: burger_2,
        category: "kausiburger",
    },
    {
        id: 3,
        name: "Bronx",
        description:
            "Briossisämpylä, Bronx-majoneesi, pikkelöity punasipuli, cheddarjuusto, ketsuppi. Valittavissa liha- tai vegaanipihvi. Saatavana gluteenittomalla sämpylällä",
        price: "11,90 €",
        image: burger_3,
        category: "classics",
    },
    {
        id: 4,
        name: "Brooklyn Habanero",
        description:
            "Briossisämpylä, habaneromajoneesi, pikkelöity punasipuli, amerikansalaatti, tomaatti, cheddarjuusto, habaneroketsuppi. Valittavissa liha- tai vegaanipihvi. Saatavana gluteenittomalla sämpylällä",
        price: "13,50 €",
        image: burger_4,
        category: "classics",
    },
    {
        id: 5,
        name: "Harlem Bacon",
        description:
            "Briossisämpylä, pekonimajoneesi, pikkelöity vihreä tomaatti, pekoni, cheddarjuusto, ketsuppi. Valittavissa gluteenittomalla sämpylällä",
        price: "13,50 €",
        image: burger_5,
        category: "classics",
    },
    {
        id: 6,
        name: "Wallstreet",
        description:
            "Briossisämpylä, Wall Street -majoneesi, pikkelöity punasipuli, jääsalaatti, ilmakuivattu kinkku, cheddarjuusto, ketsuppi. Valittavissa gluteenittomalla sämpylällä",
        price: "13,50 €",
        image: burger_6,
        category: "classics",
    },
    {
        id: 7,
        name: "Oakwood",
        description:
            "Briossisämpylä, savuchipotle-BBQ-majoneesi, karamellisoitu sipuli, amerikansalaatti, naudanlihapihvi, cheddarjuusto, pekoni, Coca-Cola-ketsuppi. Saatavana gluteenittomalla sämpylällä",
        price: "13,90 €",
        image: burger_7,
        category: "classics",
    },
    {
        id: 8,
        name: "Crispy Chicken",
        description:
            "Briossisämpylä, sour cream -majoneesi, pikkelöity punasipuli, tomaatti, amerikansalaatti, rapea kanafileepihvi",
        price: "12,50 €",
        image: burger_8,
        category: "specials",
    },
    {
        id: 9,
        name: "Chicken Madison",
        description:
            "Martin’s-sämpylä, valkosipuli-parmesaanimajoneesi, karamellisoitu sipuli, rapea kanapihvi, tomaatti, jääsalaatti",
        price: "12,50 €",
        image: burger_9,
        category: "specials",
    },
    {
        id: 10,
        name: "Ketoburger",
        description:
            "Ketosämpylä, savuchipotle-parmesaanimajoneesi, naudanlihapihvi, pekoni, cheddarjuusto, tomaatti, jääsalaatti",
        price: "13,50 €",
        image: burger_10,
        category: "specials",
    },
    {
        id: 11,
        name: "Ketoburger Smash",
        description:
            "Ketosämpylä, savuchipotle-parmesaanimajoneesi, kaksi naudanlihapihviä, pekoni, cheddarjuusto, tomaatti, jääsalaatti",
        price: "13,50 €",
        image: burger_11,
        category: "specials",
    },
    {
        id: 12,
        name: "Bronx jr.",
        description:
            "Briossisämpylä, cheddarjuusto, ketsuppi, suomalainen naudanlihapihvi",
        price: "6,60 €",
        image: burger_12,
        category: "specials",
    },
    {
        id: 13,
        name: "Brooklyn Habanero Smash",
        description:
            "Sämpylä, habaneromajoneesi, pikkelöity punasipuli, amerikansalaatti, tomaatti, cheddarjuusto, habaneroketsuppi, kaksi naudanlihapihviä",
        price: "13,50 €",
        image: burger_13,
        category: "smash",
    },
    {
        id: 14,
        name: "Harlem Bacon Smash",
        description:
            "Sämpylä, pekonimajoneesi, pikkelöity vihreä tomaatti, pekoni, cheddarjuusto, ketsuppi, kaksi naudanlihapihviä. Saatavana gluteenittomalla sämpylällä",
        price: "13,50 €",
        image: burger_14,
        category: "smash",
    },
    {
        id: 15,
        name: "Oakwood Smash",
        description:
            "Sämpylä, savuchipotle-BBQ-majoneesi, karamellisoitu sipuli, amerikansalaatti, kaksi naudanlihapihviä, cheddarjuusto, pekoni, Coca-Cola-ketsuppi",
        price: "13,90 €",
        image: burger_15,
        category: "smash",
    },
    {
        id: 16,
        name: "Bronx Smash",
        description:
            "Sämpylä, Bronx-majoneesi, pikkelöity punasipuli, kaksi naudanlihapihviä, amerikanjuusto, ketsuppi. Saatavana gluteenittomalla sämpylällä",
        price: "13,90 €",
        image: burger_16,
        category: "smash",
    },
    {
        id: 17,
        name: "Vegan Crispy NoChicken",
        description:
            "Vegaaninen sämpylä, basilikamajoneesi, tomaatti, pikkelöity punasipuli, jääsalaatti, vegaaninen NoChicken-pihvi",
        price: "12,50 €",
        image: burger_17,
        category: "vegan",
    },
    {
        id: 18,
        name: "Vegan Bronx",
        description:
            "Briossisämpylä, Bronx-majoneesi, pikkelöity punasipuli, cheddarjuusto, ketsuppi, kaksi papupihviä",
        price: "11,90 €",
        image: burger_18,
        category: "vegan",
    },
    {
        id: 19,
        name: "Vegan Brooklyn Habanero",
        description:
            "Briossisämpylä, habaneromajoneesi, pikkelöity punasipuli, amerikansalaatti, tomaatti, cheddarjuusto, habaneroketsuppi, kaksi papupihviä",
        price: "13,50 €",
        image: burger_19,
        category: "vegan",
    },
    {
        id: 20,
        name: "Vegan NoChicken Bites",
        description:
            "6 vegaanista NoChicken-palaa, valitse dippi",
        price: "13,90 €",
        image: burger_20,
        category: "sides",
    },
    {
        id: 21,
        name: "Chicken Bites",
        description:
            "3 kanapalaa (saatavana myös 6 tai 10 kpl), valitse dippi. Kuorrute sisältää gluteenia",
        price: "13,90 €",
        image: burger_21,
        category: "sides",
    },
    {
        id: 22,
        name: "Fries",
        description: "Ranskalaiset perunat",
        price: "13,90 €",
        image: burger_22,
        category: "sides",
    },
    {
        id: 23,
        name: "Parmesan Fries",
        description: "Ranskalaiset perunat, parmesaani",
        price: "13,90 €",
        image: burger_23,
        category: "sides",
    },
    {
        id: 24,
        name: "Loaded Fries",
        description:
            "Ranskalaiset perunat, chorizo, rosmariini-valkosipulimajoneesi, limemajoneesi, korianteri",
        price: "5,50 €",
        image: burger_24,
        category: "sides",
    },
    {
        id: 25,
        name: "Animal Style Fries",
        description:
            "Ranskalaiset perunat, limepikkelöity jalapeno, savu-BBQ-majoneesi, pikkelöidyt kesäkurpitsansiemenet, cheddarkastike, persilja",
        price: "5,50 €",
        image: burger_25,
        category: "sides",
    },
    {
        id: 26,
        name: "Chili Fries",
        description:
            "Ranskalaiset perunat, chilisuola, habaneromajoneesi, extra chili, habaneroketsuppi, limepikkelöity jalapeno",
        price: "5,50 €",
        image: burger_26,
        category: "sides",
    },
    {
        id: 27,
        name: "Greenside",
        description:
            "Grillattu sydänsalaatti, hunajavinaigrette, paahdetut kurpitsansiemenet, sormisuola",
        price: "3,90 €",
        image: burger_27,
        category: "sides",
    },
    {
        id: 28,
        name: "Loaded Greenside",
        description:
            "Grillattu sydänsalaatti, hunajavinaigrette, kurpitsansiemenet, mantelirouhe, Aura-sinihomejuusto, limemajoneesi, sormisuola",
        price: "5,50 €",
        image: burger_28,
        category: "sides",
    },
    {
        id: 29,
        name: "Halloum Fingers",
        description:
            "5 halloumitikkua, valitse dippi",
        price: "5,50 €",
        image: burger_29,
        category: "sides",
    },
    {
        id: 30,
        name: "Bronx majoneesi",
        description: "Majoneesi",
        price: "1,90 €",
        image: burger_30,
        category: "mayos",
    },
    {
        id: 31,
        name: "Aura-sinihomejuustomajoneesi",
        description: "Sinihomejuustomajoneesi",
        price: "1,90 €",
        image: burger_31,
        category: "mayos",
    },
    {
        id: 32,
        name: "Basilikamajoneesi",
        description: "Basilikamajoneesi",
        price: "1,90 €",
        image: burger_32,
        category: "mayos",
    },
    {
        id: 33,
        name: "Habanero",
        description: "Habaneromajoneesi",
        price: "1,90 €",
        image: burger_33,
        category: "mayos",
    },
    {
        id: 34,
        name: "Savu BBQ",
        description: "Savustettu BBQ-majoneesi",
        price: "1,90 €",
        image: burger_34,
        category: "mayos",
    },
    {
        id: 35,
        name: "Rosmariinivalkosipuli",
        description: "Rosmariini-valkosipulimajoneesi",
        price: "1,90 €",
        image: burger_35,
        category: "mayos",
    },
    {
        id: 36,
        name: "Lime",
        description: "Limemajoneesi",
        price: "1,90 €",
        image: burger_36,
        category: "mayos",
    },
    {
        id: 37,
        name: "Tryffeli",
        description: "Tryffelimajoneesi",
        price: "1,90 €",
        image: burger_37,
        category: "mayos",
    },
    {
        id: 38,
        name: "Valkosipuliparmesaani",
        description: "Valkosipuli-parmesaanimajoneesi",
        price: "1,90 €",
        image: burger_38,
        category: "mayos",
    },
    {
        id: 39,
        name: "Coca-Cola 0,33l",
        description: "Virvoitusjuoma",
        price: "3,90 €",
        image: burger_39,
        category: "drinks",
    },
    {
        id: 40,
        name: "Coca-Cola Zero 0,33l",
        description: "Virvoitusjuoma, sokeriton",
        price: "1,90 €",
        image: burger_40,
        category: "drinks",
    },
    {
        id: 41,
        name: "Fanta 0,33l",
        description: "Virvoitusjuoma",
        price: "1,90 €",
        image: burger_41,
        category: "drinks",
    },
    {
        id: 42,
        name: "Pillimehu omena 0,2l",
        description: "Omenamehu",
        price: "2,00 €",
        image: burger_42,
        category: "drinks",
    },
    {
        id: 43,
        name: "Pillimehu rypäle 0,2l",
        description: "Rypälemehu",
        price: "2,00 €",
        image: burger_43,
        category: "drinks",
    }

];


export const Offers = [
    {
        head: 'Buy 1 Get 1 Free',
        content: 'Every Friday on all classic burgers.'
    }, {
        head: 'Free Fries',
        content: 'With any combo order for a limited time.'
    }, {
        head: 'Combo Deals',
        content: 'Save more with our special burger combos.'
    }
]