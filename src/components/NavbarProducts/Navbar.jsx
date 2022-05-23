import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./navproduct.css";
import Context from "../../Context/Context";

export default function NavbarProducts() {
  const { cartItems } = useContext(Context);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/products/cart");
  };

  const loggout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="container-fluid fixed-top">
        <Container className="nav-product">
          <Navbar.Brand>
            <strong>COIN STORE</strong>
          </Navbar.Brand>
          <Nav>
            <Nav.Link data-cy="name" className="coin-nav-name">
              {user.name}
            </Nav.Link>
            <Nav.Link
              type="button"
              onClick={() => goToCart()}
              data-cy="cart"
              className="coin-nav-cart"
            >
              <i className="fas fa-shopping-cart"></i>
            </Nav.Link>
            <span className="cart-lenght">
              {cartItems.length === 0 ? "0" : cartItems.length}
            </span>
            <Button
              type="button"
              className="btn-loggout"
              data-cy="button-loggout"
              onClick={() => loggout()}
            >
              SAIR
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
