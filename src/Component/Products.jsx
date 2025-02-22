import React from 'react'

function Products(props) {
  return (
    <div>
      <div className={props.activeproduct}>
        
        <div className="grid grid-cols-4">

        {
          props.showhideProducts.map((prod , index) => (

            <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96 m-auto" key={index}>
           
          <div className="m-2.5 overflow-hidden rounded-md h-72 flex justify-center items-center">
            <img className="w-full h-full object-cover" src={prod.images} alt="profile-picture" />
          </div>
          <div className="w-full font-bold text-lg text-center"> {prod.title} </div>
          <div className="p-2 text-center">
            <p className="text-xl font-semibold text-red-500 uppercase">
              ${prod.price}
            </p>
            <p className="text-base text-slate-600 mt-2 font-light ">
                {prod.description}
            </p>

          </div>
          <h4 className="mb-1 text-xl font-semibold text-slate-800 text-center">
              {prod.tags}
            </h4>
          </div>
          ))
        }
      
    </div>
      </div> 
    </div>
  )
}

export default Products
