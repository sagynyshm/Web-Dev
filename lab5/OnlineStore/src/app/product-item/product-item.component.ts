import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../app.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product);
  }

  shareOnWhatsApp() {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://telegram.me/share/url?url=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }
}


