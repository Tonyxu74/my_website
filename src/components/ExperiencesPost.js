import React from 'react'
import '../App.css'

function BodyMaker(bodyArray) {
    return (
        <div className='PostBody'>
            {bodyArray.map((text, index) => <p dangerouslySetInnerHTML={{__html: text}}></p>)}
        </div>
    )

}

function ImageParser(image_urls) {
    return (
        <div className='PostImage'>
            {image_urls.map((url, index) => <img className="Image" src={url}/>)}
        </div>
    )

}

// give this thing some buttons that either go to main page (home) or go back to top of experiences, also make it fade in on scroll

function ExperiencesPost({post_object}){
    return (
        
        <div className='PostBox' id={post_object['summary']}>
            <h1 className='PostTitle'>{post_object['title']}</h1>
            <h2 className='PostHeader'>{post_object['header']}</h2>
            {ImageParser(post_object['image_urls'])}
            {BodyMaker(post_object['body'])}
        </div>
        
    )
}


export default ExperiencesPost