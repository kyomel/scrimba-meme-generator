import React from "react"
import memesData from "../memesData"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)


  function getMemeImage() {
    const memeArr = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memeArr.length)
    const url = memeArr[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  
  return (
    <main>
      <div className="form">
        <input 
          className="form--input" 
          type="text" 
          placeholder="Shut up"
        />
        <input 
          className="form--input" 
          type="text" 
          placeholder="and take my money"
        />
        <button 
          className="form--button" 
          onClick={getMemeImage}>Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" />
    </main>
  )
}