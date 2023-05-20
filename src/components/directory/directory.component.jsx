
import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({category}) => {
    return (
        <div className='directory-container'>
            {category.map((item) => (
                <DirectoryItem key={item.id} category={item} />
            ))}
        </div>
    )
}

export default Directory