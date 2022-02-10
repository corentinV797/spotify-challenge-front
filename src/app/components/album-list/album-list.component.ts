import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/common/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  doSearch(search: string): void {
    this.albumService.getAlbums(search).subscribe(
      data => this.albums = data
    );
  }

}
