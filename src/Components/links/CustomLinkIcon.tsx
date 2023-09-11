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
   className="group transition-all ease-linear duration-100"
   title={`Our ${content} site`}
   >
    <figure className="flex gap-4 items-center justify-center ">
        <img 
        className="h-8 " 
        src={icon} 
        alt={`icon ${content}`} />
        <figcaption className="text-primary-light group-hover:text-primary-base transition-colors ease-linear duration-100">
            {content}
        </figcaption>
    </figure>
        
   </Link>
  )
}

export default CustomLinkIcon
