export interface Product {
    image: string;       
    name: string;        
    description: string; 
    rating: number;    
    link: string;      
  }

  export const PRODUCTS: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/h6f/72645313843230/apple-iphone-16-pro-max-256gb-zolotistyi-123890547-1.jpg',
      name: 'Apple iPhone 16 Pro Max',
      description: '256GB, Золотистый цвет',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/ha8/72491119816734/apple-iphone-16-128gb-cernyi-123713453-1.jpg',
      name: 'Apple iPhone 16',
      description: '128GB, Черный цвет',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/h3d/72562094772254/samsung-galaxy-s24-fe-5g-8-256gb-cernyi-128143468-1.jpg',
      name: 'Samsung Galaxy S24 FE 5G',
      description: '8 GB RAM, 256GB, Черный цвет',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h41/69132411064350/apple-airpods-pro-2-belyi-113677582-1.jpg',
      name: 'Apple AirPods Pro 2',
      description: 'Беспроводные наушники с зарядным кейсом',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/hc5/69239676338142/jandeks-stantsia-lait-2-122679962-1.jpg',
      name: 'Яндекс Станция Лайт 2',
      description: 'Умная колонка с голосовым помощником',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/h1b/33239066185758/marshall-major-iv-cernyi-102138144-1.jpg',
      name: 'Marshall Major IV',
      description: 'Беспроводные наушники, Черный цвет',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h29/33273515708446/canon-powershot-g7-x-mark-iii-cernyi-2240141-1.jpg',
      name: 'Canon PowerShot G7 X Mark III',
      description: 'Компактная камера, Черный цвет',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h01/33275439489054/yves-saint-laurent-libre-parfiumernaia-voda-90-ml-102147227-1.jpg',
      name: 'Yves Saint Laurent Libre',
      description: 'Парфюмированная вода, 90 мл',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/yves-saint-laurent-libre-parfjumernaja-voda-edp-90-ml-dlja-zhenschin-102147227/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/h7c/33243803820062/zielinski-rozen-black-pepper-amber-neroli-vetiver-50-ml-uniseks-101504537-1.jpg',
      name: 'Zielinski & Rozen Black Pepper',
      description: 'Парфюм, 50 мл, унисекс',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/zielinski-rozen-black-pepper-amber-neroli-vetiver-duhi-parfum-50-ml-uniseks-101504537/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h44/72645324791838/xiaomi-redmi-watch-5-active-51mm-black-black-123879372-1.jpg',
      name: 'Xiaomi Redmi Watch 5 Active',
      description: 'Смарт-часы, 51 мм, Черный',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000',
    }
  ],share(link: string) {
    const message = `Посмотри, что я нашел: ${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  