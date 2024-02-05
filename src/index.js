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
