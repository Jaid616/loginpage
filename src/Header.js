import React from 'react'

export default function Header() {
  return (
    <>
     <div className="container">
            <div className="row my-2 align-items-center">
                   <div className="col-md-6 px-">
                    <h3 style={{fontFamily:"'Inter', sans-serif"}}>Atools</h3>
                   </div>
                   <div className="col-md-6 d-none d-md-block">
                

                  

<div className="d-grid gap-4 d-md-flex justify-content-md-end">
  <button className="btn btn-dark me-md-2" type="button" style={{width:"135px"}}>Start Free Trail</button>
  <button className="btn bg-warning text-white" type="button" style={{width:"135px"}}>Login</button>
</div>
                   
                  </div>

            </div>
           

     </div>
    </>
  )
}
