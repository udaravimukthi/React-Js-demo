import React from  'react'
import NameListItem from './NameListItem'

function NameList(){
    return(
        <div>
        <h1>Name List</h1>
        <hr />
        <ul>
            <NameListItem name="udara" course="c" />
            <NameListItem name="vimukthi" course="vb" />
        </ul>
        </div>
    )
}

export default NameList;