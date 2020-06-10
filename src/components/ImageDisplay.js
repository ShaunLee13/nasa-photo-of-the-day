/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

const ImageDisplay = (props) => {
    const { data } = props

    // return null
    return (
        <div>
        <p>Picture of the Day for: {data.date} </p>
        <img src={data.url} alt='Image of the Day' />
        <a href={data.hdurl} target='_blank' rel='noopener noreferrer'>Click to view this image in HD!</a>
        <p>Title: {data.title}</p>
        <p>Image copyrighted by {data.copyright}</p>
        <p>{data.explanation}</p>
        </div>
    )
}

export default ImageDisplay