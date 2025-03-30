from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# /api/products/ 
class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# /api/products/<int:id>/ 
class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'

# /api/categories/ 
class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# /api/categories/<int:id>/ 
class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'

# /api/categories/<int:id>/products/ 
class CategoryProductsAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs.get('id')
        return Product.objects.filter(category_id=category_id)
