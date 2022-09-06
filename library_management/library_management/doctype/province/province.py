# Copyright (c) 2022, Lisin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Province(Document):
	
	def before_save(self):
		self.localdescription = f'{self.description}'
	age = 17
	def validate(self):
		if self.age < 18:
			frappe.throw("Person's age must be at least 18")