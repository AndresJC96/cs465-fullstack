import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth';
@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

constructor(
  private http: HttpClient,
  private auth: AuthService
) {}
private getAuthHeaders(): { headers: HttpHeaders } {
  const token = this.auth.getToken();

  return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token || ''}`
    })
  };
}
  // GET: Fetch all trips
  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }

  // GET: Fetch single trip by code
  public getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${tripCode}`);
  }

 // POST: Add new trip
public addTrip(formData: Trip): Observable<Trip> {
  return this.http.post<Trip>(
    `${this.apiBaseUrl}/trips`,
    formData,
    this.getAuthHeaders()
  );
}

// PUT: Update trip by code
public updateTrip(formData: Trip): Observable<Trip> {
  return this.http.put<Trip>(
    `${this.apiBaseUrl}/trips/${formData.code}`,
    formData,
    this.getAuthHeaders()
  );
}

// DELETE: Delete trip by code
public deleteTrip(tripCode: string): Observable<any> {
  return this.http.delete(
    `${this.apiBaseUrl}/trips/${tripCode}`,
    this.getAuthHeaders()
  );
}

}