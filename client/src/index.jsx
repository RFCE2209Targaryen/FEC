
import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import Product from './components/productComponent/Product.jsx'
import QandA from './components/questionsComponent/QandA.jsx'
import Related from './components/relatedComponent/Related.jsx'
import Reviews from  './components/reviewComponent/Reviews.jsx'



const App = () => {
  return (
    <>
    <h1 className="title">Shopping</h1>
    <Product />
    {/* <QandA />
    <Related />
    <Reviews /> */}
    </>
  )
}
axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products?page=1&count=5`, {headers: {'Authorization': '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'}})
.then((res) => {
  console.log(res)
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)