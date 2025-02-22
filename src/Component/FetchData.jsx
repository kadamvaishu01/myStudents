import React, { useEffect, useState } from 'react'
import Todos from './Todos';
import Newscard from './Newscard';
import Lowder from './Lowder';
import Products from './Products';
import Child2 from './Child2';

function FetchData(props) {

  const [tabscolor, settabscolor] = useState('tabs');

  const [ncolor, setncolor] = useState('tabs');

  const [userlist, setuserlist] = useState([]);

  const [newslist, setnewslist] = useState([]);

  const [activetable, setactivetable] = useState('hidden');

  const [activenewstable, setactivenewstable] = useState('hidden');

  const [loaderShowhide, setloaderShowhide] = useState('hidden');

  const [pcolor , setpcolor] = useState ('tabs');

  const [activeproduct , setactiveproduct] = useState ('hidden');

  const [showhideProducts , setshowhideProducts] = useState ([]);

  function usercolor(){
    settabscolor('activetabs');
    setncolor('tabs');
    setactivenewstable('hidden')
    setloaderShowhide(' block')
    setpcolor('tabs')

    fetch('https://jsonplaceholder.typicode.com/todos')

    .then((response) => {
      return response.json()
    })
    .then((result) => {
      setuserlist(result)
      setactivetable('block');
      setloaderShowhide(' hidden')
    })

  }

  useEffect(() => {
    usercolor();
  },[])
  

  function newscolor(){
    setncolor('activetabs');
    settabscolor('tabs');
    setactivetable('hidden');
    setloaderShowhide(' block');
    setpcolor('tabs')

    fetch('https://newsapi.org/v2/everything?q=india&from=2024-12-15&sortBy=publishedAt&apiKey=245d8c1448934875b7bf5158788d8cc7')

      .then((newsresponse) => {
        return newsresponse.json()
      })
      .then((newsresult) => {
        setnewslist(newsresult.articles)
        setactivenewstable('block');
        setloaderShowhide(' hidden')
      })

  }

  function productcolor(){
    setncolor('tabs');
    settabscolor('tabs');
    setpcolor('activetabs')
    setactivenewstable('hidden');
    setactivetable('hidden');
    setloaderShowhide(' block');
    
    

    fetch('https://dummyjson.com/products')

    .then((productresponse) => {
      return productresponse.json()
    })
    .then((productresult) => {
      setshowhideProducts(productresult.products)
      setactiveproduct('block');
      setloaderShowhide('hidden');
    })
   
  }
  return (
    <>   
     <div className='w-full h-8 flex mt-5 cursor-pointer'>

          <div className={tabscolor} onClick={usercolor}>
            User
          </div>
          <div className={ncolor} onClick={newscolor}> 
            News
          </div>
          <div className={pcolor} onClick={productcolor}> 
            Products
          </div>
     </div>
            <Todos activetable={activetable}  userlist={userlist}/>
            <Newscard activenewstable={activenewstable} newslist={newslist}/>
            <Lowder loaderShowhide={loaderShowhide}/>
            <Products activeproduct={activeproduct} showhideProducts={showhideProducts} />
            <Child2 ctheme={props.ctheme} updateTheme={props.updateTheme}/>
      </>

  )
}


export default FetchData
