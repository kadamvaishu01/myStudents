import React from 'react'

function Todos(props) {
  return (
    <div>
       <div className={props.activetable}>

<table className='w-full text-center mt-5'>
 <thead>
   <tr className='tableborder'>
       <th className='tableborder'>User ID</th>
       <th className='tableborder'> ID</th>
       <th className='tableborder'>Title</th>
       <th className='tableborder'> Complited</th>
   </tr>
 </thead>
 <tbody>
    {
    props.userlist.map((value , index) => (

       <tr className='tableborder' key={index}>
         <td className='tableborder'>{value.userId}</td>
         <td className='tableborder'> {value.id}</td>
         <td className='tableborder'>{value.title}</td>
         <td className='tableborder'>{value.completed}</td>
       </tr>
    ))
    }
 </tbody>
</table>
</div>
    </div>
  )
}

export default Todos
