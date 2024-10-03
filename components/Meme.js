import React from "react"
import memesData from "../memesData"

export default function Meme() {
  let url
  function getMemeImage() {
    const memeArr = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArr.length)
    url = memeArr[randomNumber].url
    console.log(url)
  }
  return (
    <main>
      <p>{url}</p>
      <form className="form">
        <div>
          <label htmlFor="top-text">Top Text
            <input id="top-text" className="form--input" type="text" placeholder="Shut up"/>
          </label>
        </div>
        <div>
          <label>Bottom Text
            <input id="" className="form--input" type="text" placeholder="and take my money"/>
          </label>  
        </div>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </form>
    </main>
  )
}