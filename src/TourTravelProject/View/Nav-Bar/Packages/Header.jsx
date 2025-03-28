import React from "react";

class Header extends Component{
    constructor(){
        super()
        this.state={                  //State
            title:'React App',           //Props
            userInput:'Plz enter packages to search'
        }
    }


    InputChange=(event)=>{ //if text box has value, store that in userinput prop else store string "Plz.enter product to search"
                
                this.setState({userInput:event.target.value ? event.target.value :
                    'plz.enter packages to search' })
    }


    render(){
        return(
            <div>
                <center>
                    <h1>Tour & Travel</h1>
                <center>
                    <input placeholder="Package to search"
                    onChange={this.InputChange}/> {/* */}
                </center>
                    <p>{this.state.userInput}</p>    {/*Display data from the prop */}
                </center>
                <hr/>
            </div>
        )
    }

}
export default Header;