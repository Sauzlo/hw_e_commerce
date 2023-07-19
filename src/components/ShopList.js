import React from 'react';
import ShopItem from './ShopItem';

function ShopList({shopItems, handleBasketAdd}){

    const itemList = shopItems.map(item => {
        return(
            <ShopItem item={item} value={item.id} key={item.id} handleBasketAdd={handleBasketAdd}/>
        )
    })

    return(
        <div>
            <ul>
                {itemList}
            </ul>
        </div>
    )

}

export default ShopList;