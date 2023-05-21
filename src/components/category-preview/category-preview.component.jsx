import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import {CategoryPreviewContainer, CategoryLink, Preview} from  './category-preview.styles.jsx';


const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <CategoryLink to={title}>
                {title.toUpperCase()}
            </CategoryLink>

            <Preview>
                {
                    products.filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;