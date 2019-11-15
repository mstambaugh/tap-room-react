import React from 'react';
import Keg from './Keg';

var masterKegMenu = [
  {
    name: 'Two Hearted Ale',
    brand: 'Bell\'s Brewery',
    location: 'Kalamazoo, Michigan',
    variety: 'American IPA',
    price: '4.50',
    abv: '7.0%'
  },
  {
    name: 'Porter',
    brand: 'Founders Brewing Co.',
    location: 'Grand Rapids, Michigan',
    variety: 'Robust Porter',
    price: '5.00',
    abv: '6.5%'
  }
];

function KegMenu() {
  return (
    <div>
      <hr />
      {masterKegMenu.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          location={keg.location}
          variety={keg.variety}
          price={keg.price}
          abv={keg.abv}
          key={index} />
      )}
    </div>
  );
}

export default KegMenu;