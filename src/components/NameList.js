import React from 'react'

function NameList(){
    const names = ['C','C++','Java']
    const person = [
        {
            id:1,
             name: 'Dean',
             age: 26,
             skills : 'React'},
            {
                id:2,
            name: 'Cruise',
            age: 25,
            skills : 'JS'},
            {id:3,
                name: 'Coddy',
                age: 24,
                skills : 'Node'}
    ]
   // const names = ['raj','verma','kumar']
    // const nameList = name.map(name => <h2>{name}</h2>)
    const personList = person.map(person => <h2>I'm {person.name}. I'm {person.age} year old. I know {person.skills}</h2>)
    return(
        <div>
                {personList}
        </div>
    ) 
}

   
export default NameList