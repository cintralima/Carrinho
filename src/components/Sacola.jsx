import React from 'react';

import Produto from './Produto'


function Sacola({carrinho}) {
    return (

        <div>
           {carrinho.items.map( item => <Produto carrinho = {carrinho}/>)}
        </div>
      
    );
  }
  
  export default Sacola;
  