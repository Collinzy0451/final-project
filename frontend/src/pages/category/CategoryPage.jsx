import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Remove the local products import
// import products from "../../data/products.json"
import ProductCards from '../shop/ProductCards';
import { useFetchAllProductsQuery } from '../../redux/features/products/productApi';

const CategoryPage = () => {
    const { categoryName } = useParams();
    
    // New state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [ProductsPerPage] = useState(8); // Similar to ShopPage
    
    // Fetching products from the database via the API
    const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({
        category: categoryName !== 'all' ? categoryName.toLowerCase() : '',
        page: currentPage,
        limit: ProductsPerPage,
    });

    // Pagination handler (Optional if needed)
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryName]);

    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>Error loading products.</div>;

    // Pagination display
    const startProduct = (currentPage - 1) * ProductsPerPage + 1;
    const endProduct = startProduct + products.length - 1;

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>{categoryName}</h2>
                <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
            </section>

            {/* Products card */}
            <div className='section__container'>
                <h3 className='text-xl font-medium mb-4'>
                    Showing {startProduct} to {endProduct} of {totalProducts} products
                </h3>
                <ProductCards products={products} />

                {/* Pagination controls (Optional, like in ShopPage) */}
                <div className='mt-6 flex justify-center'>
                    <button 
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'>
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-md mx-1`}>
                            {index + 1}
                        </button>
                    ))}

                    <button 
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2'>
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
