import React from 'react';
import './Product.css' //custom css file imported

const ProductList = (prodlist) => {         //functional component that accepts the products data passed to it

    //custom method, called from the view in the Render()  below
    const renderList = ({ prodlist }) => {    //temp argument that receives the data passed to this component by Products Component

        if (prodlist) {                       //if data exists
            return prodlist.map((data) => { //map() function iteratively executes once for each record, in the json data
                return (
                    <div className='packages'>

                        <div className="packages-box">

                            <div className="packages-card">
                                <div key={data.id}>
                                    <div className="packages-img">
                                        <img src={data.img} alt={data.Name} />
                                    </div>

                                    <div className="packages-text">
                                        <div className="p-head">
                                            <h2>{data.Name}</h2>
                                        </div>

                                        <p>{data.discription}</p>
                                        <p className="price">{data.price}</p>

                                        <a href="#" className="p-btn">Contact us</a>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className="kranti">
                {renderList(prodlist)}  {/* Calls the above custom function to render the data in the view */}
        </div>
    )
}

export default ProductList;