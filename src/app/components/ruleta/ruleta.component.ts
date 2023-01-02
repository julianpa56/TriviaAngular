import { Component, ElementRef, OnInit, ViewChild, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css'],
})
export class RuletaComponent implements OnInit{


  @ViewChild('ruleta') ruleta: ElementRef;
  @ViewChild('audio') audio: ElementRef;
  @ViewChild('preg') preg: ElementRef;

  @Input() categorias : any[]

  public categoriaSeleccionada : any = null
  public botonDeshabilitado = false

  constructor(
    private _renderer2: Renderer2
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
          this.botonDeshabilitado = false
          pregunta.style.transform = 'translateX(0%)'
          break;
        case valor > 90 && valor <= 180:
          this.categoriaSeleccionada = this.categorias[1]
          rul.style.transition = '0s'
          rul.style.transform = `rotate(${valor + 360}deg)`
          this.botonDeshabilitado = false
          pregunta.style.transform = 'translateX(0%)'
          break;
        case valor > 180 && valor <= 270:
          this.categoriaSeleccionada = this.categorias[2]
          rul.style.transition = '0s'
          rul.style.transform = `rotate(${valor + 360}deg)`
          this.botonDeshabilitado = false
          pregunta.style.transform = 'translateX(0%)'
          break;
        case valor > 270 && valor <= 360:
          this.categoriaSeleccionada = this.categorias[3]
          rul.style.transition = '0s'
          rul.style.transform = `rotate(${valor + 360}deg)`
          this.botonDeshabilitado = false
          pregunta.style.transform = 'translateX(0%)'
          break;
      }
    }, 5500)
    
  }

  seleccionarRespuesta(op: number){
    if (op == this.categoriaSeleccionada.preguntas[0].correcta){
      console.log("ok")
    }
  }
}
