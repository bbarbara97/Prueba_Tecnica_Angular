export class Tv {
  results?: {
    adult?: false;
    backdrop_path?: string;
    created_by?: [];
    episode_run_time?: [number];
    first_air_date?: string;
    genres?: [
      {
        id?: number;
        name?: string;
      }
    ];
    homepage?: string;
    id?: number;
    in_production?: false;
    languages?: [string];
    last_air_date?: string;
    last_episode_to_air?: {
      air_date?: string;
      episode_number?: number;
      id?: number;
      name?: string;
      overview?: string;
      production_code?: string;
      runtime?: number;
      season_number?: 1;
      show_id?: number;
      still_path?: null;
      vote_average?: number;
      vote_count?: number;
    };
    name?: string;
    next_episode_to_air?: null;
    networks?: [
      {
        id: number;
        name: string;
        logo_path: string;
        origin_country: string;
      }
    ];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: [string];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: [];
    production_countries?: [
      {
        iso_3166_1?: string;
        name?: string;
      }
    ];
    seasons?: [
      {
        air_date?: string;
        episode_count?: 11;
        id?: number;
        name?: string;
        overview?: string;
        poster_path?: string;
        season_number?: 1;
      }
    ];
    spoken_languages?: [
      {
        english_name?: string;
        iso_639_1?: string;
        name?: string;
      }
    ];
    status?: string;
    tagline?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
  };
}
