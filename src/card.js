import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div>{props.text}</div>
    )
}

export default Card