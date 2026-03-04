import axios from "axios";

const baseUrl = "https://api.jikan.moe/v4/";
export const getTopAnime = async (type) => {
  try {
    const response = await axios.get(`${baseUrl}top/anime`, {
      params: {
        limit: 25,
        type: type,
        filter: "bypopularity",
        rating: "pg13",
      },
    });

    const result = response.data.data.map((i) => ({
      image: i.images.webp.large_image_url,
      title: i.title,
      url: i.url,
      id: i.mal_id,
    }));

    return result;
  } catch (e) {
    console.log("API ERROR:", e.response?.data || e);
    return [];
  }
};

export const searchAnime = async (q) => {
  try {
    const response = await axios.get(`${baseUrl}anime`, {
      params: {
        page: 1,
        q,
        type: "tv",
      },
    });
    const result = response.data.data.map((i) => ({
      image: i.images.webp.large_image_url,
      title: i.title,
      url: i.url,
      id: i.mal_id,
    }));
    return result;
  } catch (e) {
    console.log("API ERROR:", e.response?.data || e);
    return [];
  }
};

export const getRecomendacionAnime = async () => {
  try {
    const response = await axios.get(`${baseUrl}recommendations/anime`);

    if (!response.data?.data || !Array.isArray(response.data.data)) {
      throw new Error("Data tidak valid diterima dari API.");
    }

    const uniqueResult = [];
    const seenMalIds = new Set();

    response.data.data.forEach((entryItem) => {
      if (Array.isArray(entryItem.entry)) {
        entryItem.entry.forEach((data) => {
          if (!seenMalIds.has(data.mal_id)) {
            seenMalIds.add(data.mal_id);
            uniqueResult.push({
              id: data.mal_id,
              title: data.title,
              url: data.url,
              image: data.images.webp.large_image_url,
            });
          }
        });
      }
    });

    return uniqueResult;
  } catch (e) {
    console.error("API ERROR:", e.message || e);
    return [];
  }
};

export const getAnimeById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}anime/${id}`);

    const anime = response.data.data;

    const result = {
      id: anime.mal_id,
      image: anime.images.webp.large_image_url,
      title: anime.title,
      title_english: anime.title_english,
      type: anime.type,
      episodes: anime.episodes,
      status: anime.status,
      duration: anime.duration,
      score: anime.score,
      synopsis: anime.synopsis,
      genres: anime.genres,
      studio: anime.studios[0]?.name || "Unknown",
      season: anime.season || "Unknown",
    };

    console.log(result);
    return result;
  } catch (e) {
    console.log("API ERROR:", e.response?.data || e);
    return null;
  }
};
