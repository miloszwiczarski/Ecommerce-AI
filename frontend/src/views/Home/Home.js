import React, { Component } from "react";
import { login } from "../../ServerRequest";
import API from "../../axios/API";
import Auth from "../../modules/Auth";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSeller from "../../components/Products/BestSeller";
import Benefit from "../../components/Benefit";
import Advertisement from "../../components/Advertisement";
import PropTypes from "prop-types";
import jumpTo from "../../modules/Navigation";
import LoginRegister from "../../components/LoginRegisterModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      modalShow: false,
      login: true,
      products: null,  // Produkty
      departments: null  // Departments
    };
    this.addToBag = this.addToBag.bind(this);
  }

  componentDidMount() {
    if (!this.state.products) {
      this.getAllProducts();
    }
    if (!this.state.departments) {
      this.getDepartments(); // Funkcja do pobrania departments
    }
  }

  getAllProducts = () => {
    API({
      method: 'get',
      url: '/products',
    })
      .then((response) => {
        console.log("Odebrane produkty:", response.data);
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania produktów", error);
      });
  };

  // Funkcja do pobierania departments
  getDepartments = () => {
    API({
      method: 'get',
      url: '/departments',
    })
      .then((response) => {
        console.log("Odebrane departments:", response.data);
        this.setState({ departments: response.data });
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania departments", error);
      });
  };

  showHideModal = () => {
    this.setState({ modalShow: false });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };

  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

  addToBag = (params) => {
    if (Auth.getUserDetails() && Auth.getToken()) {
      let cart = this.props.postCart(params);
      cart.then((res) => {
        console.log(res);
      });
    } else {
      this.setState({ modalShow: true });
    }
  };

  render() {
    const { products, departments } = this.state;

    return (
      <div>
        <HomeBanner />
        <CategoryBanner />
        {products && departments ? (
          <NewArrivals
            products={products}
            departments={departments}
            addToBag={this.addToBag}
          />
        ) : null}
        <Benefit />
        <Advertisement />
        {products && departments ? (
          <BestSeller
            products={products}
            departments={departments}
            addToBag={this.addToBag}
          />
        ) : null}
        <LoginRegister
          show={this.state.modalShow}
          login={this.state.login}
          registerClicked={this.registerClicked}
          loginClicked={this.loginClicked}
          onHide={this.showHideModal}
        />
      </div>
    );
  }
}

export default Home;
