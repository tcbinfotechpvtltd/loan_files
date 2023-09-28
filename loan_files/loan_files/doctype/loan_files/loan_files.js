// Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Loan Files', {
	before_save:function(frm){
		if(frm.doc.__islocal){
		frappe.call({
			method: "stages",
			doc:frm.doc,
			callback: function(r){
				frm.refresh_field("state")
				// me.frm.reload_doc();

			}
		})
	}
	},
	setup:function(frm){
		frappe.call({
			method: "get_company_value",
			doc:frm.doc,
			callback: function(r){
				frm.refresh_field("company")
				// me.frm.reload_doc();

			}
		})
	},
	
	refresh: function(frm) {
		if(frm.doc.__islocal){
			frappe.call({
				method: "get_company_value",
				doc:frm.doc,
				callback: function(r){
					frm.refresh_field("company")
					// me.frm.reload_doc();

				}
			})
			// frappe.call({
			// 	method: "stages",
			// 	doc:frm.doc,
			// 	callback: function(r){
			// 		frm.refresh_field("state")
			// 		// me.frm.reload_doc();
	
			// 	}
			// })
		}
		if(frm.doc.docstatus==1){
			frappe.model.get_value("User Company", {"user":frappe.session.user}, "read_only_crm_field_for_user", function(value) {
				if(value.read_only_crm_field_for_user==1){
					console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",value)
					frm.set_df_property('company', 'read_only', 1);
					frm.set_df_property('account_name', 'read_only', 1);
					frm.set_df_property('location_of_property', 'read_only', 1);
					frm.set_df_property('type_of_loan', 'read_only', 1);
					frm.set_df_property('bank_name', 'read_only', 1);
					frm.set_df_property('value_of_loan', 'read_only', 1);
					frm.set_df_property('value_of_property', 'read_only', 1);
					frm.set_df_property('commission', 'read_only', 1);
					frm.set_df_property('commission_calculated', 'read_only', 1);
					frm.set_df_property('commission_receive', 'read_only', 1);
					frm.set_df_property('commission_due', 'read_only', 1);
					frm.set_df_property('state', 'read_only', 1);
					frm.set_df_property('status', 'read_only', 1);
					frm.set_df_property('status_history', 'read_only', 1);
					frm.set_df_property('vendor', 'read_only', 1);
					frm.set_df_property('commission_to_be_given', 'read_only', 1);
					frm.set_df_property('commission_already_given', 'read_only', 1);
					frm.set_df_property('commission_due_to_give', 'read_only', 1);

				}
			})
			
		if(frm.doc.status!="Draft"){
		frm.add_custom_button(__('Go back to previous state'), function() {
			frappe.confirm('Are you sure you want to go back to Previous Stage?',
				() => {
					let state=""
			if(frm.doc.status=="File Discussion"){
				let state="Draft"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Documents Received"){
				let state="File Discussion"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Our Queries Given"){
				let state="Documents Received"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Queries Received"){
				let state="Our Queries Given"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Assessment"){
				let state="Queries Received"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Login"){
				let state="Assessment"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Bank Login Queries"){
				let state="Login"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Login Completion"){
				let state="Bank Login Queries"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Credit Queries"){
				let state="Login Completion"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Sanction"){
				let state="Credit Queries"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Technical Assessment"){
				let state="Sanction"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Legal Assessment"){
				let state="Technical Assessment"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Ops"){
				let state="Legal Assessment"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Docket"){
				let state="Ops"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Disbursement"){
				let state="Docket"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Cheques Handover"){
				let state="Disbursement"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Completion"){
				let state="Cheques Handover"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
				}, () => {
					// action to perform if No is selected
				})
			
			
					
			});
		}
		if(frm.doc.status!="Completion"){
		frm.add_custom_button(__('Proceed to next state'), function() {
			frappe.confirm('Are you sure you want to proceed to Next Stage?',
			() => {
				let state=""
				if(frm.doc.status=="Draft"){
					let state="File Discussion"
					frappe.call({
						method: "update_status",
						doc:frm.doc,
						args: {status: state},
						callback: function(r){
							me.frm.reload_doc();
		
							frappe.msgprint("Status Changed Successfully")
		
							// frm.save("Update")
						},
						always: function() {
							frappe.ui.form.is_saving = false;
								// frappe.msgprint("Draft Status Set")
						}
					});
				}
			if(frm.doc.status=="File Discussion"){
				let state="Documents Received"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Documents Received"){
				let state="Our Queries Given"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Our Queries Given"){
				let state="Queries Received"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Queries Received"){
				let state="Assessment"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Assessment"){
				let state="Login"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Login"){
				let state="Bank Login Queries"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Bank Login Queries"){
				let state="Login Completion"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Login Completion"){
				let state="Credit Queries"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Credit Queries"){
				let state="Sanction"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Sanction"){
				let state="Technical Assessment"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Technical Assessment"){
				let state="Legal Assessment"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Legal Assessment"){
				let state="Ops"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Ops"){
				let state="Docket"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Docket"){
				let state="Disbursement"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Disbursement"){
				let state="Cheques Handover"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			if(frm.doc.status=="Cheques Handover"){
				let state="Completion"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
					callback: function(r){
						me.frm.reload_doc();
	
						frappe.msgprint("Status Changed Successfully")
	
						// frm.save("Update")
					},
					always: function() {
						frappe.ui.form.is_saving = false;
							// frappe.msgprint("Draft Status Set")
					}
				});
			}
			}, () => {
				// action to perform if No is selected
			})
			
			
				
		});
	}
	}
	
	
	}
	
});
frappe.ui.form.on('Loan Files', {
    refresh: function(frm) {
        var vendor = frm.doc.vendor;
        if(!vendor) {
            // If no vendor is selected, hide the fields
            frm.toggle_display(['commission_to_be_given', 'commission_already_given', 'commission_due_to_give'], false);
        }
    },

    vendor: function(frm) {
        var vendor = frm.doc.vendor;
        if(vendor) {
            // If a vendor is selected, show the fields
            frm.toggle_display(['commission_to_be_given', 'commission_already_given', 'commission_due_to_give'], true);
        } else {
            // If no vendor is selected, hide the fields
            frm.toggle_display(['commission_to_be_given', 'commission_already_given', 'commission_due_to_give'], false);
        }
    }
});
