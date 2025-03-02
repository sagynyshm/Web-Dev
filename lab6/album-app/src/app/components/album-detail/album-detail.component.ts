import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Для *ngIf
import { FormsModule } from '@angular/forms';      // Для [(ngModel)]
import { AlbumService, Album } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album = { title: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((data: Album) => {
      this.album = data;
    });
  }

  save(): void {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Album updated successfully!');
    });
  }

  return(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    if (this.album.id) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}

