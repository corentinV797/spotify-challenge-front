export class Album {
  id: string;
  title: string;
  thumbnail: string;
  releaseDate: string;
  constructor(
    id: string,
    title: string,
    thumbnail: string,
    releaseDate: string)
    {
      this.id=id;
      this.title=title;
      this.thumbnail=thumbnail;
      this.releaseDate=releaseDate;
    }
}
