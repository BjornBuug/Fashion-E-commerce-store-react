import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
    
//Each Array [] has an object {} (page and links)
const sublinks = [
    {
        page: 'About',
        links: [
            {label : 'payment', icon : <FaCreditCard/>, url: '/products'},
            {label : 'terminal', icon : <FaCreditCard/>, url: '/products'},
            {label : 'connect', icon : <FaCreditCard/>, url: '/products'},
        ],
    },

    {
        page :'Catalog', 
        links: [
            {label : 'plugins', icon: <FaBook/>, url: '/products'},
            {label : 'libraries', icon: <FaBook/>, url: '/products'},
            {label : 'help', icon: <FaBook/>, url: '/products'},
            {label : 'billings', icon: <FaBook/>, url: '/products'},
        ],
    },

    {
        page :'Contact',
        links: [
            {label: 'about', icon: <FaBriefcase/>, url:'/products'},
            {label:'customers', icon: <FaBriefcase/>, url:'/products' },

        ],
    },

];

export default sublinks;
