import { NavLink } from "react-router-dom"
import {FC} from 'react';

interface CustomNavLinkProps {
    to: string,
    content: string
}

const CustomNavLink: FC<CustomNavLinkProps>  = ({content, to}) => {
  return (
    <NavLink 
        to={to}
        className={({isActive}) => {
            return `
            text-primary-light text-2xl capitalize border-b-2 p-1 rounded-lg hover:bg-secondary-light
            transition-colors ease-in duration-100 ${isActive ? 'bg-secondary-light': ''}
            `
        }}
    
    >
        {content}
    </NavLink>
  )
}

export default CustomNavLink