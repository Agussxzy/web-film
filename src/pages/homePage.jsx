import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navBarComponent";
import InputCompnent from "../components/inputCompnent";
import { getRecomendacionAnime, searchAnime } from "../services/animeApi";
import ListAnimeComponent from "../components/ListAnimeComponent";
import { Container } from "react-bootstrap";

const homePage = () => {
  const [valueInput, setValueInput] = useState("");
  const [dataAnime, setDataAnime] = useState([]);
  const [recomendacion, setRecomendacion] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      if (valueInput.trim() !== "") {
        const fetchedData = await searchAnime(valueInput);
        setDataAnime(fetchedData);
      } else {
        setDataAnime([]);
      }
    };
    fetchData();
  }, [valueInput]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getRecomendacionAnime()
      setRecomendacion(fetchedData)
    }
    fetchData()
  }, [])

  const displayData = valueInput.trim() !== '' ? dataAnime : recomendacion
  return (
    <div className="main-wrapper">
      <NavbarComponent />
      
      {/* Hero Section / Header */}
      <header className="text-center py-5 bg-dark mb-4 shadow-sm" style={{marginTop: '170px'}}>
        <h1 className="fw-bold text-white">Explore <span style={{color: '#0d6efd', height: '30%'}}>Anime</span></h1>
        <p className="text-secondary">Temukan ribuan judul anime favoritmu di sini</p>
      </header>

      <Container className="fade-in">
        <div className="d-flex flex-column align-items-center">
          
          {/* Section Input */}
          <div className="w-100 d-flex justify-content-center mb-5">
             <InputCompnent setValueInput={setValueInput} />
          </div>

          {/* Section List Anime */}
          <div className="w-100">
             <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-2">
                <h4 className="mb-0 fw-semibold text-light">{valueInput.trim() == '' ? 'rekomendasi anime:' : 'Hasil pencarian:'}</h4>
                <small className="text-muted">{displayData.length} Judul ditemukan</small>
             </div>
             
             <ListAnimeComponent datas={displayData} />
          </div>

        </div>
      </Container>
    </div>
  );
};

export default homePage;
