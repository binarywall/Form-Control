import React, { useState } from 'react'
import "./Form.css"

export const Form = () => {

    const initialValues={name:"",contact:"",email:""}

    const[userdata,setUserdata]=useState([{name:"Mohit",contact:1234567980,email:"email2@gmail.com"},{name:"Deeraj",contact:7894561320,email:"email1@gmail.com"}])
    const [input,setInput]=useState({name:"",contact:"",email:""})
    
    // Function for sort Array by Object propties Name
    function compairName(a,b){
       const name1=a.name.toUpperCase();
       const name2=b.name.toUpperCase();

       let comparsion=0;
        
       if(name1>name2) comparsion=1;
       else if(name1<name2) comparsion=-1;
       return comparsion;
    }

    // let sorted=userdata;
    let sorted=userdata.sort(compairName);
    // console.log(sorted)

    const handelChnage=(e)=>{
        // console.log(e.target.value)
        const {name,value}=e.target;
        setInput({...input,[name]:value});
    }

    const check = () => {
        if (input.name == '' || input.contact == '' || input.email=='') {
          return 1;
        }
      }

    const addData=()=>{
        if(check()){
            alert("First Fill The Form")
        }else{
            // console.log(input)
            let updateData=[...userdata,input]
            setUserdata(updateData)
            // console.log(userdata)
            setInput(initialValues)
        }
        
    }

  return (
    <>
        <h1>Input Form</h1>
        <div className='grid'>
            <div className='grid-item'>
                <label htmlFor="Name" >Name</label>
                <input type="text" placeholder='Name'name="name" value={input.name} onChange={handelChnage}/><br />
                <label htmlFor="contact">Contact</label>
                <input type="text" placeholder='Mobile No' name="contact" max={10} min={10} value={input.contact} onChange={handelChnage}/><br />
                <label htmlFor="contact">Email</label>
                <input type="email" placeholder='email' name="email" value={input.email} onChange={handelChnage}/>
                <button onClick={addData}>Add Data</button>
            </div>
            <div className='grid-item'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                    {
                        
                        sorted.map((ele,indx)=>(
                            <tr key={indx}>
                                <td>{ele.name}</td>
                                <td>{ele.contact}</td>
                                <td>{ele.email}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    </>
  )
}
