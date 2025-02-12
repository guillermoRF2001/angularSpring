import { Routes } from '@angular/router';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoDetailsComponent } from './empleado-details/empleado-details.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component'; 

export const routes: Routes = [
    {path:'tutorials',component:EmpleadoListComponent},
    {path: 'tutorials/:id', component:EmpleadoDetailsComponent},
    {path:'add',component:AddEmpleadoComponent}
];
