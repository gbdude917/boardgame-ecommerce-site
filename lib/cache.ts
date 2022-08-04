import fs from "fs";
import path from "path";

import { getAllData } from "./get-data";

// Interfaces
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
}

// Constants
const CACHE_PATH = path.resolve(".games");

/**
 * Fetches top 100 games and returns an array of the games' names only.
 * @returns names
 */
async function fetchGame(): Promise<String[]> {
  console.log("Getting games...");
  const data = await getAllData(100);

  const names = data.map((game: Data) => {
    return game.name;
  });

  return names;
}

/**
 * Retrieves the games' names from the cache to use in getStaticPaths in [slug].tsx
 * @returns cachedData
 */
export default async function getGames() {
  let cachedData;

  try {
    cachedData = JSON.parse(
      fs.readFileSync(path.join(__dirname, CACHE_PATH), "utf8")
    );
  } catch (error) {
    console.log("Game cache not initialized");
  }

  if (!cachedData) {
    const data = await fetchGame();

    try {
      fs.writeFileSync(
        path.join(__dirname, CACHE_PATH),
        JSON.stringify(data),
        "utf8"
      );
    } catch (error) {
      console.log("Error writing to file.");
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}
