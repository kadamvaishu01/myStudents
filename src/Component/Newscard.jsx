import React from 'react'

function Newscard(props) {
  return (
    <div>
       <div className={props.activenewstable}>

           <div className="grid grid-cols-2">

        {
          props.newslist.map((news , index) => (

      <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96 m-auto" key={index}>
        <div className="w-full font-bold text-lg"> {news.title} </div>
      <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
        <img className="w-full h-full object-cover" src={news.urlToImage} alt="profile-picture" />
      </div>
      <div className="p-6 text-center">
        <h4 className="mb-1 text-xl font-semibold text-slate-800">
          {news.author}
        </h4>
        <p
          className="text-sm font-semibold text-slate-500 uppercase">
          {news.name}
        </p>
        <p className="text-base text-slate-600 mt-4 font-light ">
            {news.description}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7">
        <button className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Follow
        </button>
      </div>
    </div>
    ))
  }


</div>

</div>
    </div>
  )
}

export default Newscard
