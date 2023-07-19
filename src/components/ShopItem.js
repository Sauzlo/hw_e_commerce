import React from 'react';

function ShopItem({item, handleBasketAdd}){

    const handleClick = (event) =>{
        handleBasketAdd(event.target.value)
    }

    return(
        <>
            <li>{item.item}<br></br>£{item.price}</li>
            <button value={item.id} onClick={handleClick}>Add to Basket</button>
        </>
    )

}

export default ShopItem;