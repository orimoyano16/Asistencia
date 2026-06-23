import { Component } from '@angular/core';

/**
 * Modelo de cada funcionalidad que se muestra en una tarjeta.
 * Podés agregar más propiedades acá (ej: url, color) y usarlas en el HTML.
 */
export interface Funcionalidad {
  id: number;
  /** Nombre corto de la sección: Asistencia, Documentos, etc. */
  etiqueta: string;
  titulo: string;
  /** Explicación en una oración, simple y directa */
  descripcion: string;
  /**
   * Lista de acciones concretas de esa sección.
   * Aparecen como viñetas debajo de la descripción.
   */
  quePodesHacer: string[];
}

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  tituloSeccion = 'Servicios y Funcionalidades';

  subtituloSeccion =
    'Conocé las herramientas que ofrece el Sistema de Asistencias Institucional.';

  /**
   * ARRAY DE DATOS — editá acá textos o agregá/quité items en quePodesHacer.
   */
  funcionalidades: Funcionalidad[] = [
    {
      id: 1,
      etiqueta: 'Asistencia',
      titulo: 'Registro de presentismo',
      descripcion: 'Controlá quién asistió a clases o actividades cada día.',
      quePodesHacer: [
        'Marcar presente o ausente por alumno',
        'Ver la lista del curso en el momento',
        'Consultar faltas de días anteriores',
      ],
    },
    {
      id: 2,
      etiqueta: 'Documentos',
      titulo: 'Justificaciones y certificados',
      descripcion: 'Gestioná las excusas cuando alguien falta con un motivo válido.',
      quePodesHacer: [
        'Subir certificado médico o nota',
        'Enviar una justificación por inasistencia',
        'Ver si fue aprobada o está pendiente',
      ],
    },
    {
      id: 3,
      etiqueta: 'Reportes',
      titulo: 'Informes de ausentismo',
      descripcion: 'Obtené resúmenes para analizar las faltas de forma ordenada.',
      quePodesHacer: [
        'Ver ausencias por mes o trimestre',
        'Filtrar por curso, turno o persona',
        'Imprimir o exportar el informe',
      ],
    },
    {
      id: 4,
      etiqueta: 'Dashboard',
      titulo: 'Panel institucional',
      descripcion: 'Vista general para directivos con los datos más importantes del colegio.',
      quePodesHacer: [
        'Ver el porcentaje de asistencia general',
        'Detectar alumnos con muchas faltas',
        'Comparar cursos o períodos',
      ],
    },
  ];
}
