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
      map(content => {
        const title = this.extractTitle(content);
        const date = this.extractDate(content);
        const imageUrl = this.extractImageUrl(content);
        const abstract = this.extractAbstract(content);
        const bodyContent = this.extractContent(content);

        return {
          id,
          title,
          date,
          imageUrl,
          abstract,
          content: bodyContent
        };
      })
    );
  }

  private extractTitle(content: string): string {
    const match = content.match(/#\s(.+)/);
    return match ? match[1] : 'Untitled';
  }

  private extractDate(content: string): Date {
    const match = content.match(/Fecha:\s([0-9-]+)/);
    return match ? new Date(match[1]) : new Date();
  }

  private extractImageUrl(content: string): string {
    const match = content.match(/!\[.*\]\((.*)\)/);
    return match ? match[1] : '';
  }

  private extractAbstract(content: string): string {
    const match = content.match(/Resumen:\s(.+)/);
    return match ? match[1] : '';
  }

  private extractContent(content: string): string {
    // Assuming the content starts after the first '---'
    const splitContent = content.split('---');
    return splitContent.length > 1 ? splitContent[1].trim() : content;
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