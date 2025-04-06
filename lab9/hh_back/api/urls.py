from django.urls import path
from .views import (
    CompanyListAPIView,
    CompanyDetailAPIView,
    CompanyVacanciesAPIView,
    VacancyListAPIView,
    VacancyDetailAPIView,
    VacancyTopTenAPIView
)

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view(), name='companies-list'),
    path('companies/<int:id>/', CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListAPIView.as_view(), name='vacancies-list'),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTenAPIView.as_view(), name='vacancies-top-ten'),
]
