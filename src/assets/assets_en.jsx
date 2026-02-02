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

export const LinksRoute_en = [
    { text: "Home", route: "" },
    { text: "About", route: "about" },
    { text: "Menu", route: "menu" },
    { text: "Features", route: "feature" },
];

export const Burgers_en = [
    {
        id: 1,
        name: "Silver Beach",
        description:
            "CLASSIC: Brioche bun, toasted jalapeño mayo, pickled red onion, 100% Finnish beef patty, cheddar cheese, iceberg lettuce, ketchup<br>SMASH: Bun, toasted jalapeño mayo, pickled red onion, two 100% Finnish beef smash patties, American cheese, iceberg lettuce, ketchup",
        price: "13,90 €",
        image: burger_1,
        category: "lounasburger",
    },
    {
        id: 2,
        name: "Mill Basin",
        description:
            "Bun, truffle mayo, arugula, 100% Finnish beef patty, Emmental cheese, caramelized onion, mushrooms, Dijon mustard",
        price: "13,50 €",
        image: burger_2,
        category: "kausiburger",
    },
    {
        id: 3,
        name: "Bronx",
        description:
            "Brioche bun, Bronx mayo, pickled red onion, cheddar cheese, ketchup. Choice of beef or vegan patty. Gluten-free bun available",
        price: "11,90 €",
        image: burger_3,
        category: "classics",
    },
    {
        id: 4,
        name: "Brooklyn Habanero",
        description:
            "Brioche bun, habanero mayo, pickled red onion, iceberg lettuce, tomato, cheddar cheese, habanero ketchup. Choice of beef or vegan patty. Gluten-free bun available",
        price: "13,50 €",
        image: burger_4,
        category: "classics",
    },
    {
        id: 5,
        name: "Harlem Bacon",
        description:
            "Brioche bun, bacon mayo, pickled green tomato, bacon, cheddar cheese, ketchup. Gluten-free bun available",
        price: "13,50 €",
        image: burger_5,
        category: "classics",
    },
    {
        id: 6,
        name: "Wallstreet",
        description:
            "Brioche bun, Wall Street mayo, pickled red onion, iceberg lettuce, air-dried ham, cheddar cheese, ketchup. Gluten-free bun available",
        price: "13,50 €",
        image: burger_6,
        category: "classics",
    },
    {
        id: 7,
        name: "Oakwood",
        description:
            "Brioche bun, smoky chipotle BBQ mayo, caramelized onion, iceberg lettuce, beef patty, cheddar cheese, bacon, Coca-Cola ketchup. Gluten-free bun available",
        price: "13,90 €",
        image: burger_7,
        category: "classics",
    },
    {
        id: 8,
        name: "Crispy Chicken",
        description:
            "Brioche bun, sour cream mayo, pickled red onion, tomato, iceberg lettuce, crispy chicken fillet",
        price: "12,50 €",
        image: burger_8,
        category: "specials",
    },
    {
        id: 9,
        name: "Chicken Madison",
        description:
            "Martin’s bun, garlic parmesan mayo, caramelized onion, crispy chicken patty, tomato, iceberg lettuce",
        price: "12,50 €",
        image: burger_9,
        category: "specials",
    },
    {
        id: 10,
        name: "Ketoburger",
        description:
            "Keto bun, smoky chipotle parmesan mayo, beef patty, bacon, cheddar cheese, tomato, iceberg lettuce",
        price: "13,50 €",
        image: burger_10,
        category: "specials",
    },
    {
        id: 11,
        name: "Ketoburger Smash",
        description:
            "Keto bun, smoky chipotle parmesan mayo, two beef patties, bacon, cheddar cheese, tomato, iceberg lettuce",
        price: "13,50 €",
        image: burger_11,
        category: "specials",
    },
    {
        id: 12,
        name: "Bronx Jr.",
        description:
            "Brioche bun, cheddar cheese, ketchup, Finnish beef patty",
        price: "6,60 €",
        image: burger_12,
        category: "specials",
    },
    {
        id: 13,
        name: "Brooklyn Habanero Smash",
        description:
            "Bun, habanero mayo, pickled red onion, iceberg lettuce, tomato, cheddar cheese, habanero ketchup, two beef patties",
        price: "13,50 €",
        image: burger_13,
        category: "smash",
    },
    {
        id: 14,
        name: "Harlem Bacon Smash",
        description:
            "Bun, bacon mayo, pickled green tomato, bacon, cheddar cheese, ketchup, two beef patties. Gluten-free bun available",
        price: "13,50 €",
        image: burger_14,
        category: "smash",
    },
    {
        id: 15,
        name: "Oakwood Smash",
        description:
            "Bun, smoky chipotle BBQ mayo, caramelized onion, iceberg lettuce, two beef patties, cheddar cheese, bacon, Coca-Cola ketchup",
        price: "13,90 €",
        image: burger_15,
        category: "smash",
    },
    {
        id: 16,
        name: "Bronx Smash",
        description:
            "Bun, Bronx mayo, pickled red onion, two beef patties, American cheese, ketchup. Gluten-free bun available",
        price: "13,90 €",
        image: burger_16,
        category: "smash",
    },
    {
        id: 17,
        name: "Vegan Crispy NoChicken",
        description:
            "Vegan bun, basil mayo, tomato, pickled red onion, iceberg lettuce, vegan NoChicken patty",
        price: "12,50 €",
        image: burger_17,
        category: "vegan",
    },
    {
        id: 18,
        name: "Vegan Bronx",
        description:
            "Brioche bun, Bronx mayo, pickled red onion, vegan cheddar, ketchup, two bean patties",
        price: "11,90 €",
        image: burger_18,
        category: "vegan",
    },
    {
        id: 19,
        name: "Vegan Brooklyn Habanero",
        description:
            "Brioche bun, habanero mayo, pickled red onion, iceberg lettuce, tomato, vegan cheddar, habanero ketchup, two bean patties",
        price: "13,50 €",
        image: burger_19,
        category: "vegan",
    },
    {
        id: 20,
        name: "Vegan NoChicken Bites",
        description:
            "6 vegan NoChicken bites, choose your dip",
        price: "13,90 €",
        image: burger_20,
        category: "sides",
    },
    {
        id: 21,
        name: "Chicken Bites",
        description:
            "3 chicken bites (also available in 6 or 10 pcs), choose your dip. Coating contains gluten",
        price: "13,90 €",
        image: burger_21,
        category: "sides",
    },
    {
        id: 22,
        name: "Fries",
        description: "French fries",
        price: "13,90 €",
        image: burger_22,
        category: "sides",
    },
    {
        id: 23,
        name: "Parmesan Fries",
        description: "French fries with parmesan",
        price: "13,90 €",
        image: burger_23,
        category: "sides",
    },
    {
        id: 24,
        name: "Loaded Fries",
        description:
            "French fries, chorizo, rosemary-garlic mayo, lime mayo, coriander",
        price: "5,50 €",
        image: burger_24,
        category: "sides",
    },
    {
        id: 25,
        name: "Animal Style Fries",
        description:
            "French fries, lime-pickled jalapeño, smoky BBQ mayo, pickled zucchini seeds, cheddar sauce, parsley",
        price: "5,50 €",
        image: burger_25,
        category: "sides",
    },
    {
        id: 26,
        name: "Chili Fries",
        description:
            "French fries, chili salt, habanero mayo, extra chili, habanero ketchup, lime-pickled jalapeño",
        price: "5,50 €",
        image: burger_26,
        category: "sides",
    },
    {
        id: 27,
        name: "Greenside",
        description:
            "Grilled romaine lettuce, honey vinaigrette, roasted pumpkin seeds, flake salt",
        price: "3,90 €",
        image: burger_27,
        category: "sides",
    },
    {
        id: 28,
        name: "Loaded Greenside",
        description:
            "Grilled romaine lettuce, honey vinaigrette, pumpkin seeds, roasted almond crumble, Aura blue cheese, lime mayo, flake salt",
        price: "5,50 €",
        image: burger_28,
        category: "sides",
    },
    {
        id: 29,
        name: "Halloumi Fingers",
        description:
            "5 halloumi sticks, choose your dip",
        price: "5,50 €",
        image: burger_29,
        category: "sides",
    },
    {
        id: 30,
        name: "Bronx Mayo",
        description: "Mayonnaise",
        price: "1,90 €",
        image: burger_30,
        category: "mayos",
    },
    {
        id: 31,
        name: "Aura Blue Cheese Mayo",
        description: "Blue cheese mayonnaise",
        price: "1,90 €",
        image: burger_31,
        category: "mayos",
    },
    {
        id: 32,
        name: "Basil Mayo",
        description: "Basil mayonnaise",
        price: "1,90 €",
        image: burger_32,
        category: "mayos",
    },
    {
        id: 33,
        name: "Habanero Mayo",
        description: "Habanero mayonnaise",
        price: "1,90 €",
        image: burger_33,
        category: "mayos",
    },
    {
        id: 34,
        name: "Smoked BBQ Mayo",
        description: "Smoked BBQ mayonnaise",
        price: "1,90 €",
        image: burger_34,
        category: "mayos",
    },
    {
        id: 35,
        name: "Rosemary Garlic Mayo",
        description: "Rosemary garlic mayonnaise",
        price: "1,90 €",
        image: burger_35,
        category: "mayos",
    },
    {
        id: 36,
        name: "Lime Mayo",
        description: "Lime mayonnaise",
        price: "1,90 €",
        image: burger_36,
        category: "mayos",
    },
    {
        id: 37,
        name: "Truffle Mayo",
        description: "Truffle mayonnaise",
        price: "1,90 €",
        image: burger_37,
        category: "mayos",
    },
    {
        id: 38,
        name: "Garlic Parmesan Mayo",
        description: "Garlic parmesan mayonnaise",
        price: "1,90 €",
        image: burger_38,
        category: "mayos",
    },
    {
        id: 39,
        name: "Coca-Cola 0.33l",
        description: "Soft drink",
        price: "3,90 €",
        image: burger_39,
        category: "drinks",
    },
    {
        id: 40,
        name: "Coca-Cola Zero 0.33l",
        description: "Sugar-free soft drink",
        price: "1,90 €",
        image: burger_40,
        category: "drinks",
    },
    {
        id: 41,
        name: "Fanta 0.33l",
        description: "Soft drink",
        price: "1,90 €",
        image: burger_41,
        category: "drinks",
    },
    {
        id: 42,
        name: "Apple Juice 0.2l",
        description: "Apple juice",
        price: "2,00 €",
        image: burger_42,
        category: "drinks",
    },
    {
        id: 43,
        name: "Grape Juice 0.2l",
        description: "Grape juice",
        price: "2,00 €",
        image: burger_43,
        category: "drinks",
    },
];


export const Features_en = [
    {
        icon: '🍔',
        head: 'Fresh Ingredients',
        content: '100% fresh meat and daily baked buns.'
    },
    {
        icon: '🔥',
        head: 'Perfect Grilling',
        content: 'Cooked to perfection by our expert chefs.'
    },
    {
        icon: '🚀',
        head: 'Fast Delivery',
        content: 'Hot and fresh at your door in no time.'
    },
    {
        icon: '💰',
        head: 'Best Price',
        content: 'Premium quality at affordable prices.'
    }
];
