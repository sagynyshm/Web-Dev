import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  likes: number;
  link: string;
}

export interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Catalog';
  categories: Category[] = [];
  selectedCategory: Category | null = null;

  constructor() {
    
    this.categories = [
      {
        name: 'Electronics',
        products: [
          {
            id: 1,
            name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
            description: 'A high-quality smartphone.',
            rating: 4.5,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
          },
          {
            id: 2,
            name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 512 Гб / Win 11 / 15IAU7 / 82RK00EWRK',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
            description: 'Powerful laptop for work and play.',
            rating: 4.7,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000'
          },
          {
            id: 3,
            name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
            description: 'Noise-cancelling headphones.',
            rating: 4.3,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
          },
          {
            id: 4,
            name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
            description: 'Stay connected on the go.',
            rating: 4.2,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
          },
          {
            id: 5,
            name: 'Фотокамера Canon PowerShot G7 X Mark III черный',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
            description: 'Capture high-quality photos.',
            rating: 4.6,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000'
          }
        ]
      },
      {
        name: 'Home Appliances',
        products: [
          {
            id: 6,
            name: 'Холодильник KONKA KRSD-230G серый',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/pf5/22283430.png?format=gallery-medium',
            description: 'Energy efficient refrigerator.',
            rating: 4.5,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/konka-krsd-230g-seryi-133996637/?c=750000000&m=30362857&utm_source=google_search&utm_medium=cpc&utm_campaign=22030057881&utm_content=172853918832&utm_term=встроенный%20холодильник&device=c&matchtype=b&placement=&adposition=&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s2ants6aZpFcfdE5LKb038KOfw3akaV91UOrzJmxsyNKlQPzq0k96IaAhrxEALw_wcB&gad_source=1&gbraid=0AAAAAq2LrfSkgSb6dUgA9raXUe0Qstbmz'
          },
          {
            id: 7,
            name: 'Стиральная машина KONKA KWM06-10L23UW белый',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p5a/pd3/16117409.png?format=gallery-medium',
            description: 'Top-load washing machine.',
            rating: 4.4,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/konka-kwm06-10l23uw-belyi-132268894/?c=750000000&m=30362857&utm_source=google_search&utm_medium=cpc&utm_campaign=22040160415&utm_content=170719276045&utm_term=стиральная%20машина%20купить&device=c&matchtype=b&placement=&adposition=&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0jk8DAyqZX41Vta5VbHcj6MnrxsZQfufnN2-TpQnXbLqAM7js5e9YaAjI3EALw_wcB&gad_source=1&gbraid=0AAAAAq2LrfRNhY0gdCwLC1QcqEe83Yd4U'
          },
          {
            id: 8,
            name: 'Микроволновая печь AVA MMWO-2070B черный',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium',
            description: 'Compact microwave oven.',
            rating: 4.1,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000'
          },
          {
            id: 9,
            name: 'Кондиционер ALMACOM ACH-12QS белый',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/hb3/79790796242974.jpg?format=gallery-medium',
            description: 'Keep cool during summer.',
            rating: 4.3,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/almacom-ach-12qs-belyi-109703258/?c=750000000'
          },
          {
            id: 10,
            name: 'Пылесос Samsung VCC4520S36/XEV синий',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=gallery-medium',
            description: 'Efficient cleaning for your home.',
            rating: 4.2,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000'
          }
        ]
      },
      {
        name: 'Books',
        products: [
          {
            id: 11,
            name: 'Книга Дилеман П.: Изучаем Angular 2, Web-разработка',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/had/87062822977566.jpg?format=gallery-medium',
            description: 'Learn Angular step by step.',
            rating: 4.8,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/dileman-p-izuchaem-angular-2-web-razrabotka-123308738/?srsltid=AfmBOooIWjGw-K9eMf08GC-shdhp5s0DYwVjTAtg7UE1eZTmDIVvuDwe'
          },
          {
            id: 12,
            name: 'Книга Ван Путтен М., Свекис Л.: JavaScript с нуля до профи',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h6a/80733237182494.jpg?format=gallery-medium',
            description: 'Master the fundamentals of JavaScript.',
            rating: 4.7,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/van-putten-m-svekis-l-javascript-s-nulja-do-profi-110320413/?srsltid=AfmBOoq3K0s8zjTb6o-fKVs1lOdhLyBvR-69jMj3svCqzz0J6D-oV9Iu'
          },
          {
            id: 13,
            name: 'Книга Дакетт Д.: HTML и CSS. Разработка и дизайн веб-сайтов',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/hdb/63800012013598.jpg?format=gallery-medium',
            description: 'Advanced techniques in CSS and HTML.',
            rating: 4.5,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/dakett-d-html-i-css-razrabotka-i-dizain-veb-saitov-26023389/?srsltid=AfmBOoppCPtohi7d52JZyfSs44lBsGgVouUp9uuwKSnz59nIk692FxIj'
          },
          {
            id: 14,
            name: 'Книга Баумгартнер С.: Рецепты TypeScript',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p87/18060494.png?format=gallery-medium',
            description: 'Comprehensive guide to TypeScript.',
            rating: 4.6,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/baumgartner-s-retsepty-typescript-132843668/?m=MHomeVideo&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_10k-30k&gad_source=1&gbraid=0AAAAAC7-v7gzZtC4arDR4EiOCiJddN9ES&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s24-p8PTC88CGEqGycbnjrMxo5UJJfuPVQLVgMnXbViz8dU8e7rSOsaApAiEALw_wcB'
          },
          {
            id: 15,
            name: 'Книга Лотт С. , Филлипс Д.: Объектно-ориентированный Python',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h46/85671767179294.jpg?format=gallery-medium',
            description: 'OOP Python',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/lott-s-fillips-d-ob-ektno-orientirovannyi-python-118180197/?m=4845032&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_10k-30k&gad_source=1&gbraid=0AAAAAC7-v7gzZtC4arDR4EiOCiJddN9ES&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0OsjExYiaxcVC1Vu1o4pU0ah8BP5EkhPrjJmL0Nrt7EtZ9FcleLEkaAiCvEALw_wcB'
          }
        ]
      },
      {
        name: 'Fashion',
        products: [
          {
            id: 16,
            name: "Пуховик The North Face черный",
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h66/87180648710174.jpg?format=gallery-medium',
            description: 'Stylish and warm coat.',
            rating: 4.3,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/puhovik-the-north-face-nf0a3c8d4g31-chernyi-xl-123794186/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7gOPV4kTu2_K1OtQlZe9--C9&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s3SfJihJW_bOQhFOfin783DJSDVbponawB6O2ecETbJ6VaBWWDKF7kaAr3CEALw_wcB'
          },
          {
            id: 17,
            name: "Вечернее платье темно-синий",
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h90/87178107125790.jpg?format=gallery-medium',
            description: 'Elegant evening dress.',
            rating: 4.7,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/vechernee-plat-e-30277515-462018965-temno-sinii-m-123783693/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gad_source=1&gbraid=0AAAAAC7-v7i-vKkR2RF4gTp9dca9GOB7A&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s2_KC28AHmD3jSgybUCJYPn_6tWjC9MyE2qCfCkSuyxg2TJrC9BTD4aAoMfEALw_wcB'
          },
          {
            id: 18,
            name: 'Кроссовки Nike Air Monarch IV белый',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/he4/86028811042846.jpg?format=gallery-medium',
            description: 'Comfortable everyday sneakers.',
            rating: 4.4,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/krossovki-nike-air-monarch-iv-415445-102-belyi-41-119453946/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7h7GU_hYYrUDWmN1WEK4X_F3&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s3QtoVcJRg0GiUmzw6z3gq6RKNvXvmgzb-9gVM9tUWJzCrN2sJufpUaAu1qEALw_wcB'
          },
          {
            id: 19,
            name: 'MELLER многоугольник поляризованные',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p5a/p19/18225756.jpg?format=gallery-medium',
            description: 'Trendy sunglasses for summer.',
            rating: 4.5,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/meller-adisa-mnogougol-nik-poljarizovannye-132889178/?m=18355066&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7h7GU_hYYrUDWmN1WEK4X_F3&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s27gU4kAFLAGiu_07eqjHWVu32zBiTPVBnPk7fQLzgYmrp31QTgufkaAqdfEALw_wcB'
          },
          {
            id: 20,
            name: 'Часы Кварцевые CASIO MTP-1183PA-1AEG сталь',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h75/67239306690590.jpg?format=gallery-medium',
            description: 'Luxury wrist watch.',
            rating: 4.6,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1183pa-1aeg-stal--108196446/?m=30350984&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7h7GU_hYYrUDWmN1WEK4X_F3&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s2BArpEFmy-bxx0YXfucqD5SZmaleXyCcbTQOR-YIR6VkolybWSJTQaAsEQEALw_wcB'
          }
        ]
      }
    ];
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  onRemoveProduct(product: Product) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(
        p => p.id !== product.id
      );
    }
  }
}
