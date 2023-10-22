import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000'; // La URL de tu API Flask

  constructor(private http: HttpClient) { }

  iniciarSesion(username: string, password: string) {
    const datos_insertar = {
      user: username,
      password: password
    };

    return this.http.post(`${this.apiUrl}/login`, datos_insertar, config);
  }
}
