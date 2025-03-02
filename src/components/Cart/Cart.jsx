import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from "./CartTotals";

const Store = ({ history }) => {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <div className='h-full'>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={history} />
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <div className='h-full'>
                <EmptyCart />
              </div>
            );
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Store;
