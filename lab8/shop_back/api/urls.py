from django.urls import path
from .views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='products-list'),
    path('products/<int:id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('categories/', CategoryListAPIView.as_view(), name='categories-list'),
    path('categories/<int:id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]
