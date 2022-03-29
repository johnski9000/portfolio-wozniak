import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { useGetUser } from './../../actions/user';


const BsNavLink = props => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const LoginLink = () =>
<a href="/api/v1/login" className="nav-link port-navbar-link">Login</a>

const LogoutLink = () => 
<a href="/api/v1/logout" className="nav-link port-navbar-link">Logout</a>


const Header = ({user, loading}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {data, loading: loadingU} = useGetUser()

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <div className="navbar-brand">
          <Link href="/">
            <a className="port-navbar-brand">Janusz Wozniak</a>
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv"/>
            </NavItem>
            { data && 
            <NavItem className="port-navbar-item">
            <BsNavLink href="/secret" title="secret"/>
          </NavItem>
            }
          </Nav>
          <Nav navbar>
            {
              !loading &&
              <>
              {
                user &&
              <NavItem className="port-navbar-item clickable">
                <LogoutLink/>
              </NavItem>
              }
              {
                !user && 
                <NavItem className="port-navbar-item clickable">
                  <LoginLink/>
                </NavItem>
              }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;