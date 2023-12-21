import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./payment-page.css";
import { useSelector } from "react-redux";

function PaymentPage() {
  const cart = useSelector((state) => state.cart.data);
  const totalSalePrice = useSelector((state) => state.cart.totalSalePrice);
  return (
    <div className="payment-page">
      <Header />
      <main>
        <h5 className="payment-page__heading text-ss fw-700 font-cormorant text-center mb-0">
          CHECKOUT Information
        </h5>
        <div className="container mb-5">
          <div className="row gx-5">
            <div className="col-6">
              <form className="payment-page__form card border-0">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="text-ss fw-700 font-cormorant">Contact</h6>
                  <p className="font-open-sans fw-400">
                    Have an account?{" "}
                    <Link to="/login" className="text-dark">
                      Log in
                    </Link>
                  </p>
                </div>
                <input type="email" placeholder="Email" />
                <h6 className="text-ss fw-700 font-cormorant">Delivery</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <input type="text" className="flex-grow-1 me-4" placeholder="First Name" />
                  <input type="text" className="flex-grow-1 ms-4" placeholder="Last Name" />
                </div>
                <input type="text" className="flex-grow-1" placeholder="Address" />
                <input type="text" className="flex-grow-1" placeholder="Phone" />
                <h6 className="text-ss fw-700 font-cormorant">Shipping Method</h6>
                <div className="payment-page__form__radio-group d-flex align-items-center ">
                  <input type="radio" name="shipping-method" id="shipping-method-1" />
                  <label
                    htmlFor="shipping-method-1"
                    className="d-flex justify-content-between flex-grow-1"
                  >
                    <span className="text-black-50">Standard Shipping - Get it in 2-5 days</span>
                    <span>&#36;20</span>
                  </label>
                </div>
                <div className="payment-page__form__radio-group d-flex align-items-center ">
                  <input type="radio" name="shipping-method" id="shipping-method-2" />
                  <label
                    htmlFor="shipping-method-2"
                    className="d-flex justify-content-between flex-grow-1"
                  >
                    <span className="text-black-50">
                      Express Shipping - (Avaliable in HCM city)
                    </span>
                    <span>&#36;60</span>
                  </label>
                </div>
                <h6 className="text-ss fw-700 font-cormorant">Payment Method</h6>
                <div className="payment-page__form__radio-group d-flex align-items-center mb-0">
                  <input type="radio" name="payment-method" id="payment-method-1" />
                  <label htmlFor="payment-method-1" className="flex-grow-1">
                    Cash on delivery (COD)
                  </label>
                </div>
                <div className="payment-page__form__note text-center font-open-sans fw-400">
                  <p className="mb-0 font-open-sans fw-400">
                    Please check your order details carefully. Due to a high volume of orders and
                    time constraints in packaging, Soulshine will ship without confirmation calls.
                  </p>
                  <p className="mb-0 font-open-sans fw-400">
                    Ensure you or the recipient receives the items within 2-4 days for standard
                    delivery or on the same day for express delivery in Ho Chi Minh City. For any
                    changes or assistance, contact us on Facebook. Thank you!
                  </p>
                </div>
                <div className="payment-page__form__radio-group d-flex align-items-center mb-0">
                  <input type="radio" name="payment-method" id="payment-method-2" />
                  <label htmlFor="payment-method-2" className="flex-grow-1">
                    Bank Transfer
                  </label>
                </div>
                <div className="payment-page__form__note text-center font-open-sans fw-400">
                  <p className="mb-0 font-open-sans fw-400">
                    Viet Capital Bank (Viet Capital Bank)
                  </p>
                  <p className="mb-0 font-open-sans fw-400">-Account Number: 901704100</p>
                  <p className="mb-0 font-open-sans fw-400">- Account Holder: Soulshine Official</p>
                  <p className="font-open-sans fw-400">
                    - Transfer Note: Name - Order Phone Number
                  </p>
                  <p className="mb-0 font-open-sans fw-400">
                    Once the transfer is complete, Heny will automatically process your order. You
                    can message on Zalo at 0938102922 to receive the tracking code for monitoring if
                    needed. The store will automatically handle your order!
                  </p>
                </div>
                <button className="payment-page__form__btn-submit btn-ss text-uppercase rounded-pill font-open-sans fw-700">
                  Pay Now
                </button>
              </form>
            </div>
            <div className="col-6 mt-5">
              {cart.map((item, index) => {
                return (
                  <div key={index} className="payment__product-item mb-5 d-flex align-items-center">
                    <div className="payment__product-item__img p-2 bg-white position-relative">
                      <img src={item.img} alt="" className="w-100 h-100 object-contain" />
                      <span className="d-flex align-items-center justify-content-center text-white rounded-circle p-2">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="mx-5">
                      <h4 className="payment__product-item__name mb-2">{item.productName}</h4>
                      <h6 className="payment__product-item__description mb-0 text-black-50">
                        {item.description}
                      </h6>
                    </div>
                    <div className="ms-auto h3 fon-open-sans fw-400">
                      &#36;{item.salePrice || item.orgPrice}
                    </div>
                  </div>
                );
              })}
              <div className="border-top border-dark">
                <p className="my-5 d-flex align-items-center justify-content-between">
                  <span className="fs-4 font-open-sans fw-500">Subotal</span>
                  <span className="fs-4 font-open-sans fw-400">&#36;{totalSalePrice}</span>
                </p>
                <p className="my-5 d-flex align-items-center justify-content-between">
                  <span className="fs-4 font-open-sans fw-500">Shipping</span>
                  <span className="fs-4 font-open-sans fw-400">&#36;20</span>
                </p>
                <p className="my-5 d-flex align-items-center justify-content-between">
                  <span className="fs-2 font-open-sans fw-500">Total</span>
                  <span className="fs-2 font-open-sans fw-600">&#36;{totalSalePrice + 20}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PaymentPage;
