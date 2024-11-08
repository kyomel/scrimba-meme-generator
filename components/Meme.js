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

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return (
    <main>
      <div className="form">
        <input 
          className="form--input" 
          type="text" 
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          className="form--input" 
          type="text" 
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          className="form--button" 
          onClick={getMemeImage}>Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}