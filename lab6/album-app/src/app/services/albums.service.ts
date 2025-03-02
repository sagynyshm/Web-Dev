// src/app/album.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  userId?: number;
  id?: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // Get all albums
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  // Get single album by id
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  // Create a new album
  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/albums`, album);
  }

  // Update an existing album
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  // Delete an album
  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/albums/${id}`);
  }

  // Get photos for an album
  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/photos?albumId=${albumId}`);
  }
}

