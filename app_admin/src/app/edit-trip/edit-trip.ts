import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TripDataService } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {

  trip: Trip | null = null;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');

    if (code) {
      this.tripDataService.getTrip(code).subscribe({
        next: (data) => {
          console.log('Trip data received:', data);
          this.trip = data;
          console.log('Selected trip:', this.trip);
        },
        error: (err) => {
          console.error('Error loading trip:', err);
          this.message = 'Unable to load trip.';
        }
      });
    }
  }

  onSubmit(): void {
    if (!this.trip) {
      return;
    }

    this.tripDataService.updateTrip(this.trip).subscribe({
      next: () => {
        this.message = 'Trip updated successfully!';
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating trip:', err);
        this.message = 'Unable to update trip.';
      }
    });
  }
}