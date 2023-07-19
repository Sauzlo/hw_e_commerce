import React, { useEffect, useState } from 'react';

function UserInfo({user}){
    


    if(!user.basket){
        return <p>Loading...</p>
    }


    const basketItems = user.basket.map(item =>{
                return(
                    <li>{item.item}  £{item.price}</li>
                )
            })
    

    const currentBasketTotal = () =>{
        let total = 0;
            user.basket.map(item =>{
                total += item.price
            })
        return total;
    }

    const basketTotal = currentBasketTotal();

    return(
        <>
            <p>Username: {user.name}</p>
            <p>Basket: </p>
            <ul>
                {basketItems}
            </ul>
            <p>Total: £{basketTotal}</p>
            <button>Pay</button>
        </>
    )

}

export default UserInfo;