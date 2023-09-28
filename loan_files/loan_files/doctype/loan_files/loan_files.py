# Copyright (c) 2023, TCB and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document



class LoanFiles(Document):
	def get_feed(self):
		return "{0}".format(frappe._(self.status))

	def on_submit(self):
		self.calculate_commission_due()
		self.calculate_vendor_commission_due()
		self.validate_loan_value()

	def before_save(self):
		self.calculate_commission_due()
		self.get_company_value()
		self.calculate_vendor_commission_due()
		self.validate_loan_value()

	def validate_loan_value(self):
		if self.value_of_loan <= 0:
			frappe.throw("Value of loan must be a positive number")
		if self.value_of_loan and self.commission and self.value_of_loan < self.commission:
			frappe.throw("Value of loan must be greater than commission")

	def on_update_after_submit(self):
		self.calculate_commission_due()
		self.calculate_vendor_commission_due()
		self.validate_loan_value()

	@frappe.whitelist()
	def get_company_value(self):
		comp = frappe.db.get_value("User Company", {"user": frappe.session.user}, ["Company"])
		if comp:
			self.company = comp
			com = frappe.get_doc("Custom Company", comp)
			self.abbr = com.abbr
		else:
			ls = frappe.get_doc("Loan Settings")
			if ls.company:
				self.company = ls.company
				com = frappe.get_doc("Custom Company", ls.company)
				self.abbr = com.abbr

	def calculate_commission_due(self):
		commission_received = self.commission_receive or 0
		commission = self.commission or 0
		if commission != 0 and commission_received == 0:
			self.commission_due = commission
			self.db_set("commission_due", commission, update_modified=True)
		if commission == 0 and commission_received == 0:
			self.commission_due = 0
			self.db_set("commission_due", 0.0, update_modified=True)
		if commission == 0 and commission_received != 0:
			frappe.throw("Commission Received cannot be greater than Commission Value")
		if commission != 0 and commission_received != 0:
			if commission_received > commission:
				frappe.throw("Commission Received cannot be greater than Commission Value")
			else:
				self.commission_due = commission - commission_received
				commission_due = commission - commission_received
				self.db_set("commission_due", commission_due, update_modified=True)

	def calculate_vendor_commission_due(self):
		commission_already_given = self.commission_already_given or 0
		commission_to_be_given = self.commission_to_be_given or 0
		if commission_to_be_given != 0 and commission_already_given == 0:
			self.commission_due_to_give = commission_to_be_given
			self.db_set("commission_due_to_give", commission_to_be_given, update_modified=True)
		if commission_to_be_given == 0 and commission_already_given == 0:
			self.commission_due_to_give = 0
			self.db_set("commission_due_to_give", 0.0, update_modified=True)
		if commission_to_be_given == 0 and commission_already_given != 0:
			frappe.throw("Commission Received cannot be greater than Commission Value")
		if commission_to_be_given != 0 and commission_already_given != 0:
			if commission_already_given > commission_to_be_given:
				frappe.throw("Commission Received cannot be greater than Commission Value")
			else:
				self.commission_due_to_give = commission_to_be_given - commission_already_given
				commission_due_to_give = commission_to_be_given - commission_already_given
				self.db_set("commission_due_to_give", commission_due_to_give, update_modified=True)

	@frappe.whitelist()
	def update_status(self, status):
		if self.status == "Draft":
			self.add_comment('Comment', text=str(frappe.session.user) + ' has changed status from ' + str(
				self.status) + " to " + str(status))

		idx = 0

		for k in self.state:
			if k.state == self.status:
				idx = k.idx
				k.db_set("check", 1)
		self.db_set("status", status, update_modified=True)
		statu = "<table style='border-collapse: unset' width=50%>"

		for k in self.state:
			if k.check == 1:
				statu += "<tr style='background-color: #4caf50; color: #ffffff; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
			else:
				statu += "<tr style='background-color: grey; color: white; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
		statu += "</table>"
		# self.db_set("status_history",statu,update_modified=False)
		for k in self.state:
			if k.idx == idx:
				self.add_comment('Comment', text=str(frappe.session.user) + ' has changed status from ' + str(
					k.state) + " to " + str(self.status))

	@frappe.whitelist()
	def update_prev_status(self, status):
		if status == "Draft":
			self.add_comment('Comment', text=str(frappe.session.user) + ' has changed status from ' + str(
				self.status) + " to " + str(status))

		i = 10000
		idx = 0
		for k in self.state:
			if k.state == status:
				idx = k.idx
				k.db_set("check", 0)
				i = k.idx
				print(i, status, k.state)
		# if k.status==status:
		# 	k.db_set("check",0)

		# for k in self.state:
		# 	if i<k.idx:
		# 		k.db_set("check",0)

		self.db_set("status", status, update_modified=True)

		statu = "<table style='border-collapse: unset' width=50%>"

		for k in self.state:
			if k.check == 1:
				statu += "<tr style='background-color: #4caf50; color: #ffffff; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
			else:
				statu += "<tr style='background-color: grey; color: white; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
		statu += "</table>"
		# self.db_set("status_history",statu,update_modified=False)

		for k in self.state:
			if k.idx == idx + 1:
				self.add_comment('Comment', text=str(frappe.session.user) + ' has changed status from ' + str(
					k.state) + " to " + str(self.status))

	# def on_submit(self):
	# 	for k in self.state:
	# 		if k.state==self.status:
	# 			k.db_set("check",1)

	@frappe.whitelist()
	def stages(self):
		self.state = []
		self.append("state", {
			"state": "File Discussion",

		})
		self.append("state", {
			"state": "Documents Received",

		})
		self.append("state", {
			"state": "Our Queries Given",

		})
		self.append("state", {
			"state": "Queries Received",

		})
		self.append("state", {
			"state": "Assessment",

		})
		self.append("state", {
			"state": "Login",

		})
		self.append("state", {
			"state": "Bank Login Queries",

		})
		self.append("state", {
			"state": "Login Completion",

		})
		self.append("state", {
			"state": "Credit Queries",

		})
		self.append("state", {
			"state": "Sanction",

		})
		self.append("state", {
			"state": "Technical Assessment",

		})
		self.append("state", {
			"state": "Legal Assessment",

		})
		self.append("state", {
			"state": "Ops",

		})
		self.append("state", {
			"state": "Docket",

		})
		self.append("state", {
			"state": "Disbursement",

		})
		self.append("state", {
			"state": "Cheques Handover",

		})