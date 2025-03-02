import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Для *ngIf и *ngFor
import { AlbumService, Photo } from '../../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getPhotos(this.albumId).subscribe((data: Photo[]) => {
      this.photos = data;
    });
  }

  return(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}

