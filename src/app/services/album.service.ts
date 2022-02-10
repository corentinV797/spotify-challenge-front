import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Album } from '../common/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAlbums(search: string): Observable<Album[]> {
    const url: string = 'https://api.spotify.com/v1/search?q='+search+'&type=album&market=ES&limit=20&offset=5';
    return this.httpClient.get<any>(url,
      {
        headers: {
          'Authorization': 'Bearer ' + 'BQDGY6R1eJhYJSBpeRpwA4cVnDD0khIpyB6j_njj4x9-QN5oY1vRF3OJ4v78Fjehh2GaM9Pn0jYMhb7YhYXBnLU1WCSCTeNyWcMhi8A-UiUgO_GIDwiRv2Ua3ZmkmsNGJXWpdA1Sxw3M-oQ'
        }
      }).pipe(
        map(res => {
          const albums:Album[] = [];

          res.albums.items.forEach((element: { id:string; name: string; images: { url: string; }[]; release_date: string; }) => {
            const tempAlbum = new Album(element.id, element.name, element.images[0].url, element.release_date);
            albums.push(tempAlbum);
          });

          return albums;
        })
      );
  }
}
