import React, { Component } from 'react'
import {storeProducts} from '../../data'
import {ButtonContainer} from '../Button'


function searchingFor(search){
    return function(x){
        return (x.title.toLowerCase().includes(search.toLowerCase()) || !search);
    }
}


export default class SearchList extends Component {
    constructor(props){
        super(props);

        this.state={
            Products: storeProducts,
            search:'',
            redirectFuncton:false
        }
        this.searchHandler=this.searchHandler.bind(this);
    }
    
    handleSubmit = (e) => {
	
        this.setState({redirectFuncton: true})
         e.preventDefault();
    }
    searchHandler=async e =>{
       await this.setState({[e.target.id]:e.target.value})
    }
    render() {
        const{search, Products}= this.state;
        const redirectFuncton = this.state.redirectFuncton;
        if (search.length === 0){
            return (
                <div className="container">
                <div className="my-2">
                 <form onSubmit={this.handleSubmit}>
                        <input type="text" id="search" placeholder="Search" classname="input-border" size ="50" 
                        onChange={this.searchHandler}
                        value={search}/>
                    </form>
                    </div>
                    </div>
            )
        }else if (search.length >0){
        return (
           
            <div className="container">
              
                <div className="my-2">
                    <form >
                        <input type="text" id="search" placeholder="Search" classname="input-border" size ="50" 
                        onChange={this.searchHandler}
                        value={search}/>
                    </form>
                    </div>
            <div>
               { 
                Products.filter(searchingFor(search)).map(product =>
                <div className="row my-2 text-capitalize text-center">
                        <div className="container" key={product.id}>
                        <div className="col-10 mx-auto col-lg-2">
                        <img src={product.img} style ={{width: '5rem', height:"5rem"}} 
                            className="img-fluid" alt="product"/>
                        </div>
                        <div>
                            <h2>{product.title}</h2>
                            <h5>{product.info}</h5>                       
                        </div>
                        </div>
                        </div>
                    )
                }
                
            </div>
            </div>
    
        )
            
            }
    }
}
