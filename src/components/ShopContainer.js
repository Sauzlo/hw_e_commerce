import React, {useState, useEffect} from 'react';
import ShopList from './ShopList';
import UserInfo from './UserInfo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './Navigation';


function ShopContainer(){

    const [user, setUser] = useState({
        name:"Saul",
        basket: []
    });

    const [shopItems, setShopItems] = useState([
        {
            item:"Elden Ring",
            price:40,
            id:1
        },
        {
            item:"Stellaris",
            price:30,
            id:2
        },
        {
            item:"Hollow Knight",
            price:15,
            id:3
        },
        {
            item:"Outer Wilds",
            price:20,
            id:4
        },
        {
            item:"Cyberpunk 2077",
            price:50,
            id:5
        }
    ]);

    const handleBasketAdd = (id) =>{
        const itemToAdd = shopItems.find(item=>item.id == id)
        const currentUser = user;
        currentUser.basket.push(itemToAdd)
        setUser(currentUser);

    }


    return (
        <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/basket" element={<UserInfo user={user}/>} />
                <Route path="/shop" element={<ShopList shopItems={shopItems} handleBasketAdd={handleBasketAdd}/>} />
            </Routes>
        </Router>
        </>
    )


}

export default ShopContainer;