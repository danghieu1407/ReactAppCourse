import React from 'react';
import { data } from '../data';
import Item from './Header/Header';

const ItemList = () => {
    return (
        <div className="App"> 
        {data.map((item, index) => {
          return (
            <Item
              key={item.id}
              img={item.image}
              title={item.title}
              author={item.author}
              avatar={item.avatar || item.image}
              className = {index ===1 ? "abc" : ""}
            ></Item>
          );
        })}
      </div>
    );
};

export default ItemList;