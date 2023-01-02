import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-ahorcado';

  categorias = [
    {
      categoria : 'Matemáticas',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Cuántas flores hay?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : 'https://st.depositphotos.com/2036077/3579/i/600/depositphotos_35798357-stock-photo-3d-golden-number-collection.jpg',
          imagen2 : 'https://static8.depositphotos.com/1338574/829/i/950/depositphotos_8292993-stock-photo-the-number-2-in-gold.jpg',
          imagen3 : 'https://media.istockphoto.com/id/475237371/es/vector/3-d-oro-brillante-n%C3%BAmero-5.jpg?s=612x612&w=0&k=20&c=vZzcpuIHFmzbvaHk-3m5_MbuuCg6MxnmhXfHJK-P5Kw=',
          correcta: 1
        },
        {
          id : 2,
          pregunta : '¿Cuántos arboles hay?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 3
        },
        {
          id : 3,
          pregunta : '¿Cuántos pajaros hay?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 3
        }

      ]
    },
    {
      categoria : 'Lengua',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Con que letra empieza?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 2
        },
        {
          id : 2,
          pregunta : '¿Cuántas letras tiene la palabra ESCUELA?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 1
        },
        {
          id : 3,
          pregunta : '¿Qué letra falta?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 3
        }
      ]
    },
    {
      categoria : 'Artes Visuales',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Qué color es?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 3
        },
        {
          id : 2,
          pregunta : '¡De qué color es ésta flor?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 1
        },
        {
          id : 3,
          pregunta : '¿Qué color es?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 3
        }
      ]
    },
    {
      categoria : 'Ciencias Naturales',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Qué animal es?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 2
        },
        {
          id : 2,
          pregunta : '¿Dónde vive éste animal?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 2
        },
        {
          id : 2,
          pregunta : '¿Qué animal es?',
          respuesta1: 'Respuesta 1',
          respuesta2: 'Respuesta 2',
          respuesta3: 'Respuesta 3',
          imagen1 : '',
          imagen2 : '',
          imagen3 : '',
          correcta: 2
        }
      ]
    },
  ]
}
