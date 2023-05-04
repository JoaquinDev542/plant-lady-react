import { v4 as uuidv4 } from 'uuid'
import { createContext } from "react";

const bbdd = {
    header : [
        { id: uuidv4() , href : "#" , title : "Juices" },
        { id: uuidv4() , href : "#" , title : "Teas" },
        { id: uuidv4() , href : "#" , title : "Exilirs" },
        { id: uuidv4() , href : "#" , title : "Cleanses" },
        { id: uuidv4() , href : "#" , title : "Kits" },
        { id: uuidv4() , href : "#" , title : "Services" },
    ],

    main : {
        hero : {
            title : "Locally sourced in Atlanta, GA" ,
            paragraph : "Plant Lady Juice Co. sources product ingredients from our garden and network of Georgia farmers. In addition to our libations, we provide wellness services, including our singature Wholistics Consultation." , 
        },
        root : {
            title : "Deeply Rooted" , 
            paragraph : "Roots are the lifeline of plants. Roots absorb vital nutrients which nourish our bodies. In the same respect, Plant Lady Juice Co. Knows that staying deeply rooter harmonizes the journey to self-actualization." , 
        },
        delivery : {
            title : "Delivery Guideliness" ,
            paragraph : "We deliver throughout the metro-Atlanta area. Learn more about our local delivery locations and weekly schedule." ,
        },
    },

    products : [
        { id : uuidv4() , title : "Juice Sample Pack" , src : "./assets/products-juice.webp" },
        { id : uuidv4() , title : "Tea Sample Pack" , src : "./assets/products-tea.webp" },
    ],

    testimonials : [
        { id : uuidv4() , typeOfProduct : "Taste of Sunshine" , name : "M. Stoney" , quote : "Your juice is amazing! Cleared my sinuses, brightens my skins and gives me energy. It makes school better lol" , classNames : "First" },
        { id : uuidv4() , typeOfProduct : "Sorrel" , name : "J. Miles" , quote : "This tea is the bomb.com!! You gotta put me on the recipe!! Just what the doctor orderer." , classNames : "Second" },
        { id : uuidv4() , typeOfProduct : "Slim & Trim Cleanse" , name : "A. Bell" , quote : "i am intermittent fasting, from 8pm-12pm. These juices hold me down in the am. thank you so much!" , classNames : "Third" },
        { id : uuidv4() , typeOfProduct : "Herbal Coffee" , name : "J. Biggs" , quote : "I love this product because it majes me feel alert and invigorated without the caffeine jitters. It`s such a great way to start my day and its`s delicious!" , classNames : "Fourth" },
        { id : uuidv4() , typeOfProduct : "Cucumber Lemonade" , name : "T. Thompson" , quote : "You juiced it with love.. I dont`t know what you did it´s just so good! I can just feel the love, i`m serious!" , classNames : "Fifth" },
    ],

    aside : [
        { id : uuidv4() , title : "Guided by ancestral wisdom" , src : "./assets/guided.avif" , classNames : "First" },
        { id : uuidv4() , title : "Handcraft with love" , src : "./assets/handcrafted.avif" , classNames : "Second" },
        { id : uuidv4() , title : "Real ingredients & people" , src : "./assets/real.avif" , classNames : "Third" },
        { id : uuidv4() , title : "Locally sourced & proudly served" , src : "./assets/locally.avif" , classNames : "Fourth" },
    ],

    footer : [
        { id : uuidv4() , title : "About" , href : "#" },
        { id : uuidv4() , title : "Ordering and Delivery" , href : "#" },
        { id : uuidv4() , title : "FAQs" , href : "#" },
        { id : uuidv4() , title : "Contact" , href : "#" },
        { id : uuidv4() , title : "Privacy Policy" , href : "#" },
        { id : uuidv4() , title : "Cancellation & Refund Policy" , href : "#" },
        { id : uuidv4() , title : "Disclaimer" , href : "#" },
    ],

    titleContent : {
        juices : {
            h2 : "Juices",
            p  : "Our 16 oz juices are handcrafted to support hydration, immunity, proper digestion and more.",
        },
        teas : {
            h2 : "Teas",
            p  : "Our 16 oz herbal teas are infused with homegrown herbal blends that stimulate your senses and harmonize your day.",
        },
        exilirs : {
            h2 : "Exilirs",
            p  : "Our 4 oz elixirs are powerful tonics that ignite the wellness power within.",
        },
        cleanses : {
            h2 : "Cleanses",
            p  : "Our Deeply Rooted ™ cleanses were intentionally cultivated with you in mind. Pick your choice of a 1, 3, or 5 day cleanse!",
        },
        kits : {
            h2 : "Kits",
            p  : "Not sure which libation to try first? Then try all of them!",
        },
        services : {
            h2 : "Services",
            p  : "Want to have us take an in-depth look at what your body is saying? Want to offer Plant Lady Juice Co. products at your event? Or, want to place an order of 12 or more of the same product? We can help.",
        },
        collections : {
            h2 : "All Products",
            p  : "Our juices, teas, and elixirs are made with love, and with ancestral wisdom, to care for your mind, body, and spirit.",
        },
    },
}

export const GlobalContext = createContext()
export const Provider = ({ children }) => {
    return (
      <GlobalContext.Provider value={ bbdd }>
          { children }
      </GlobalContext.Provider>
    );
  };
  