import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Album } from '../common/album';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private baseUrl = 'http://localhost:8081/albums';

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<GetResponseAlbums>(this.baseUrl).pipe(
      map(response => response._embedded.albums)
    );
  }

  addAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(this.baseUrl, album);
  }

  deleteAlbum(id: number): Observable<unknown> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}

interface GetResponseAlbums {
  _embedded: {
    albums: Album[];
  }
}
