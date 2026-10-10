import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data';
import { Trip } from '../models/trip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.message = 'Searching for trips...';
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else {
          this.message = 'There were no trips found.';
        }
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Error fetching trips:', error);
        this.message = 'Error loading trips.';
        this.cdr.detectChanges();
      }
    });
  }
}