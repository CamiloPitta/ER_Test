const ProductDetailSkeleton = () => {
    return (
        <section
            className="flex flex-wrap gap-4 tablet:border-2 tablet:p-4 justify-evenly items-center mt-4 mb-4 rounded-xl animate-pulse"
        >
            <div className="mobile:h-80 mobile:w-80 tablet:h-96 tablet:w-96 bg-primary-base rounded-lg" />

            <div
                className="w-80 flex flex-col items-center gap-2"
            >
                <h1 className="h-10 w-full text-center bg-primary-base rounded-xl"/>

                <hr className="w-full" />
                <p className="h-5 w-24 rounded-lg bg-primary-base"/>
                
                <div className="flex">
                    <span className="h-8 w-10 rounded-s-full bg-primary-base"/>
                    <span className="h-8 w-20 bg-primary-dark"/>
                    <span className="h-8 w-10 rounded-e-full bg-primary-base"/>
                    
                </div>
                
                <p className="h-20 w-40 p-4"/>
                <button className="rounded-lg p-2 bg-primary-base tr w-48 m-6 h-12"/>
                    
            </div>
        </section>
    )
}

export default ProductDetailSkeleton