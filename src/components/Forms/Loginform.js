import React, { useEffect, useState } from 'react';
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import { useNewMoralisObject } from "react-moralis";

export  const Loginform = (props)=>{
    useEffect(()=>{
        async function fetchMembership() {
            const Membership = Moralis.Object.extend("Membership");
            const query = new Moralis.Query(Membership);
            query.equalTo("creator", "0x4645feccE6b003205Bc0458544ff0994303dB97c");
            const result = await query.find();
          }
    },[])
    const [userName,setuserName]=useState("");
    const { save } = useNewMoralisObject("User");
    console.log(props.user.id)
    // let [id]={props}
    // console.log(id)
    const data = {
        userName,
        id:props.user.id
    };
    console.log(data)
    const saveObject = async () => {
        const data = {
            userName,
            id:props.user.id
        };
        
        save(data, {
          onSuccess: (monster) => {
            // Execute any logic that should take place after the object is saved.
            alert("New object created with objectId: " + monster.id);
          },
          onError: (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Moralis.Error with an error code and message.
            alert("Failed to create new object, with error code: " + error.message);
          },
        });
      }
    return (
        <Card>
            <form className='card' onSubmit={(event)=>{
                event.preventDefault()
                saveObject()
            }}>
            <div class="form-group">
                <label for="exampleInputEmail1">Username :</label>
                <input type="text"
                 class="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="enter username"
                 onChange={(e)=>setuserName(e.target.value)}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </Card> 
    )

}