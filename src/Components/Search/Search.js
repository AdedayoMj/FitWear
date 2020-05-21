import React, { Component } from 'react'
import {ButtonContainer} from '../Button'
import {Link} from 'react-router-dom'






export default class Search extends Component {


    render() {
  
    return (
        <div>
        <li className="nav-item ml-5">
                        <form  >
                        <input type="text"  id="search" placeholder="Search" classname="input-border" size ="50"/>
                        <Link to="/search"><ButtonContainer  type="submit" >Search</ButtonContainer></Link>
                        </form>
                        </li>
        </div>
    )
}

}



