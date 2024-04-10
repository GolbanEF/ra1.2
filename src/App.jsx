import React from 'react';
import './css/main.css'


const item = {
  brand: 'Богема',
  title: 'Ванна Богема Sofix 1500х700',
  description: 'Ванна из литьевого мрамора',
  descriptionFull: 'Ванна из литьевого мрамора, только у Нас купить от производителя по низкой цене, доставка по Костроме бесплатна, в друггие регионны РФ отправляем ТК по вашему выбору.',
  price: 43700,
  currency: 'Руб'
}

class ShopItemClass extends React.Component {
  
  render() {
    const { item } = this.props
    return (
      <div className="main-content">
        <h2>{ item.brand }</h2>
        <h1>{ item.title }</h1>
        <h3>{ item.description }</h3>
        <div className="description">{ item.descriptionFull }</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{ item.currency+item.price+'.00' }</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={item} />
    </div>
  </div>
  );
}

export default App;