export interface Empleado {
    id?: number;            // ID del empleado (generalmente un número largo)
    nombre?: string;        // Nombre del empleado
    apellido?: string;      // Apellido del empleado
    email?: string;         // Email del empleado (podrías agregar una validación de formato en el formulario de Angular)
    foto?: string;          // URL o ruta de la foto del empleado (tipo string)
    fechaContratacion?: Date; // Fecha de contratación (tipo Date)
}
