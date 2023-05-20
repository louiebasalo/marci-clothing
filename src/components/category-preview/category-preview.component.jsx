import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import  './category-preview.styles.scss';


const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'></span>
            </h2>
            <Link className='category-link' to={title}>
                {title.toUpperCase()}
            </Link>

            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryPreview;