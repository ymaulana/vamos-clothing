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
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/HX293t9/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/X208LDz/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'wemens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/wemens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/VWgn4s1/mens1-3.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
                
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;