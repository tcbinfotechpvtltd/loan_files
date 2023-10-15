# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
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
        if self.commission_due == 0:
            self.db_set("file_is_submittable", 1, update_modified=False)
        else:
            self.db_set("file_is_submittable", 0, update_modified=False)

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
        if self.commission_due_to_give == 0:
            self.db_set("file_vendor_is_submittable", 1, update_modified=False)
        else:
            self.db_set("file_vendor_is_submittable", 0, update_modified=False)

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
        self.append("state", {
            "state": "Completed",

        })

    @frappe.whitelist()
    def submit_file_discussion(self):
        status = "Draft"
        if self.file_discussion == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("file_discussion", 1)
            for j in self.state:
                if j.state == "File Discussion":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_file_discussion(self):
        status = "Draft"
        if self.file_discussion == 1:
            self.db_set("file_discussion", 0)
            for j in self.state:
                if j.state == "File Discussion":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_documents_received(self):
        status = "Draft"
        if self.documents_received == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("documents_received", 1)
            for j in self.state:
                if j.state == "Documents Received":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_documents_received(self):
        status = "Draft"
        if self.documents_received == 1:
            self.db_set("documents_received", 0)
            for j in self.state:
                if j.state == "Documents Received":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_our_queries_given(self):
        status = "Draft"
        if self.our_queries_given == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("our_queries_given", 1)
            for j in self.state:
                if j.state == "Our Queries Given":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_our_queries_given(self):
        status = "Draft"
        if self.our_queries_given == 1:
            self.db_set("our_queries_given", 0)
            for j in self.state:
                if j.state == "Our Queries Given":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_queries_received(self):
        status = "Draft"
        if self.queries_received == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("queries_received", 1)
            for j in self.state:
                if j.state == "Queries Received":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_queries_received(self):
        status = "Draft"
        if self.queries_received == 1:
            self.db_set("queries_received", 0)
            for j in self.state:
                if j.state == "Queries Received":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_assessment(self):
        status = "Draft"
        if self.assessment == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("assessment", 1)
            for j in self.state:
                if j.state == "Assessment":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_assessment(self):
        status = "Draft"
        if self.assessment == 1:
            self.db_set("assessment", 0)
            for j in self.state:
                if j.state == "Assessment":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_login(self):
        status = "Draft"
        if self.login == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("login", 1)
            for j in self.state:
                if j.state == "Login":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_login(self):
        status = "Draft"
        if self.login == 1:
            self.db_set("login", 0)
            for j in self.state:
                if j.state == "Login":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_bank_login_queries(self):
        status = "Draft"
        if self.bank_login_queries == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("bank_login_queries", 1)
            for j in self.state:
                if j.state == "Bank Login Queries":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_bank_login_queries(self):
        status = "Draft"
        if self.bank_login_queries == 1:
            self.db_set("bank_login_queries", 0)
            for j in self.state:
                if j.state == "Bank Login Queries":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_credit_queries(self):
        status = "Draft"
        if self.credit_queries == 0:
            print("&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            self.db_set("credit_queries", 1)
            for j in self.state:
                if j.state == "Credit Queries":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_credit_queries(self):
        status = "Draft"
        if self.credit_queries == 1:
            self.db_set("credit_queries", 0)
            for j in self.state:
                if j.state == "Credit Queries":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_login_completion(self):
        status = "Draft"

        if self.login_completion == 0:
            self.db_set("login_completion", 1)
            for j in self.state:
                if j.state == "Login Completion":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_login_completion(self):
        status = "Draft"
        if self.login_completion == 1:
            self.db_set("login_completion", 0)
            for j in self.state:
                if j.state == "Login Completion":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_sanction(self):
        status = "Draft"
        if self.sanction == 0:
            self.db_set("sanction", 1)
            for j in self.state:
                if j.state == "Sanction":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_sanction(self):
        status = "Draft"
        if self.sanction == 1:
            self.db_set("sanction", 0)
            for j in self.state:
                if j.state == "Sanction":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_technical_assessment(self):
        status = "Draft"
        if self.technical_assessment == 0:
            self.db_set("technical_assessment", 1)
            for j in self.state:
                if j.state == "Technical Assessment":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_technical_assessment(self):
        status = "Draft"
        if self.technical_assessment == 1:
            self.db_set("technical_assessment", 0)
            for j in self.state:
                if j.state == "Technical Assessment":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_legel_assessment(self):
        status = "Draft"
        if self.legel_assessment == 0:
            self.db_set("legel_assessment", 1)
            for j in self.state:
                if j.state == "Legel Assessment":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_legel_assessment(self):
        status = "Draft"
        if self.legel_assessment == 1:
            self.db_set("legel_assessment", 0)
            for j in self.state:
                if j.state == "Legel Assessment":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_ops(self):
        status = "Draft"
        if self.ops == 0:
            self.db_set("ops", 1)
            for j in self.state:
                if j.state == "Ops":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_ops(self):
        status = "Draft"
        if self.ops == 1:
            self.db_set("ops", 0)
            for j in self.state:
                if j.state == "Ops":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_docket(self):
        status = "Draft"
        if self.docket == 0:
            self.db_set("docket", 1)
            for j in self.state:
                if j.state == "Docket":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_docket(self):
        status = "Draft"
        if self.docket == 1:
            self.db_set("docket", 0)
            for j in self.state:
                if j.state == "Docket":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_docket(self):
        status = "Draft"
        if self.docket == 0:
            self.db_set("docket", 1)
            for j in self.state:
                if j.state == "Docket":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_docket(self):
        status = "Draft"
        if self.docket == 1:
            self.db_set("docket", 0)
            for j in self.state:
                if j.state == "Docket":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_cheques_handover(self):
        status = "Draft"
        if self.cheques_handover == 0:
            self.db_set("cheques_handover", 1)
            for j in self.state:
                if j.state == "Cheques Handover":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_cheques_handover(self):
        status = "Draft"
        if self.cheques_handover == 1:
            self.db_set("cheques_handover", 0)
            for j in self.state:
                if j.state == "Cheques Handover":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_disbursement(self):
        status = "Draft"
        if self.disbursement == 0:
            self.db_set("disbursement", 1)
            for j in self.state:
                if j.state == "Disbursement":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_disbursement(self):
        status = "Draft"
        if self.disbursement == 1:
            self.db_set("disbursement", 0)
            for j in self.state:
                if j.state == "Disbursement":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def submit_completion_document(self):
        db = frappe.db.get_value("User Company", {"user": frappe.session.user}, "read_only_crm_field_for_user")
        if self.file_is_submittable != 1:
            if db == 1:
                frappe.throw('Please contact administrator for completion of file.')
            else:
                frappe.throw('Commission due must be 0.')
        if self.file_vendor_is_submittable != 1:
            if db == 1:
                frappe.throw('Please contact administrator for completion of file.')
            else:
                frappe.throw('Vendor commission due to give must be 0.')

        status = "Draft"
        if self.file_completed == 0:
            self.db_set("file_completed", 1)
            for j in self.state:
                if j.state == "Completed":
                    j.db_set("check", 1)
                if j.check == 1:
                    status = j.state
                    self.db_set("status", status)
        return status

    @frappe.whitelist()
    def revert_completion_document(self):
        status = "Draft"
        if self.file_completed == 1:
            self.db_set("file_completed", 0)
            for j in self.state:
                if j.state == "Completed":
                    j.db_set("check", 0)
                if j.check == 1:
                    status = j.state
        self.db_set("status", status)
        return status