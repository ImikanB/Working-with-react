import React from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'

//BOOkS
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81GuYRxyGEL._AC_UL600_SR600,400_.jpg',
  title: "Happy Valentine's Day, Mouse!",
  author: 'Laura Numeroff',
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg',
  title: 'The Housemaid',
  author: 'Freida McFadden',
}
const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL600_SR600,400_.jpg',
  title: "Little Blue Truck's Valentine",
  author: 'Alice Schertle',
}
const fourthBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81uMF1t16LL._AC_UL600_SR600,400_.jpg',
  title: "If Only I Had Told Her",
  author: 'Laura Nowlin',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}
      />
      <Book 
        img={secondBook.img} 
        title={secondBook.title}
        author={secondBook.author}
       />
       <Book 
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
       />
       <Book 
        img={fourthBook.img}
        title={fourthBook.title}
        author={fourthBook.author}
       />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img className='img' src={props.img} alt='' />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

// ReactDom.render(<Booklist />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<BookList />)
