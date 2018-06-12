import React from 'react';
import classes from './BurgerIndrients.css';

const burgerIngridients = (props) => {
  let ingridient = null;

  switch (props.type) {
    case ('bread-bottom'):
        ingridient = <div className={classes.Bread.Bottom}></div>;
      break;
  
    default:
      break;
  }

  return ingridient;
};

export default burgerIngridients;
