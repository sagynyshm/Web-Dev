import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-large',
      name: 'Apple iPhone 16 Pro Max',
      description: '256GB, Золотистый цвет',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      name: 'Apple iPhone 16',
      description: '128GB, Черный цвет',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-large',
      name: 'Samsung Galaxy S24 FE 5G',
      description: '8 GB RAM, 256GB, Черный цвет',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      name: 'Apple AirPods Pro 2',
      description: 'Беспроводные наушники с зарядным кейсом',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-large',
      name: 'Яндекс Станция Лайт 2',
      description: 'Умная колонка с голосовым помощником',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-large',
      name: 'Marshall Major IV',
      description: 'Беспроводные наушники, Черный цвет',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
      name: 'Canon PowerShot G7 X Mark III',
      description: 'Компактная камера, Черный цвет',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/ha1/64082961334302.jpg?format=gallery-medium',
      name: 'Yves Saint Laurent Libre',
      description: 'Парфюмированная вода, 90 мл',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/yves-saint-laurent-libre-parfjumernaja-voda-edp-90-ml-dlja-zhenschin-102147227/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h29/h1c/64090599129118.jpg?format=gallery-medium',
      name: 'Zielinski & Rozen Black Pepper',
      description: 'Парфюм, 50 мл, унисекс',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/zielinski-rozen-black-pepper-amber-neroli-vetiver-duhi-parfum-50-ml-uniseks-101504537/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h25/87197780049950.jpg?format=gallery-medium',
      name: 'Xiaomi Redmi Watch 5 Active',
      description: 'Смарт-часы, 51 мм, Черный',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000',
    },];
    share(link: string) {
      const message = `Посмотри, что я нашел: ${link}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    }
  }
   
  