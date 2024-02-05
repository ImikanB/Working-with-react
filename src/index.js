import React from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'

//BOOkS
const Books = [
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/81GuYRxyGEL._AC_UL600_SR600,400_.jpg',
  title: "Happy Valentine's Day, Mouse!",
  author: 'Laura Numeroff',
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg',
  title: 'The Housemaid',
  author: 'Freida McFadden',
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL600_SR600,400_.jpg',
  title: "Little Blue Truck's Valentine",
  author: 'Alice Schertle',
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/81uMF1t16LL._AC_UL600_SR600,400_.jpg',
  title: "If Only I Had Told Her",
  author: 'Laura Nowlin',
}
]

function BookList() {
  return (
    <section className='booklist'>
      {Books.map((book) => {
        const {img, title, author} = book;
        return (
         <Book book={book}/>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const {img, title, author, children} = props.book
  return (
    <article className='book'>
      <img className='img' src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

// ReactDom.render(<Booklist />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<BookList />)
