import { FC } from 'react'
import { CircularButton } from "../buttons"

interface Props {
    addCount: () => void 
    substractCount: () => void
    count: number
}



const QuantitySelector:FC<Props> = ({addCount, count, substractCount}) => {
    
    return (
        <div
            className="flex text-center"
        >
            <CircularButton
                content="-"
                title="Less"
                onClick={substractCount}
            />
            <p
                className="bg-primary-light w-10"
            >
                {count}
            </p>
            <CircularButton
                content="+"
                roundedSide="right"
                title="More"
                onClick={addCount}
            />
        </div>
    )
}

export default QuantitySelector
