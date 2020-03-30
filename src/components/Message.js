import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }


    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button  onClick={() => this.changeMessage()} className="btn btn-success">Subscribe</button>
        </div>
    ) 
    //return <h1>Welcome visitors</h1>
    }
}

export default Message