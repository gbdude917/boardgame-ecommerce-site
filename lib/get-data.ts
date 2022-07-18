interface DataImages {
  large: string;
  medium: string;
  original: string;
  small: string;
  thumb: string;
}

interface Data {
  id: string;
  name: string;
  description_preview: string;
  description: string;
  images: DataImages;
  min_players: number;
  max_players: number;
  msrp_text: string;
  official_url: string;
  year_published: number;
}

export async function getAllData(): Promise<Data[]> {
  const url = "https://api.boardgameatlas.com/api/search?client_id=aFFIeNdONt";

  const response = await fetch(url);
  const data = await response.json();

  // Make data into custom format
  const dataFiltered = data.games.map((game: Data) => {
    return {
      id: game.id,
      name: game.name,
      description_preview: game.description_preview,
      description: game.description,
      images: {
        large: game.images.large,
        medium: game.images.medium,
        original: game.images.original,
        small: game.images.small,
        thumb: game.images.thumb,
      },
      min_players: game.min_players,
      max_players: game.max_players,
      msrp_text: game.msrp_text,
      official_url: game.official_url,
      year_published: game.year_published,
    };
  });

  return dataFiltered;
}

/**
 * Fetch n board games from the API
 * @param n Number of board games to retrieve
 * @returns Promise containing n Data objects in an array
 */
export async function getNData(n: number): Promise<Data[]> {
  const url = `https://api.boardgameatlas.com/api/search?limit=${n}&client_id=aFFIeNdONt`;

  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  // Make data into custom format
  const filteredData = data.games.map((game: Data) => {
    return {
      id: game.id,
      name: game.name,
      description_preview: game.description_preview,
      description: game.description,
      images: {
        large: game.images.large,
        medium: game.images.medium,
        original: game.images.original,
        small: game.images.small,
        thumb: game.images.thumb,
      },
      min_players: game.min_players,
      max_players: game.max_players,
      msrp_text: game.msrp_text,
      official_url: game.official_url,
      year_published: game.year_published,
    };
  });

  return filteredData;
}
