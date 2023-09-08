import { Link } from "react-router-dom"
import {FC} from 'react';


interface Props {
    to: string,
    icon: string,
    content: string
}

const CustomLinkIcon:FC<Props> = ({content, to, icon}) => {
  return (
   <Link
   to= {to}
   target="_blank"
   className="group hover:underline transition-all ease-linear duration-100"
   >
    <figure className="flex gap-4 items-center">
        <img 
        className="h-8" 
        src={icon} 
        alt={`icon ${content}`} />
        <figcaption className="text-primary-light font-semibold capitalize group-hover:text-primary-dark transition-colors ease-linear duration-100">
            {content}
        </figcaption>
    </figure>
        
   </Link>
  )
}

export default CustomLinkIcon
