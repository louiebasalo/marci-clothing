import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { CategoriesProvider } from '../../contexts/categories.context';

import './shop.styles.scss';


const Shop = () => {
    return (
        <CategoriesProvider>
            <Routes>
                <Route index element= {<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>
        </CategoriesProvider>

    )
}

export default Shop;