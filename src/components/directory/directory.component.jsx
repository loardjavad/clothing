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
                    id:1,
                    linkurl:'hats'
                }
                ,
                {
                    title:'JACKETS',
                    imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
                    id:2,
                    linkurl:'jackets'
                }
                ,
                {
                    title:'SNEAKERS',
                    imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3,
                    linkurl:''
                }
                ,
                {
                    title:'WOMENS',
                    imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'larg',
                    id:4,
                    linkurl:''
                }
                ,
                {
                    title:'MENS',
                    imageurl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:'larg',
                    id:5,
                    linkurl:''
                }
            ]
        };
    };

    render(){
        return(
            <div className='directory-menu'>
                {this.state.section.map(({id,...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps}/>)}
                {/* {this.state.section.map(({title,imageurl,id,size,link}) => 
                <MenuItem key={id} title={title} imageurl={imageurl} size={size} link={link}/>)} */}
            </div>
        )
    }
}

export default Directory;