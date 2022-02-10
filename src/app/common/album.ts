export class Album {
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
