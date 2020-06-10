import React from 'react'

 const Header = () => {

    var today = new Date();
    var date = `Today's date is: ${(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`

    return (
    <div>
        <div><h1>Starviewer</h1></div>
        
        <p>{date}</p>
    </div>
    )
}

export default Header