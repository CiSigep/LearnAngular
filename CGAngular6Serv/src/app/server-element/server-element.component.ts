import { Component, OnInit, Input, ViewEncapsulation, OnChanges, ViewChild, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']//,
  //encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {
  @Input('srvElement') element: { type: string, name:string, content:string };
  @Input() name:string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('paragraph') para: ElementRef;

  constructor() { }

  ngOnInit() {
    console.debug(this.header.nativeElement.textContent); // Nothing here
    console.debug(this.para.nativeElement.textContent);
  }

  ngOnChanges() {
    console.debug('Something Changed');
  }

  ngAfterContentInit() {
    console.debug(this.para.nativeElement.textContent);
  }

}
