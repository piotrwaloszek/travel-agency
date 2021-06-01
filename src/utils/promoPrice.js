import {formatPrice} from './formatPrice';

export const promoPrice = (price, promo) => {
  if (typeof(price) === 'string' && price.includes('$')){
    price = price.slice(1).replace(',', '');
    price = parseFloat(price);
    let happyHourPrice = price - (price * promo / 100);
    return formatPrice(happyHourPrice);
  }
  price = parseFloat(price);
  let happyHourPrice = price - (price * promo / 100);
  return happyHourPrice;
};
