import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/common/album';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  library: Album[] = [];

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getAlbums().subscribe(
      data => this.library = data
    );
  }

}
