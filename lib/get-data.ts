interface DataImages {
  large: string | string;
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
  msrp: number;
  official_url: string;
  year_published: number;
  publisher: string;
  difficulty: number;
  age: number;
  min_playtime: number;
  max_playtime: number;
  amount: number;
}

/**
 * Fetches data and returns an array of game objects
 * @param limit limits number of games to return (max: 100)
 * @param name The search query
 * @returns An array of games
 */
export async function getAllData(limit = 4, name = ""): Promise<Data[]> {
  let url;
  if (name === "") {
    url = `https://api.boardgameatlas.com/api/search?limit=${limit}&client_id=aFFIeNdONt`;
  } else {
    url = `https://api.boardgameatlas.com/api/search?limit=${limit}&name=${name}&client_id=aFFIeNdONt`;
  }

  const response = await fetch(url);
  const data = await response.json();

  // Make data into custom format
  const dataFiltered = data.games.map((game: any) => {
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
      publisher: game.primary_publisher,
      difficulty: game.average_learning_complexity,
      age: game.min_age,
      min_playtime: game.min_playtime,
      max_playtime: game.max_playtime,
      amount: 1,
    };
  });

  return dataFiltered;
}

/**
 * Fetch n random board games from the API
 * @param n Number of board games to retrieve
 * @returns Promise containing n random game objects in an array
 */
export async function getNRandomData(n: number): Promise<Data[]> {
  let output = [];

  const url =
    "https://api.boardgameatlas.com/api/search?random=true&client_id=aFFIeNdONt";

  for (let i = 0; i < n; i++) {
    const response = await fetch(url);
    const data = await response.json();

    // Make data into custom format
    let game = data.games[0];
    const filteredData: Data = {
      id: game.id,
      name: game.name,
      description_preview: game.description_preview,
      description: game.description,
      images: {
        large: game.images.large || game.image_url,
        medium: game.images.medium || game.image_url,
        original: game.images.original || game.image_url,
        small: game.images.small || game.thumb_url,
        thumb: game.images.thumb || game.thumb_url,
      },
      min_players: game.min_players,
      max_players: game.max_players,
      msrp_text: game.msrp_text || null,
      msrp: game.msrp,
      official_url: game.official_url,
      year_published: game.year_published,
      publisher: game.primary_publisher.name,
      difficulty: game.average_learning_complexity,
      age: game.min_age,
      min_playtime: game.min_playtime,
      max_playtime: game.max_playtime,
      amount: 1,
    };

    output.push(filteredData);
  }

  return output;
}

/**
 * Retrieve the games that match the search query
 * @param name Name or list of names to retrieve
 * @returns The game matching the name
 */
export async function getClosestMatch(
  name: string | string[] | undefined
): Promise<Data> {
  if (!name) {
    throw new Error("Name is undefined!");
  }

  if (Array.isArray(name)) {
    name = name[0];
  }

  const url = `https://api.boardgameatlas.com/api/search?name=${name}&client_id=aFFIeNdONt`;

  const response = await fetch(url);
  const data = await response.json();

  // Make data into custom format
  const game = data.games[0];
  const filteredData: Data = {
    id: game.id,
    name: game.name,
    description_preview: game.description_preview,
    description: game.description,
    images: {
      large: game.images.large || game.image_url,
      medium: game.images.medium || game.image_url,
      original: game.images.original || game.image_url,
      small: game.images.small || game.thumb_url,
      thumb: game.images.thumb || game.thumb_url,
    },
    min_players: game.min_players,
    max_players: game.max_players,
    msrp_text: game.msrp_text || null,
    msrp: game.msrp,
    official_url: game.official_url,
    year_published: game.year_published,
    publisher: game.primary_publisher.name || null,
    difficulty: game.average_learning_complexity,
    age: game.min_age,
    min_playtime: game.min_playtime,
    max_playtime: game.max_playtime,
    amount: 1,
  };

  console.log(filteredData);
  return filteredData;
}

/**
 * Deletes undefined values in the object to avoid JSON-Serialization validation error from Next.js
 * Taken from https://github.com/vercel/next.js/discussions/11209#discussioncomment-38480
 * @param obj The object to delete undefined from
 */
export const deleteUndefined = (obj: Record<string, any> | undefined): void => {
  if (obj) {
    Object.keys(obj).forEach((key: string) => {
      if (obj[key] && typeof obj[key] === "object") {
        deleteUndefined(obj[key]);
      } else if (typeof obj[key] === "undefined") {
        delete obj[key]; // eslint-disable-line no-param-reassign
      }
    });
  }
};
