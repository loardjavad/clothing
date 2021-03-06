import React from 'react';
import Shop_Data from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: Shop_Data
        }
    }

    render(){
        const {collections}=this.state;
        return(
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionPreview})=>
                (<CollectionPreview key={id} {...otherCollectionPreview}/>)
                )}
            </div>
        )
    }
}

export default ShopPage;