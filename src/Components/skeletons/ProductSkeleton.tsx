const ProductSkeleton = () => {
    return (
        <div
            className="flex flex-col items-center p-6 gap-4 shadow-xl rounded-xl animate-pulse"
        >
            <div
                className="h-64 w-64 bg-primary-base rounded-md"
            />
            <span className=' h-4 w-20 text-center bg-primary-base rounded-xl'/>
            <span className='h-4 w-28 rounded-xl bg-primary-base'/>
        </div>
    )
}

export default ProductSkeleton