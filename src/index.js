import React from 'react';
import {createRoot} from 'react-dom/client'

//CSS
import './index.css';

//SETUP VARS
  const title = "Happy Valentine's Day, Mouse!"
  const author = 'Laura Numeroff'
  const img = 'https://images-na.ssl-images-amazon.com/images/I/81GuYRxyGEL._AC_UL300_SR300,200_.jpg'

function Booklist() {
  return (
    <section className='booklist'>
      <Book job='developer'/>
      <Book title='random title' number={22}/>
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt=''/>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

// ReactDom.render(<Booklist />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<Booklist />)
