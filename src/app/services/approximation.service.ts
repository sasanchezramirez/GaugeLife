import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Approximation } from '../modules/approximations/models/approximation.model';

@Injectable({
  providedIn: 'root'
})
export class ApproximationService {

  postsUrl: string = 'assets/data/approximations/';

  constructor(private http: HttpClient) { }

  getApproximations(): Observable<Approximation[]> {
    return this.http.get<{ approximations: string[] }>(this.postsUrl + 'approximations.json').pipe(
      switchMap(res => {
        console.log('JSON Response:', res);  // Depuración
        const files = res.approximations;
        if (!files) {
          console.error('No approximations found');  // Depuración
          return throwError(new Error('No approximations found'));
        }
        const observables = files.map((file, index) => this.getApproximation(file, index));
        return forkJoin(observables);
      })
    );
  }

  private getApproximation(file: string, id: number): Observable<Approximation> {
    return this.http.get(this.postsUrl + file, { responseType: 'text' }).pipe(
      map(content => ({
        id,
        title: this.extractTitle(content),
        content,
        date: new Date()
      }))
    );
  }

  private extractTitle(content: string): string {
    const match = content.match(/#\s(.+)/);
    return match ? match[1] : 'Untitled';
  }

  getApproximationById(id: number): Observable<Approximation> {
    return this.getApproximations().pipe(
      map(approximations => approximations.find(approximation => approximation.id === id)),
      switchMap(approximation => 
        approximation ? of(approximation) : throwError(new Error('Approximation not found'))
      )
    );
  }
}