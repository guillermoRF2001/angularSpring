import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../emleado-service.service';
import { Empleado } from '../Empleado';

@Component({
  selector: 'app-empleado-details',
  templateUrl: './empleado-details.component.html',
  styleUrls: ['./empleado-details.component.css']
})
export class EmpleadoDetailsComponent implements OnInit {
  empleado: Empleado | undefined;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.getEmpleadoDetails(id); 
    }
  }

  getEmpleadoDetails(id: string): void {
    this.empleadoService.get(id).subscribe({
      next: (data) => {
        this.empleado = data;
      },
      error: (e) => console.error('Error al obtener detalles del empleado:', e)
    });
  }
}
