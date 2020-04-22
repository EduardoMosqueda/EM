import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-collapser',
  templateUrl: './collapser.component.html',
  styleUrls: ['collapser.component.css'],
  animations:[
trigger("clicMuestra",[
    state("active", style({

    backgroundColor:"white"

  })),
  state("no-active", style({
  backgroundColor:"rgba(71, 71, 71, 0)",
  color:"rgba(71, 71, 71, 0)"

})),
transition ("active<=>no-active",
animate ("0.8s ease-in-out"),
)
])
  ]
})
export class CollapserComponent implements OnInit {
estado="no-active";
  constructor() { }

  ngOnInit(): void {
  }
mostrar(){
  this.estado=this.estado==="active"?"no-active":"active";
}
}
