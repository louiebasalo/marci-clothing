
import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

const Directory = ({category}) => {
    return (
        <DirectoryContainer>
            {category.map((item) => (
                <DirectoryItem key={item.id} category={item} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory