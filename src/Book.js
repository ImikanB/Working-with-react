import React from "react"

const Book = ({ img, title, author }) => {
  // const {img, title, author} = props
  const clickHandler = () => {
    alert('Hello People, its a god day to read a book.')
  }
  const complexExample = (author) => {
    alert(author + ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit unde veritatis vitae, impedit itaque nisi nemo. Illum sed reiciendis dolore?')
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit eveniet aspernatur, pariatur eligendi doloremque porro omnis corrupti quibusdam adipisci iusto possimus, facilis cum delectus natus? Magnam explicabo sunt sequi.</p>
      <button type='button' onClick={clickHandler}>
        Refernce Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  )
}

export default Book