import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css'],
})
export class RuletaComponent implements OnInit{


  @ViewChild('ruleta') ruleta: ElementRef;
  @ViewChild('audio') audio: ElementRef;
  @ViewChild('preg') preg: ElementRef;
  @ViewChild('correcto') correcto: ElementRef;
  @ViewChild('incorrecto') incorrecto: ElementRef;
  @ViewChild('modalSolucion') modalSolucion: ElementRef;

  @Input() categorias : any[]
  @Input() jugador : string
  @Output() outputSalida = new EventEmitter()

  public categoriaSeleccionada : any = null
  public botonDeshabilitado = false

  public esCorrecto: any
  public puntuacion: any = [null, null, null]
  public contadorPreguntas = 0
  public contadorCorrectas = 0

  constructor(
  ){
  }
  ngOnInit(): void {

  }

  cambio(){
    this.categoriaSeleccionada = null
    this.botonDeshabilitado = true
    const audio = this.audio.nativeElement
    const rul = this.ruleta.nativeElement
    const pregunta = this.preg.nativeElement
    pregunta.style.transform = 'translateX(120%)'
    audio.play()
    let aux = Math.random()
    let rand = aux * 3600
    let valor = (rand) / 360
    valor = (valor - parseInt(valor.toString().split(".")[0]))* 360
    rul.style.transition = '5s'
    rul.style.transform = `rotate(${3600 + valor}deg)`

    setTimeout(() => {
      switch (true) {
        case valor > 0 && valor <= 90:
          this.categoriaSeleccionada = this.categorias[0]
          rul.style.transition = '0s'
          rul.style.transform = `rotate(${valor + 360}deg)`
          pregunta.style.transform = 'translateX(0%)'
          break;
        case valor > 90 && valor <= 180:
          this.categoriaSeleccionada = this.categorias[1]
          rul.style.transition = '0s'
          rul.style.transform = `rotate(${valor + 360}deg)`
          pregunta.style.transform = 'translateX(0%)'
          break;
        case valor > 180 && valor <= 270:
          this.categoriaSeleccionada = this.categorias[2]
          rul.style.transition = '0s'
          rul.style.transform = `rotate(${valor + 360}deg)`
          pregunta.style.transform = 'translateX(0%)'
          break;
        case valor > 270 && valor <= 360:
          this.categoriaSeleccionada = this.categorias[3]
          rul.style.transition = '0s'
          rul.style.transform = `rotate(${valor + 360}deg)`
          pregunta.style.transform = 'translateX(0%)'
          break;
      }
    }, 5500)
    
  }

  seleccionarRespuesta(op: number){
    if (op == this.categoriaSeleccionada.preguntas[0].correcta){
      this.esCorrecto = true
    }
    else {
      this.esCorrecto = false
    }

    const ms = this.modalSolucion.nativeElement
    ms.style.display = 'flex'
    this.solucion()
    setTimeout(()=> { 
      this.esCorrecto = null
      ms.style.display = 'none'
    },2000)
  }

  solucion(){
    if (this.esCorrecto){
      const correcto = this.correcto.nativeElement
      correcto.play()
      this.puntuacion[this.contadorPreguntas] = true
      this.contadorPreguntas += 1
      this.contadorCorrectas +=1
    }
    else {
      const incorrecto = this.incorrecto.nativeElement
      incorrecto.play()
      this.puntuacion[this.contadorPreguntas] = false
      this.contadorPreguntas += 1
    }

    if (this.contadorPreguntas < 3){
      this.botonDeshabilitado = false
    }
    else {
      this.botonDeshabilitado = true
    }
  }

  reiniciarJuego(){
    const pregunta = this.preg.nativeElement
    pregunta.style.transform = 'translateX(120%)'
    this.contadorCorrectas = 0
    this.contadorPreguntas = 0
    this.puntuacion = [null, null, null]
    this.categoriaSeleccionada = null
    this.botonDeshabilitado = false
    this.outputSalida.emit('')
  }
}
