import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ExternalResource} from './ping.models';

@Component({
  selector: 'app-ping',
  template: '',
  styles: ['']
})
export class PingComponent implements OnInit {

  @Input() pingUrlData: ExternalResource[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.pingUrl();
  }

  pingUrl() {
      for (const item of this.pingUrlData) {
        this.getUrls(item['url']).subscribe();
      }
  }

  getUrls(url?: string): Observable<any> {
    return this.http.get(url, {responseType: 'json'})
      .pipe(
        tap(_ => console.log('fetched url', url)),
        catchError(this.handleError(url))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   */
  private handleError(apiUrl = 'API request') {
    return (error: any): Observable<any> => {
      const err = [
        apiUrl,
        error.status
      ];
      return of(err);
    };
  }

}



