import { Link } from 'react-router-dom';
import { APIResponse } from '../../Interfaces/products';
import {FC} from 'react';


interface Props{
    product: APIResponse
}

const GeneralProducts: FC<Props> = ({product}) => {
    return (
        <Link
            to={`/products/${product.id}`}
            className="hover:bg-secondary-light"
        >
            <figure
                className="flex flex-col items-center"
            >
                <h4 className='w-64 text-center'>{product.title}</h4>
                <img
                    src={product.image}
                    alt={'Image name' + product.title}
                    className="h-64 w-64"
                />
                <span>{`$${product.price}`}</span>

            </figure>
        </Link>
    )
}

export default GeneralProducts
