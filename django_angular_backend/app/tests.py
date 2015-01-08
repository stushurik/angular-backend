from django.core.urlresolvers import reverse
from django.test import TestCase
from django.test.client import Client


# class HttpTest(TestCase):
#     def test_home(self):
#         c = Client()
#         response = c.get(reverse('home'))
#         self.assertEqual(response.status_code, 200)
#         self.assertContains(response, 'Hello world!')
