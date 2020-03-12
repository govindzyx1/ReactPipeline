import React from 'react'

const Hello = () => {
/*    return(
        <div className='dummyClass'>
            <h1>AT-SCALE GENOMIC DIAGNOSTICS</h1>
        </div>
    )
}*/

    return React.createElement('div',
                                {id:'hello', className: 'dummyClass'},
                             React.createElement('h1','null','AT-SCALE GENOMIC DIAGNOSTICS'))
}
export default Hello