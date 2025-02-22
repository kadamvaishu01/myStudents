import React, { useState } from 'react'

import $, { ajax, error } from 'jquery'
import jqueryValidation from 'jquery-validation';

function UserForm(props) {

    const [uname , setuname] = useState('');
  
    function formSubmit(ev){
        ev.preventDefault();

      /*  $('.uname-error').html('');

    let name = $('#username').val();

    if (name == ''){
        $('.uname-error').html('Name is Required!');
    }

    $('.email-error').html('');

    let ename = $('#email').val();

    if (ename == ''){
        $('.email-error').html('Email is Required!');
    }

    let cname = $('#Contact').val();

    if (cname == ''){
        $('.Contact-error').html('Contact no is Required!');
    }*/
        $.validator.addMethod("specialChars", function( value, element ) {
          var regex = new RegExp("^[a-zA-Z ]+$");
  
          if (!regex.test(value)) {
             return false;
          }
          return true;
      }, "Invalid Name!");

      $.validator.addMethod("phoneUS", function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 && 
        phone_number.match(/^[0-9]{10}$/);
    }, "Please specify a valid phone number");

        $("#user-info").validate({
          rules: {
              username: {
                  required: true,
                  minlength : 5,
                  maxlength : 60,
                  specialChars: true
              },
              email : {
                required: true,
                minlength : 5,
                maxlength : 15,
            },
            Contact:{
              required :true,
              phoneUS:true
            },
            Address:{
              required:true,
              minlength : 5,
              maxlength : 60,
              specialChars: true
            }
          },
          messages: {
            username: {
                  required: "this field is required",
              },
              email :{
                required: "this field is required"
              },
              Contact :{
                required: "this field is required"
              },
              Address:{
                 required: "this field is required"
              },
          },
          submitHandler: function (form) { 
            $.ajax({
              url: "http://localhost/phptraning/StringFunction/register.php",
              method: "POST",
              data:{
              name: $("#username").val(),
              email:$("#email").val(),
              contact:$("#Contact").val(),
              Address:$("#Address").val(),
              Gender:$("#Gender").val()
              },
              async:false,
              success: function(response){
               props.setshowForm('hidden')
               props.getUsers()
              },
              error : function(error){
               alert('failed')
              }

            });
                 
          }
      });
  
}

    function changeNmaeHandler(e){
        setuname(e.target.value);
    }
    return (
    <div>
      <section className="rounded-md p-2 bg-white">
    <div className="flex items-center justify-center my-3">
      <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2"></div>
        <h2 className="text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Already have an account? Sign In
        </p>
        <form className="mt-5" onSubmit={formSubmit} id='user-info'>
          <div className="space-y-4">
            <div>
              <label className="text-base font-medium text-gray-900">
                User Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="Full Name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" id='username' name='username' style={{color:'black'}}
                  //  value={uname} onChange={changeNmaeHandler}
                  />
                  {/* <div className='text-red-600 uname-error'></div> */}
              </div>
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">
                Email 
              </label>
              
              <div className="mt-2">
                <input
                  placeholder="Email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="email" id='email' style={{color:'black'}}
                />
                {/* <div className='text-red-600 email-error'></div> */}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Contact no.
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Contact"
                  type="Contact"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="Contact" id='Contact' style={{color:'black'}}
                />
                 {/* <div className='text-red-600 Contact-error'></div> */}
              </div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Address
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Address"
                  type="Address"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="Address" id='Address' style={{color:'black'}}
                />
              </div>
              <div className="flex items-center  mt-3">
                <label className="text-base font-medium text-gray-900">
                  Gender
                </label>
                </div>
                <div className="mt-2">
                <select className='border-2 border-solid border-black' id='Gender' >
                    <option> Male </option>
                    <option> Female </option>
                </select>
                </div>
             
            </div>
            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="submit">
               Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>



    </div>
  )
}

export default UserForm
