import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  expirationDate: string;
  description: string;
  type: string;
  features?: string[];
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [
    {
      id: generateId(),
      name: 'IPhone X',
      active: false,
      description: 'Like Brand New',
      expirationDate: '02/07/2020',
      type: 'mobile'
    },
    {
      id: generateId(),
      name: 'Toothbrush maracas',
      active: true,
      description: 'In est ante in nibh.',
      expirationDate: '02/08/2020',
      type: 'toothbrush'
    },
    {
      id: generateId(),
      name: 'The Labyrinth Lock',
      active: false,
      description: 'Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
      expirationDate: '02/09/2020',
      type: 'mobile'
    },
    {
      id: generateId(),
      name: 'The inside-out Oreo cookie',
      active: true,
      description: ' Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.',
      expirationDate: '02/20/2020',
      type: 'cookie'
    },
    {
      id: generateId(),
      name: 'Palmbrella',
      active: false,
      description: 'Auctor augue mauris augue neque gravida in fermentum et.',
      expirationDate: '02/22/2020',
      type: 'clothe'
    },
    {
      id: generateId(),
      name: 'The iPhone cupholder',
      active: true,
      description: 'Pretium nibh ipsum consequat nisl vel pretium lectus quam',
      expirationDate: '02/23/2020',
      type: 'cup'
    },
    {
      id: generateId(),
      name: 'The wooden saw',
      active: false,
      description: 'Turpis tincidunt id aliquet risus.',
      expirationDate: '02/24/2020',
      type: 'saw'
    },
    {
      id: generateId(),
      name: 'Tandem Beer Mug',
      active: true,
      description: 'Eget gravida cum sociis natoque penatibus et magnis dis.',
      expirationDate: '02/25/2020',
      type: 'cup'
    },
    {
      id: generateId(),
      name: 'Rope tableware',
      active: false,
      description: 'Eget gravida cum sociis natoque penatibus et magnis dis. ',
      expirationDate: '02/26/2020',
      type: 'clothe'
    },
    {
      id: generateId(),
      name: 'The square rolling pin',
      active: true,
      description: 'Amet porttitor eget dolor morbi non arcu risus quis. ',
      expirationDate: '02/27/2020',
      type: 'food'
    },
    {
      id: generateId(),
      name: 'See-Saw Table',
      active: false,
      description: 'Urna id volutpat lacus laoreet non curabitur gravida. ',
      expirationDate: '03/07/2020',
      type: 'table'
    },

  ]

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  constructor() { }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1)
    ];
    this.products$.next(this.products);
  }
}
