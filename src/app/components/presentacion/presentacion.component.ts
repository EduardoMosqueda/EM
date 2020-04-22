import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['presentacion.component.css']
})

export class PresentacionComponent implements OnInit {
  myStyle: object = {};
      myParams: object = {};
      width: number = 100;
      height: number = 100;
  constructor() { }

  ngOnInit(): void {
    this.myStyle = {
                'position': 'absolute',
                'width': '100%',
                'height': "100%",
                'z-index': -1,
                'top': 0,
                'left': 0,
                'right': 0,
                'bottom': 0,
            };
            this.myParams = {
            particles: {
                number: {
                    value: 25,
                    density:{
                      enable:false,
                      value_area:100,
                    }
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'circle',
                    stroke:{
                      width:1,
                      color:"#222222",
                    },
                },

        },
        interactivity:{
          detect_on:"canva",
          events:{
            onclick:{
              enable:true,
              mode:"repulse"
            },
            onhover:{
              enable:true,
              mode:"grab"
            }
          }

        },
    };
    particlesJS.load('particles-js', 'particles.json', null)
  }
}
