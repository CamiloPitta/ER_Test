import { CircularButton } from '../buttons'
import { useState } from 'react';

const QuantitySelector = () => {

    const [count, setCount] = useState(1)

    const addCount = () => {
        setCount(prev => prev + 1)
    }

    const subtractCount = () => {
        setCount(prev => {
            if( prev > 1) return  prev - 1 
            return prev
            
        }

        )

    }

    return (
        <div className="flex">
            <CircularButton
                content="-"
                title='Less'
                onClick={subtractCount}

            />
            <p className="bg-primary-light w-10 text-center ">{count}</p>

            <CircularButton
                roundedSide="right"
                content="+"
                title='More'
                onClick={addCount}
            />

        </div>
    )
}

export default QuantitySelector
