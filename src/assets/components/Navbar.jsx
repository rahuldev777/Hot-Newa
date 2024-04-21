import React from 'react'

function Navbar({setcategory}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge text-bg-danger">News Today</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setcategory("business")}>business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setcategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setcategory("health")} >Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setcategory("science")} >Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setcategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setcategory("technology")}>Technology</div>
        </li>
   

       
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar