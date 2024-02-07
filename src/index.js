import React from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'

//BOOkS
import {Books} from './Books'
import Book from './Book'

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


// ReactDom.render(<Booklist />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<BookList />)
