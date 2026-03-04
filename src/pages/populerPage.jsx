import React, { useEffect, useState } from "react";
import { Container, Badge } from "react-bootstrap";
import NavbarComponent from "../components/navBarComponent";
import { getTopAnime } from "../services/animeApi";
import ListAnimeComponent from "../components/ListAnimeComponent";
import HorizontalList from "../components/ListCardHorizontalComponent";

const PopulerPage = () => {
  const [listAnimeTv, setListAnimeTv] = useState([]);
  const [listAnimeMovie, setListAnimeMovie] = useState([]);
  const [listAnimeOva, setListAnimeOva] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const dataTv = await getTopAnime('tv');
      setListAnimeMovie(dataTv);
      const dataMovie = await getTopAnime('movie');
      setListAnimeTv(dataMovie);
      const dataOva= await getTopAnime('ova');
      setListAnimeOva(dataOva);
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      <NavbarComponent />

      {/* Hero Header Section */}
      <div className="popular-hero-section text-center">
        <Container>
          <Badge bg="primary" className="mb-3 px-3 py-2 text-uppercase ls-2">
            Most Anticipated
          </Badge>
          <h1 className="display-4 fw-bold text-white mb-3">
            Top Trending <span className="text-primary">Anime</span>
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
            Daftar anime paling populer dan banyak dibicarakan musim ini. 
            Update otomatis berdasarkan rating komunitas global.
          </p>
        </Container>
      </div>

      {/* Content Section */}
      <Container className="pb-5 mt-n4">
        <div className="glass-container p-4 rounded-4 shadow-lg">
          {/* <ListAnimeComponent datas={listAnime} /> */}
          <HorizontalList title={'Tv'} datas={listAnimeTv} linkTo={'/showall'} />
          <HorizontalList title={'Movie'} datas={listAnimeMovie} linkTo={'/showall'} />
          <HorizontalList title={'Ova'} datas={listAnimeOva} linkTo={'/showall'} />
        </div>
      </Container>
    </div>
  );
};

export default PopulerPage;