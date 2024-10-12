from django.shortcuts import render
from django_filters import rest_framework as filters
from rest_framework import generics, filters as drf_filters  # Importing SearchFilter here
from .models import Case
from .serializers import CaseSerializer
from .serializers import UserRegisterSerializer
from .models import CustomUser
from .models import Court, County, Judge
from .serializers import CourtSerializer, CountySerializer, JudgeSerializer

class UserRegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class CaseFilter(filters.FilterSet):
    case_number = filters.CharFilter(lookup_expr='icontains')  # Filter by case number
    date_delivered = filters.DateFilter()  # Filter by date delivered
    court = filters.CharFilter(field_name='court__court_name', lookup_expr='icontains')  # Filter by court name
    county = filters.CharFilter(field_name='county__county_name', lookup_expr='icontains')  # Filter by county name

    class Meta:
        model = Case
        fields = ['case_number', 'date_delivered', 'court', 'county']  # Add other fields as needed

class CaseList(generics.ListAPIView):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
    filter_backends = (filters.DjangoFilterBackend, drf_filters.SearchFilter)  # Use the imported SearchFilter
    filterset_class = CaseFilter
    search_fields = ['case_number', 'full_text']

class CourtListAPIView(generics.ListAPIView):
    queryset = Court.objects.all()
    serializer_class = CourtSerializer

class CountyListAPIView(generics.ListAPIView):
    queryset = County.objects.all()
    serializer_class = CountySerializer

class JudgeListAPIView(generics.ListAPIView):
    queryset = Judge.objects.all()
    serializer_class = JudgeSerializer