import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // для *ngIf
import { FormsModule } from '@angular/forms';      // для [(ngModel)]
import { AlbumService, Album } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number | undefined): void {
    if (id) {
      this.albumService.deleteAlbum(id).subscribe(() => {
        this.albums = this.albums.filter(album => album.id !== id);
      });
    }
  }

  goToDetail(album: Album): void {
    if (album.id) {
      this.router.navigate(['/albums', album.id]);
    }
  }
}

