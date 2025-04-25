import { Component, INJECTOR, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoConver: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = ""

  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get('id')
    )

    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null) {
    const result = dataFake.filter(articles => articles.id.toString() == id)[0]
    console.log(result)
    if (result) {
      this.contentTitle = result.title
      this.photoConver = result.photo
      this.contentDescription = result.description
    }
  }
}
