import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg'
import styled from 'styled-components';
import {ButtonContainer} from '../Button'
import Search from '../Search/Search'


export default class NavBar extends Component {
    render() {
        return (

            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5"><Link to ='/'>
                    <img src={logo} alt="fit-wear" className="navbar-brand"/>
                    
                </Link></li>
                <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            products
                        </Link>

                    </li>
                    <Search/>
                </ul>
              
                
                <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span>
                
                cart
                </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper =styled.nav`
background: var(--mainDark);
.nav-link{
    color: var(--lightOrange) !important;
    font-size: 1.3rem;
    text-transform:capitalize;
}
`
