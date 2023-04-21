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
}

export const GlobalContext = createContext()
export const Provider = ({ children }) => {
    return (
      <GlobalContext.Provider value={ bbdd }>
          { children }
      </GlobalContext.Provider>
    );
  };
  