//! == Import : local (actions)

//! == Initial state
export const initialState = {
    presentation: [
        'En face du musée d’Aquitaine, Messieurs Croquent a ouvert au printemps 2017. Ici, ce sont des produits locaux et de qualité qui se retrouvent dans ces sandwichs définitivement symbole de la Street Food à la française.',
        'Chez Messieurs Croquent, les produits industriels sont bannis au profit du fait maison.',
        'Alors n’attendez plus, venez croquer, savourer et partager.'
    ],
    imagePresentation: [
        {
            id: 1,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMXPXqvOMEmHNA1iUTtiIJBwykWQMnleGfVw&usqp=CAU',
            alt: 'restaurant'
        }
    ],
};

//! == Actions to modified state
const home = (state = initialState, action = {}) => {
    return state;
};

export default home;