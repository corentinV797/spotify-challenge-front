export class Album {
  id: number = 0;
  spotifyId: string;
  title: string;
  thumbnail: string;
  releaseDate: string;
  constructor(
    id: string,
    title: string,
    thumbnail: string,
    releaseDate: string)
    {
      this.spotifyId=id;
      this.title=title;
      this.thumbnail=thumbnail;
      this.releaseDate=releaseDate;
    }
}
