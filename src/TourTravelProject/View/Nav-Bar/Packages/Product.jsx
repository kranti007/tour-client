import React, { Component } from "react";

//Raect is a default import. Default imports are exported with 'export' default <classname>'. There is only one default export.
//{ }: is used for a name import. Member imports that are exported with 'export <function/props/class>'.
//There can be multiple member exports.

import JSON from './TourTravel.json';
import ProductList from './ProductList';



class Product extends Component{
    constructor(){
        super();
        this.state={                    //states
            title:'Our Packages',       //Props
            Products: JSON            //assign the .json data file to the prop
        }
    }

    render(){
        return(
            <div>
            <h1>{this.state.title}</h1>
            <ProductList prodlist={this.state.Products}/>  {/* Pass data from .json  file to productList component Prop */}
            </div>
        )
    }
}
export default Product;