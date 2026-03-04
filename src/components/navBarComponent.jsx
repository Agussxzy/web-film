import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
  const location = useLocation(); 

  return (
    <Navbar 
      fixed="top" 
      expand="lg" 
      variant="dark" 
      className="py-3 shadow-sm transition-all"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(15px)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1100
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold fs-3 text-white d-flex align-items-center"
        >
          <span style={{ color: '#0d6efd' }}>Ani</span>Stream
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center"> 
            {[
              { name: 'Home', path: '/' },
              { name: 'Populer', path: '/populer' }
            ].map((item) => (
              <Nav.Link 
                key={item.path}
                as={Link} 
                to={item.path} 
                className={`px-3 mx-1 position-relative nav-hover ${location.pathname === item.path ? 'text-primary fw-bold' : 'text-white-50'}`}
                style={{ transition: '0.3s' }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
                       style={{ width: '20px', height: '2px', borderRadius: '2px' }} />
                )}
              </Nav.Link>
            ))}
            
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .nav-hover:hover {
          color: white !important;
          transform: translateY(-2px);
        }
        .navbar-toggler:focus {
          box-shadow: none;
        }
      `}</style>
    </Navbar>
  );
}

export default NavbarComponent;
