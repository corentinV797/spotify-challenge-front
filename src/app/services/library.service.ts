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
}

interface GetResponseAlbums {
  _embedded: {
    albums: Album[];
  }
}
