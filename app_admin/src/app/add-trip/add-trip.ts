import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {
  trip: Trip = {
    _id: '',
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  message = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  public onSubmit(): void {
    this.tripDataService.addTrip(this.trip).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error adding trip:', error);
        this.message = 'Unable to add trip.';
      }
    });
  }
}