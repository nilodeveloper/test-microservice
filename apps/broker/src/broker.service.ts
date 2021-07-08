import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from '../interfaces/userData.interface';

@Injectable()
export class BrokerService {
  constructor(private httpService: HttpService) {}

  login(login: any): Observable<AxiosResponse<UserData>> {
    return this.httpService.post('https://api.tempoassist.com.br/sandbox/juvo/mobile/prestador/2.0.0/autenticacao/autenticar/login',
    login,
    {headers: {
      "accept": "application/json",
      "Content-Type": "application/json"}
    }).pipe(map(response => response.data)
    );
  }
}
