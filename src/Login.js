import React, { useState } from "react";

export default function Login() {
  
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [msg,setmsg] = useState("");

  const data ={
     email,
     password
  }

  const passwordHandler = (e)=>{
        setpassword(e.target.value);
  }

  const emailHandler = (e)=>{
    setemail(e.target.value);

  }

  const login =(e)=>{
    e.preventDefault();
      fetch("https://reqres.in/api/login",{
        method:"POST",
        body : JSON.stringify(data),
        headers:{
          'content-Type' : "application/json"
        }
      }).then((response)=>{
             if(!response.ok){
                    
                   return response.json().then((errresponsedata)=>{
                        throw Error(errresponsedata.error);
                   })


             }
        return response.json();
      }).then((responsedata)=>{
             
           
             setmsg(responsedata.token);
                 
            
            
      }).catch((err)=>{
            setmsg(err.message);
          
      })
    
    

  }

  return (
    <>
    
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 text-center">
            <div className="row align-items-center " style={{ height: "80vh" }}>
              <div className="col-1 col-xl-2"></div>
              <div className="col-10 col-xl-8">
                <p className="text-danger">{msg}</p>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "1rem",
                  }}
                >
                  Welcome Back
                </h3>
                <p> Sub-title goes here</p>
                <form className="py-3" onSubmit={login}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email*"
                      value={email}
                      onChange={emailHandler}

                    ></input>
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password *"
                      
                      value={password}
                      onChange={passwordHandler}
                    ></input>
                  </div>

                  <button type="submit" className="btn btn-dark w-100">
                    Login
                  </button>
                </form>
                <div className="row py-2 " style={{ fontSize: "12px" }}>
                  <div className="col-7">
                    <div className="row">
                      <div className="col-1">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <div className="col-10 text-start">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Remember Password
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <p className="text-end">Forget Password ?</p>
                  </div>
                </div>
              </div>
              <div className="col-1 col-xl-2"></div>
            </div>
          </div>
          <div
            className="col-lg-8 col-md-6 bg-light d-none d-md-block"
            style={{ height: "88vh" }}
          >
            
          </div>
        </div>
      </div>
    </>
  );
}
