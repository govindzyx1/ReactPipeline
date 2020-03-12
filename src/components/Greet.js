import React from 'react'

/*function Greet(){
    return <h1>Hello Govind</h1>
}*/

//const Greet = () => <h1>Haystack Analytics</h1>
//export const Greet = ({name, employee}) => {
    //console.log(props)
    //props.name = 'Govind'


  const Greet = props => {
    const {name,employee} = props
    return(
        <div>
            <h1>
                 Haystack {name} a.k.a {employee}
               {/*} Haystack {props.name} a.k.a {props.employee}*/}
            </h1>
           {/*} {props.children}*/}
        </div>
    )
}


/*const Greet = props => {
    console.log(props)
    return(
        <div>
            <h1>
                Haystack {props.name} a.k.a {props.employee}
            </h1>
            {props.children}
        </div>
    )
}*/
export default Greet