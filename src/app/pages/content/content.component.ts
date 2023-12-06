import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFakie } from 'src/app/components/data/dataFakie';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = '';
  contentTitle:string = 'MINHA NOTÍCIA';
  contentDescription:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa rerum quos commodi recusandae reprehenderit earum totam laboriosam fugit ad architecto quam ullam sint consectetur exercitationem! Magnam, et dolor fugit porro ut impedit odio sed omnis neque, cumque, eum totam.';
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }


  setValuesToComponent(id:string | null) {
    const result = dataFakie.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover;
    this.contentTitle = result.title;
    this.contentDescription = result.description;

  }

}
