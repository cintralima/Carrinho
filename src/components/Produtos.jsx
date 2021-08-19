import React from 'react';

import Produto from './Produto'


function Produtos({carrinho}) {
    return (

        <>
            {carrinho.items.map(item => <Produto carrinho = {item}/>)}
        </>
      
    );
  }
  
  export default Produtos;
  