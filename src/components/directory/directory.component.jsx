import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({category}) => {
    return (
        <div className='directory-container'>
            {category.map((item) => (
                <CategoryItem key={item.id} category={item} />
            ))}
        </div>
    )
}

export default Directory