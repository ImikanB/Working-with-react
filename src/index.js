import React from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'

//BOOkS
const Books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81GuYRxyGEL._AC_UL600_SR600,400_.jpg',
    title: "Happy Valentine's Day, Mouse!",
    author: 'Laura Numeroff',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg',
    title: 'The Housemaid',
    author: 'Freida McFadden',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL600_SR600,400_.jpg',
    title: "Little Blue Truck's Valentine",
    author: 'Alice Schertle',
  },
  {
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81uMF1t16LL._AC_UL600_SR600,400_.jpg',
    title: 'If Only I Had Told Her',
    author: 'Laura Nowlin',
  },
]

function BookList () {
  return (
    <section className='booklist' >
      {Books.map((book) => {
        return (
          <Book key={book.id} {...book}/>
        );
      })}
    </section>
  )
}

const Book = ( {img, title, author} ) => {
  // const {img, title, author} = props
  const clickHandler = () => {
    alert ('Hello Readers');
  };
  const complexExample = (author) => {
   alert (author)
  }
  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt='' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Refernce Example</button>
      <button type='button' onClick={() => complexExample(author)}>Complex Example</button>
    </article>
  );
}

// ReactDom.render(<Booklist />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<BookList />)
