import React, {useState, useEffect} from 'react'
import $, { get } from 'jquery'
import UserForm from './UserForm';
import Editusers from './Editusers';
import BackButton from './BackButton';

function UserList() {

    const[userData, setuserData] = useState([]);

    const[showForm, setshowForm] = useState('hidden');

    const[ChangeForm, setChangeForm] = useState('hidden');
    

    function getUsers(){

        $.ajax({
            url : 'http://localhost/phptraning/StringFunction/getUsers.php',
            method : 'GET',
            async :false,
            success : function(result){
                setuserData(JSON.parse(result));
            },
            error : function(er){
                console.log(er);
            }
         })
        
    }

    useEffect(() =>{

       getUsers(); 

    },[])

    function hadlerForm(){    
        setshowForm('block');
    }
    function changeform(id){
        setChangeForm('block');

        $.ajax({
            url:'http://localhost/phptraning/StringFunction/ArrayFunction/getuserdata.php',
            method:'POST',
            data:{
                user_id:id
            },
            success: function(result){


            },
            error: function(err){
                console.log(err);
            }
        })
    }

    function deleterecord(userid){

        let conf = confirm('Are you sure You want to delete this');
        if(conf == false){
            return false;
        }
        $.ajax({
            url : 'http://localhost/phptraning/StringFunction/Delete.php',
            method : 'POST',
            data: {
                userid: userid
            },
            success: function (result) {
                getUsers();

            },
            error: function (err) {
                console.log(err);
            }
         })

    }
    
  return (
    <div>
        <div  className={showForm}>
            <BackButton setChangeForm={setChangeForm}  setshowForm={setshowForm}/>
            <UserForm showForm={showForm} setshowForm={setshowForm} getUsers={getUsers}/>
        </div>
       
        <div  className={ChangeForm}>
        <BackButton setChangeForm={setChangeForm}  setshowForm={setshowForm} />
            <Editusers showForm={ChangeForm} setChangeForm={setChangeForm} getUsers={getUsers}/>
        
        </div>
        <div className={showForm == 'hidden' && ChangeForm=='hidden' ? 'block' : 'hidden'}>
            
        <button className='bg-black text-white w-[100px] h-10 rounded-lg font-bold mt-[20px] ms-[80%]'
        onClick={hadlerForm}>+Add</button>
        <div className='grid grid-cols-8 w-[90%] m-auto mt-[20px]'>
            <div className='font-bold text-lg '>ID</div>
            <div className='font-bold'>Name</div>
            <div className='font-bold'>Email</div>
            <div className='font-bold'>Phone Number</div>
            <div className='font-bold'>Gender</div>
            <div className='font-bold'>Address</div>
            <div className='font-bold'>Creted Date</div>
            <div className='font-bold'>Action</div>
        </div>

    {
        userData.map((user) => (

            <div className='grid grid-cols-8 w-[90%] m-auto mt-[20px]'>
            <div className='font-bold'>{user.id}</div>
            <div className='font-bold'>{user.name}</div>
            <div className='font-bold'>{user.email}</div>
            <div className='font-bold'>{user.mobile}</div>
            <div className='font-bold'>{user.gender}</div>
            <div className='font-bold'>{user.address}</div>
            <div className='font-bold'>{user.created_at}</div>
            <div className='font-bold'><span className=' text-xl'><ion-icon name="create-outline" 
            onClick={()=>{changeform(user.id)}}>
                </ion-icon></span>
                <span className='ms-5 text-red-600 text-xl'><ion-icon name="trash-outline" onClick={()=>{deleterecord(user.id)}}></ion-icon></span>
            </div>
            </div>

        ))
    }
    </div>
    
    </div>
  )
}

export default UserList
