import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./login-page.css";

function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <main>
        <h5 className="login-page__heading text-dark fw-700 text-uppercase font-cormorant text-center mb-0">
          Log in
        </h5>
        <form className="login-page__form mx-auto">
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
          <div className="text-end">
            <Link
              to="/forgot-password"
              className="login-page__forgot-password text-ss d-inline-block text-end fw-400 font-open-sans"
            >
              Forgot password?
            </Link>
          </div>
          <button className="login-page__btn-submit btn-ss font-open-sans fw-400 mx-auto">
            Log In
          </button>
          <div className="login-page__redirect-signup text-center text-dark">
            Don't you have an account?{" "}
            <Link to="/signup" className="text-ss fw-400 font-open-sans">
              Sign up
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
