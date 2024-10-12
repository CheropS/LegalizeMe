from rest_framework import serializers
from .models import Case, Court, CaseClassification, County, Action, Citation, Judge, Party
from django.utils.translation import gettext_lazy as _
from .models import CustomUser

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser  # Change this to CustomUser
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        user = CustomUser(**validated_data)  # Change this to CustomUser
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():  # Change this to CustomUser
            raise serializers.ValidationError(_("This email is already in use."))
        return value

    def validate_username(self, value):
        if CustomUser.objects.filter(username=value).exists():  # Change this to CustomUser
            raise serializers.ValidationError(_("This username is already taken."))
        return value
    
class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = '__all__'

class CourtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Court
        fields = '__all__'

class CaseClassificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseClassification
        fields = '__all__'

class CountySerializer(serializers.ModelSerializer):
    class Meta:
        model = County
        fields = '__all__'

class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = '__all__'

class CitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citation
        fields = '__all__'

class JudgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Judge
        fields = '__all__'

class PartySerializer(serializers.ModelSerializer):
    class Meta:
        model = Party
        fields = '__all__'
