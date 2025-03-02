import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import  ThemeConsumer  from './context/ThemeContexts';

const Modal = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <ProductConsumer>
          {(value) => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            if (!modalOpen) {
              return null;
            } else {
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className={
                          theme
                            ? 'col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5 bg-dark'
                            : 'col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5'
                        }
                      >
                        <h5 className={theme && 'text-white'}>item added to the cart</h5>
                        <img src={img} className="img-fluid" alt="product" />
                        <h5 className={theme && 'text-light'}>{title}</h5>
                        <h5 className={theme ? 'text-light' : 'text-muted'}>
                          price : $ {price}
                        </h5>
                        <Link to="/">
                          <ButtonContainer onClick={() => closeModal()}>
                            continue shopping
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer cart onClick={() => closeModal()}>
                            go to cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      )}
    </ThemeConsumer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
