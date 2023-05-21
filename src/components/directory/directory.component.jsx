
import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

const categories = [
    {
      id: 1,
      title: 'HATS',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: 'shop/hats'
    },
    {
      id: 2,
      title: 'JACKETS',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: 'shop/jackets'

    },
    {
      id: 3,
      title: 'SNEAKERS',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: 'shop/sneakers'

    },
    {
      id: 4,
      title: 'WOMENS',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: 'shop/womens'

    },
    {
      id: 5,
      title: 'MENS',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: 'shop/mens'

    }
  
  ]


const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((item) => (
                <DirectoryItem key={item.id} category={item} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory