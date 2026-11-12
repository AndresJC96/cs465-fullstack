
import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';
import { Login } from './login/login';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: TripListingComponent, canActivate: [authGuard] },
  { path: 'add-trip', component: AddTrip, canActivate: [authGuard] },
  { path: 'edit-trip/:code', component: EditTrip, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
