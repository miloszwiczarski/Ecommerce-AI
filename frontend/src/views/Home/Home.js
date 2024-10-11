import React, { Component } from "react";
import { login } from "../../ServerRequest";
import API from "../../axios/API"; // Zakładam, że tutaj będziesz miał funkcje do obsługi API
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
      products: null,  // Zmienna do przechowywania produktów
    };
    this.addToBag = this.addToBag.bind(this);
  }

  // Dodajemy getAllProducts w componentDidMount
  componentDidMount() {
    if (!this.state.products) {
      this.getAllProducts(); // Wywołujemy funkcję getAllProducts
    }
  }

  // Funkcja do pobierania produktów
    // Funkcja do pobierania produktów
    getAllProducts = () => {
      API({
        method: 'get',
        url: '/products', // Endpoint do pobierania produktów
      })
        .then((response) => {
          console.log("Odebrane produkty:", response.data); // Dodaj log
          this.setState({ products: response.data });
        })
        .catch((error) => {
          console.error("Błąd podczas pobierania produktów", error);
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
    if (
      Auth.getUserDetails() !== undefined &&
      Auth.getUserDetails() !== null &&
      Auth.getToken() !== undefined
    ) {
      let cart = this.props.postCart(params);
      cart.then((res) => {
        console.log(res);
      });
    } else {
      this.setState({ modalShow: true });
    }
  };

  render() {
    const { products } = this.state;  // Pobieramy produkty z state
    const { departments } = this.props;  // Pobieramy departments z props (jeśli są potrzebne)

    return (
      <div>
        <HomeBanner />
        <CategoryBanner />
        {products ? (
          <NewArrivals
            products={products}
            departments={departments}
            addToBag={this.addToBag}
          />
        ) : null}
        <Benefit />
        <Advertisement />
        {products ? (
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
