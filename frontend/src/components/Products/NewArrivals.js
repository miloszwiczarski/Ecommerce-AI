import React, { Component } from "react";
import SingleProduct from "./SingleProduct";
import Heading from "../Heading";
import PropTypes from "prop-types";

class NewArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      productsBAK: this.props.products,
      departments: this.props.departments || [],
      selectedOption: "All" // Domyślnie pokazuje wszystkie produkty
    };
  }

  optionClicked(option) {
    let FilterList = this.state.productsBAK.filter(
      (item) => option === "All" || item.department === option
    );
    this.setState({ 
      products: FilterList, 
      selectedOption: option 
    });
  }

  render() {
    const { products, departments } = this.state;

    return (
      <div className="new_arrivals" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <Heading title="New Arrivals" data-aos="fade-up" />
          </div>
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li
                    onClick={() => this.optionClicked("All")}
                    className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                      this.state.selectedOption === "All"
                        ? "active is-checked"
                        : ""
                    }`}
                  >
                    all
                  </li>

                  {departments &&
                    departments.map((dept, index) => (
                      <li
                        key={index}
                        onClick={() => this.optionClicked(dept.departmentName)}
                        className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                          this.state.selectedOption === dept.departmentName
                            ? "active is-checked"
                            : ""
                        }`}
                      >
                        {dept.departmentName.toLowerCase()}'s
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {products &&
              products.slice(0, 8).map((item, index) => (
                <div
                  className="col-lg-3 col-sm-6"
                  key={index}
                  data-aos="zoom-in"
                >
                  <SingleProduct
                    productItem={item}
                    addToBag={this.props.addToBag}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

NewArrivals.propTypes = {
  addToCart: PropTypes.func,
  products: PropTypes.array.isRequired,
  departments: PropTypes.array.isRequired,
};

export default NewArrivals;
