from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
User = get_user_model()

class Command(BaseCommand):
    help = 'Create a superuser non-interactively if one does not exist'

    def handle(self, *args, **options):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser('admin', 'admin@admin.com', '123456')
            self.stdout.write(self.style.SUCCESS('Successfully created new superuser'))