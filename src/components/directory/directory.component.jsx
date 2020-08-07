import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/L8t4dMc/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/HX293t9/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/X208LDz/sneakers.png',
                    id: 3
                },
                {
                    title: 'wemens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/wemens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/4Yp39gt/mens.png',
                    size: 'large',
                    id: 5
                }
                
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}

export default Directory;