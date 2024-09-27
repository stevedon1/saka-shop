import choco3pack from '../assets/choco 3 pack.jpg'
import chocobigandsmall from '../assets/choco big and small.jpg'
import choco500ml from '../assets/chocolate 500ml.jpg'
import cooker from '../assets/cooker.jpg'
import bed from '../assets/double decker bed.jpg'
import iphone from '../assets/iphone 15.jpeg'
import android from '../assets/phone android.jpeg'
import sofa from '../assets/sofa.jpeg'
import tv from '../assets/tv.jpeg'
import woofer from '../assets/woofer.jpeg'
// importing react icons
import {FaComment, FaUser, FaUsers, FaHome, FaBuilding} from 'react-icons/fa'

export const categories = [
    {
        title: "Electronics",
        link:""
    },
    {
        title: "Furniture",
        link:""
    },
    {
        title: "Fashion & Clothing",
        link:""
    },
    {
        title: "Health & Beauty",
        link:""
    },
    {
        title: "Baby & Kids",
        link:""
    },
    {
        title: "Tools  Appliances",
        link:""
    },
    {
        title: "Automotives & Parts",
        link:""
    },
]
export const products = [
    {
        id: 1,
        image: choco3pack,
        price: 250,
        description: "Three package yoghurts"
    },
    {
        id: 2,
        image: tv,
        price: 50000,
        description: "Samsung smart TV"
    },
    {
        id: 3,
        image: iphone,
        price: 110000,
        description: "Latest Iphone 15 pro max"
    },
    {
        id: 4,
        image: choco500ml,
        price: 120,
        description: "500ml Chocolate flavour"
    },
    {
        id: 5,
        image: sofa,
        price: 17000,
        description: "2-seater sofa, fancy"
    },
    {
        id: 6,
        image: chocobigandsmall,
        price: 180,
        description: "250ml and 500ml chocolate flavour"
    },
    {
        id: 7,
        image: android,
        price: 35000,
        description: "Latest Oppo A27 phone"
    },
    {
        id: 8,
        image: woofer,
        price: 6500,
        description: "Woofer 5.1 sonny model"
    },
    {
        id: 9,
        image: cooker,
        price: 11000,
        description: "Mini Cooker "
    },
    {
        id: 10,
        image: bed,
        price: 8500,
        description: "Double decker bed "
    },
]
export const navLinksandIcons = [
    {
        id: 1,
        name: "Home",
        component: FaHome,
        href: "/"
    },
    {
        id: 2,
        name: "Rentals & Roommates",
        component: FaBuilding,
        href: "/houses"
    },
    {
        id: 3,
        name: "Message",
        component: FaComment,
        href: "/messages"
    },
    {
        id: 4,
        name: "Community",
        component: FaUsers,
        href: "/community"
    },
    {
        id: 5,
        name: "Account",
        component: FaUser,
        href: "/account"
    },
]