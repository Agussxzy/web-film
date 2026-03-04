import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Search } from "lucide-react"; 

const InputComponent = ({ setValueInput }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleClick = () => {
    if (value.trim() !== "") {
      setValueInput(value);
      setValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleClick();
  };

  return (
    <div className="d-flex justify-content-center w-100 py-3">
      <InputGroup 
        className="shadow-lg border-0" 
        style={{
          maxWidth: '650px',
          width: '90%',
          position: 'fixed', 
          top: '100px', 
          zIndex: 13,
          borderRadius: '15px',
          backgroundColor: '#1a1d20', 
          border: '1px solid #343a40', 
          padding: '6px'
        }}
      >
        <Form.Control
          placeholder="Cari anime favoritmu"
          className="bg-transparent border-0 text-white ps-3"
          style={{ 
            boxShadow: 'none', 
            fontSize: '1rem',
            color: '#fff' 
          }}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        
        <Button 
          variant="dark" 
          onClick={handleClick}
          className="d-flex align-items-center justify-content-center border-0"
          style={{ 
            borderRadius: '10px',
            backgroundColor: '#0d6efd', 
            padding: '10px 20px',
            transition: '0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.filter = 'brightness(1.2)'}
          onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
        >
          <Search size={18} className="me-2" />
          <span className="fw-semibold">Cari</span>
        </Button>
      </InputGroup>

      
      <style>{`
        input::placeholder {
          color: #6c757d !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default InputComponent;
