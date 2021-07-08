import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  session(login: any): Observable<AxiosResponse<any>> {
    return this.httpService.post('http://localhost:3001/session',
    login,
    {headers: {
      "accept": "application/json",
      "Content-Type": "application/json"}
    }).pipe(map(response => response.data)
    );
  }
}
