import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type MediaType = 'image' | 'video';

interface AttendanceMedia {
  id: string;
  type: MediaType;
  url: string;
  title: string;
  institutionArea: string;
  date: string;
}

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria implements OnInit, OnDestroy {
  institutionName = 'UPC - Sede Capilla del Monte';
  institutionUrl = 'https://www.upc.edu.ar/areas/sedecapilladelmonte/';

  constructor(private sanitizer: DomSanitizer) {}

  mediaItems: AttendanceMedia[] = [
    {
      id: '1',
      type: 'image',
      url: '/galeria/galeria1.png',
      title: 'Convocatoria — Sede Regional Capilla del Monte Bernardo Houssay',
      institutionArea: 'Dirección institucional ISBH',
      date: '2026-06-24 08:04',
    },
    {
      id: '2',
      type: 'image',
      url: '/galeria/galeria2.png',
      title: 'Charla Institucional UPC y Gobierno de Córdoba',
      institutionArea: 'Comunicación y difusión institucional',
      date: '2026-06-23 14:48',
    },
    {
      id: '3',
      type: 'image',
      url: '/galeria/galeria3.png',
      title: 'Estudiá en la Sede Regional Capilla del Monte',
      institutionArea: 'Universidad Provincial de Córdoba',
      date: '2026-06-23 15:10',
    },
    {
      id: '4',
      type: 'video',
      url: 'https://www.youtube.com/embed/aTRJ_pz7FmU',
      title: 'Video institucional',
      institutionArea: 'Portería principal',
      date: '2026-06-24 08:47',
    },
  ];

  currentIndex = 0;
  autoplayMs = 4500;
  private intervalId: any = null;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  get currentItem(): AttendanceMedia {
    return this.mediaItems[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.mediaItems.length;
  }

  goTo(index: number): void {
    if (index >= 0 && index < this.mediaItems.length) {
      this.currentIndex = index;
    }
  }

  isImage(item: AttendanceMedia): boolean {
    return item.type === 'image';
  }

  isVideo(item: AttendanceMedia): boolean {
    return item.type === 'video';
  }

  sanitizedVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  startAutoplay(): void {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.autoplayMs);
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}