import { Component } from '@angular/core';
import { EmpleadoService } from '../emleado-service.service';
import { Router } from '@angular/router'; // Para redirigir después de la creación

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {
  empleado = {
    id: null,
    nombre: '',
    apellido: '',
    email: '',
    foto: '',
    fechaContratacion: new Date()
  };

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  saveEmpleado(): void {
    this.empleadoService.create(this.empleado).subscribe({
      next: (response) => {
        console.log('Empleado creado con éxito', response);
        this.router.navigate(['/empleados']); 
      },
      error: (e) => console.error('Error al crear el empleado:', e)
    });
  }
}
