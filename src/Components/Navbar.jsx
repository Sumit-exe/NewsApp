
const Navbar = ({setCategory, setCountry}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsApp</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory('technology')} >Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory('business')}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory('health')}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory('sports')}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory('entertainment')}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory('science')}>Science</div>
        </li>
        
      </ul>
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Country
  </button>
  <ul className="dropdown-menu">
    <li><div className="dropdown-item" style={{cursor:'pointer'}} onClick={()=>setCountry('us')}  >United States </div></li>
    <li><div className="dropdown-item" style={{cursor:'pointer'}} onClick={()=>setCountry('in')}>India</div></li>
    <li><div className="dropdown-item" style={{cursor:'pointer'}} onClick={()=>setCountry('cn')}>China</div></li>
    <li><div className="dropdown-item" style={{cursor:'pointer'}} onClick={()=>setCountry('jp')}>Japan</div></li>
    <li><div className="dropdown-item" style={{cursor:'pointer'}} onClick={()=>setCountry('ru')}>Russia</div></li>
  </ul>
</div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
