import React, {Component} from 'react'

class LifecycleA extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'JSON'
        }
        console.log('Life Cycle A')
    }

    static getDrivedStateFromProps(props, state){
         console.log('Life Cycle A getDrivedStateFromProps')
         return null

    }

    componentDidMount(){
        console.log('Life Cycle A componentDidMount')
    }

    render(){
        console.log('Life Cycle A rendered')
        return(
            <div></div>
        )
    }
}

export default LifecycleA