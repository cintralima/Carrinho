import React from "react";

import "../index.css"

function Produto({carrinho}) {

  return (
    <div className='container-produto'>
        

      <div className='container-img'>
        <img src={carrinho.imageUrl} alt='' />
      </div>

      <div className='container-text'>
        <h3>{carrinho.name}</h3>
        <span className="price">{ (carrinho.price / 100 ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        <span className="seling-price">{(carrinho.sellingPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
      </div>
    </div>
  );
}

export default Produto;
