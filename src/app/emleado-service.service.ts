import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado'; // Cambié a Empleado

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl = 'http://localhost:8080/api/empleados'; // Cambié la URL base para empleados

  constructor(private http: HttpClient) { }

  // Obtener todos los empleados
  getAll(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.baseUrl);
  }

  // Obtener un solo empleado por ID
  get(id: any): Observable<Empleado> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Crear un nuevo empleado
  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Actualizar un empleado existente
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // Eliminar un empleado por ID
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Eliminar todos los empleados
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
