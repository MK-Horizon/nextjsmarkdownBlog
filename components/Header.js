import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Header() {
  return (
    <>
    
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" > <img src="/images/WHITEPAPERICONTEXT.SVG" width={30} height={30}></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"/>
    
    
  </button>
  
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home<span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#blog">Blog</a>
      </li>
      </ul>
   
    <form class="d-flex ms-auto">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    
    <button class="btn btn-secondary " type="submit">Search</button>
    <form/>
  </div>
</nav>
    </>
  );
}
