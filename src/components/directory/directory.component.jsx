import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state={
            section:[
                {
                    title: 'HATS',
                    imageurl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:1
                }
                ,
                {
                    title:'JACKETS',
                    imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
                    id:2
                }
                ,
                {
                    title:'SNEAKERS',
                    imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3
                }
                ,
                {
                    title:'WOMENS',
                    imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'larg',
                    id:4
                }
                ,
                {
                    title:'MENS',
                    imageurl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:'larg',
                    id:5
                }
            ]
        };
    };

    render(){
        return(
            <div className='directory-menu'>
                {this.state.section.map(({title,imageurl,id,size}) => 
                <MenuItem key={id} title={title} imageurl={imageurl} size={size}/>)}
            </div>
        )
    }
}

export default Directory;