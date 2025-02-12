import { TestBed } from '@angular/core/testing';
import { EmpleadoService } from './emleado-service.service';


describe('EmpleadoService', () => {
  let service: EmpleadoService;  // Cambié el nombre a EmpleadoService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoService);  // Inyectando el servicio correcto
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Comprobamos que el servicio se haya creado correctamente
  });

  // Puedes agregar más pruebas aquí según sea necesario
});
