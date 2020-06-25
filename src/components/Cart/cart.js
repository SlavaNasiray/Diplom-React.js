import React from "react";
import CoffeeService from "../../services/coffeeservice";
import { withRouter } from "react-router-dom";
import logo from "../../img/beans_logo-bl.svg";
import "./cart.css";

class Cart extends React.Component {
  state = {
    id: null,
    items: [],
  };
  coffeeService = new CoffeeService();
  componentDidMount() {
    this.coffeeService.getAllCoffee().then((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;

    return this.state.items.forEach((item) => {
      if (item.id === id || item.name === id) {
        return (
          <>
            <section className="ourCoffee">
              <p className="text1">Our Coffee</p>
            </section>
            <section className="cart">
              <div className="centerflex">
                <img alt="cartImg" className="img" src={item.url} />
                <div className="text">
                  <p className="text1">About {item.name}</p>
                  <img alt="logo" src={logo} />
                  <p className="text2">
                    <b>Country:</b> {item.country}
                  </p>
                  <p className="text2a">a</p>
                  <p className="text2">
                    <b>Description:</b> {item.description}
                  </p>
                  <p className="text2a">a</p>
                  <p className="text2">
                    <b>Price:</b> <span className="price">{item.price}</span>
                  </p>
                </div>
              </div>
            </section>
          </>
        );
      }
    });
  }
}

export default withRouter(Cart);
