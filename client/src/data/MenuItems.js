import { GoPersonFill } from "react-icons/go";
import { FaUtensils, FaClipboardList, FaHome, FaHeart, FaShoppingCart, FaChartBar } from 'react-icons/fa';

export  const menuItems = [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'Recipes', href: '/recetas', icon: FaUtensils },
    { label: 'Profile', href: '/perfil', icon: GoPersonFill },
    { label: 'Meal Plans', href: '/planes', icon: FaClipboardList },
    { label: 'Favorites', href: '/favoritas', icon: FaHeart },
    { label: 'Shopping Lists', href: '/listasdelacompra', icon: FaShoppingCart },
    { label: 'Statistics', href: '/estadisticas', icon: FaChartBar }
];