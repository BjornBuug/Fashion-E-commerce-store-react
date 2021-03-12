import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
    
//Each Array [] has an object {} (page and links)
const sublinks = [
    {
        page: 'About',
        links: [
            {label : 'payment', icon: "", url: '/products'},
            {label : 'Our story', icon: "", url: '/products'},
            {label : 'connect', icon: "", url: '/products'},
        ],
    },

    {
        page :'Catalog', 
        links: [
            {label : 'Pants', icon: "", url: '/products'},
            {label : 'Shoes', icon: "", url: '/products'},
            
        ],
    },

    {
        page :'Contact',
        links: [
            {label: 'about', icon: "", url:'/products'},
            {label:'customers', icon: "", url:'/products' },

        ],
    },

    {
        page :'Cart',
        links: [
            

        ],
    },

];

export default sublinks;
