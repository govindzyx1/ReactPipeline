/* import React,{component} from 'react'
import ChildCOmponent from './ChildComponent'

class ParentComponent extends Component{

    constructor(props){
      super(props)

      this.state = {
          parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

}

  greetParent(childName){
    alert('Hello $ {this.state.parentName} from $ {childName}')
    //alert('Hello' + this.state.parentName)
  }

  render(){
    return(
      <div>
          <ChildCOmponent greetHandler={this.greetParent}/>
      </div>
  )
  }

export default ParentComponent */