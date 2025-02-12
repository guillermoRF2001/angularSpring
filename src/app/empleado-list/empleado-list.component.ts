import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../emleado-service.service';
import { Empleado } from '../Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }


  getEmpleados(): void {
    this.empleadoService.getAll().subscribe({
      next: (data) => {
        this.empleados = data; 
      },
      error: (e) => console.error('Error al obtener la lista de empleados:', e)
    });
  }

  deleteEmpleado(id: string): void {
    if (confirm("¿Estás seguro de eliminar este empleado?")) {
      this.empleadoService.delete(id).subscribe({
        next: () => {
          this.getEmpleados(); 
        },
        error: (e) => console.error('Error al eliminar empleado:', e)
      });
    }
  }
}
