import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./sign-up-page.css";

function SignUpPage() {
  return (
    <div className="sign-up-page">
      <Header />
      <main>
        <h5 className="sign-up-page__heading text-dark fw-700 text-uppercase font-cormorant text-center mb-0">
          Sign Up
        </h5>
        <form className="sign-up-page__form mx-auto">
          <input
            type="text"
            placeholder="First Name"
            required
            className="font-open-sans fw-400 d-block mx-auto"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="font-open-sans fw-400 d-block mx-auto"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="font-open-sans fw-400 d-block mx-auto"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="font-open-sans fw-400 d-block mx-auto"
          />
          <button className="sign-up-page__btn-submit btn-ss font-open-sans fw-400 mx-auto">
            Sign Up
          </button>
          <div className="sign-up-page__redirect-signup text-center text-dark">
            Do you have an account?{" "}
            <Link to="/login" className="text-ss fw-400 font-open-sans">
              Log In
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default SignUpPage;
