import { Link } from 'react-router-dom';
import { APIResponse } from '../../interfaces/products';
import {FC} from 'react';


interface Props{
    product: APIResponse
}

const GeneralProducts: FC<Props> = ({product}) => {
    return (
        <Link
            to={`/products/${product.id}`}
            className="hover:scale-105 ease-in duration-200 animate-fade"
            title={`See details ${product.title}`}
        >
            <figure
                className="flex flex-col items-center p-6 shadow-xl rounded-xl"
            >
                
                <img
                    src={product.image}
                    alt={'Image name' + product.title}
                    className="h-64 w-64"
                />
                <h4 className='w-64 text-center text-lg h-28'>{product.title}</h4>
                <span className='text-xl
                '>{`$${product.price}`}</span>

            </figure>
        </Link>
    )
}

export default GeneralProducts
