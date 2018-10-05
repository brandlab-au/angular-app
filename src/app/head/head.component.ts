import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
title = "Galapagos yachts last Min";
description = "OLA Overland Latin America best deals";
  constructor() { }

  ngOnInit() {
  }

}
