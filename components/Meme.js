import React from "react"
import memesData from "../memesData"

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("")


  function getMemeImage() {
    const memeArr = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArr.length)
    setMemeImage(memeArr[randomNumber].url)
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
        <img src={memeImage} className="meme--image" />
      </div>
    </main>
  )
}