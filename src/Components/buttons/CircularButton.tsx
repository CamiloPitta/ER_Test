import { FC } from 'react';

interface Props {
  content: string,
  roundedSide?: 'left' | 'right', 
  title: string,
  onClick?: () => void 
}


const CircularButton:FC<Props> = ({onClick, title, content, roundedSide = 'left'}) => {
  
  const classNameRounded = roundedSide === 'left' ? 'rounded-s-full' : 'rounded-e-full'
  
  
  return (
  
    <button
      className={`bg-secondary-light w-8 h-6 flex justify-center items-center hover:bg-secondary-base transition-colors duration-100 active:bg-secondary-dark ${classNameRounded}`}
      title = {title}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default CircularButton
