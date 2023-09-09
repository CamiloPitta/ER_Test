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
            font-thin font-custom uppercase text-secondary-dark decoration-secondary-base decoration-1 underline-offset-8 text-base underline p-1 rounded-lg 
            hover:text-primary-base transition-colors ease-in duration-100 ${isActive ? 'decoration-4 decoration-secondary-dark': ''}
            `
        }}
    
    >
        {content}
    </NavLink>
  )
}

export default CustomNavLink