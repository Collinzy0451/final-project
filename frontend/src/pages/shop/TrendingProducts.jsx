import React, { useState } from 'react';
import ProductCards from './ProductCards';
// Removed the local products import
// import products from '../../data/products.json';
import { useFetchAllProductsQuery } from '../../redux/features/products/productApi';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    // Fetch all products from the database
    const { data: { products = [] } = {}, error, isLoading } = useFetchAllProductsQuery({
        limit: 100, // Fetch a large number of products, assuming "trending" is among all products
    });

    // Function to load more products
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4);
    };

    if (isLoading) return <div>Loading trending products...</div>;
    if (error) return <div>Error loading trending products.</div>;

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>
            Explore our Trending Products collection, featuring the latest in-demand styles and must-have items. From seasonal trends to standout pieces, these popular picks are selling fast. Shop now and elevate your wardrobe before they’re gone!
            </p>
            {/* product cards */}
            <div className='mt-12'>
                <ProductCards products={products.slice(0, visibleProducts)} />
            </div>

            {/* load more products */}
            <div className='product__btn'>
                {visibleProducts < products.length && (
                    <button className='btn' onClick={loadMoreProducts}>
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
};

export default TrendingProducts;
