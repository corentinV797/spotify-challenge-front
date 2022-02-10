import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/common/album';
import { AlbumService } from 'src/app/services/album.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumService, private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(search: string): void {
    this.albumService.getAlbums(search).subscribe(
      data => this.albums = data
    );
  }

  addAlbum(index: number): void {
    this.libraryService.addAlbum(this.albums[index]).subscribe(
      data => this.router.navigate(['/library'])
    );
  }
}
