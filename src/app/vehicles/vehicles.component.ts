import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  products = [{
    
      pid: 1,
      pname: 'Sofa set',
      pdescription: 'A sofa is a long',
      price: 15500,
      Status:'Active',
      img: 'https://media.istockphoto.com/photos/small-colorful-living-room-picture-id1297657669?b=1&k=20&m=1297657669&s=170667a&w=0&h=cCVmqaRabNGWrO9tfOwp-5MttSpkrEvGkB6eGnP_BVI='
    },
    {
      pid: 2,
      pname: 'Mirror',
      pdescription: 'Fashionable mirror set',
      price: 5500,
      Status:'Active',
      img: 'https://th.bing.com/th/id/OIP.lSwR1_qeCvSy-7r9_GHRyQHaE6?pid=ImgDet&rs=1https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      pid: 3,
      pname: 'Flower pot',
      pdescription: 'Flower pot with artificial flower',
      price: 5500,
      Status:'InActive',
      img: 'https://images.unsplash.com/photo-1615891618972-799500c621b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      pid: 4,
      pname: 'Photo',
      pdescription: 'Stylish famous mandala wall art',
      price: 500,
      Status:'out of stock',
      img: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      pid: 5,
      pname: 'Dinning Table',
      pdescription: 'A long full fledge 8 seater table',
      price: 4560,
      Status:'InActive',
      img: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      pid: 6,
      pname: 'lamp',
      pdescription: 'lamp with 60w',
      price: 5500,
      Status:'Active',
      img: 'https://media.istockphoto.com/photos/dark-empty-room-with-lamp-shade-potted-plant-and-parquet-floor-blank-picture-id1298508477?b=1&k=20&m=1298508477&s=170667a&w=0&h=YkeCsKzIk4SyvbFAIH131WcqTtvn2TA9hUzLJvrr7rE='
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
