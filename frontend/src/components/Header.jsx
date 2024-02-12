import { Badge,Navbar,Nav,Container}from 'react-bootstrap';
import {FaShoppingCart , FaUser} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/logo.png";
import {useSelector} from 'react-redux';

const Header = () => {


    const { cartItems} = useSelector((state) => state.cart);
    console.log(cartItems);

  return (
      <header>
        <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <img src={logo} alt='brandlogo'/>
                        Bshop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <LinkContainer to="/cart"><Nav.Link href="/cart"><FaShoppingCart/>Cart{
                        cartItems.length > 0 && (
                            <Badge pill bg='success' style={{marginLeft: '5px'}}> {cartItems.reduce((a,c) => a + c.qty, 0)} </Badge> // a represents accumulator and c represent current item  and  0 is passed as default accumulator
                        )

                    }</Nav.Link></LinkContainer>
                    <LinkContainer to="/Sign In"><Nav.Link href="/Sign In"><FaUser/>Sign In</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </header>
  )
}



export default Header