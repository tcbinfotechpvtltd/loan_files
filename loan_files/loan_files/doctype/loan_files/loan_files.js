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
		}
		
	
	    if (frm.doc.status == 'Completed') {

	    frm.fields.forEach(function(field) {
                        frm.set_df_property(field.df.fieldname, 'read_only', 1);
                    });

                    // Hide submit/revert buttons
                    frm.fields_dict['submit'].$wrapper.hide();
                    frm.fields_dict['revert'].$wrapper.hide();
                    frm.fields_dict['submit1'].$wrapper.hide();
                    frm.fields_dict['revert1'].$wrapper.hide();
                    frm.fields_dict['submit2'].$wrapper.hide();
                    frm.fields_dict['revert2'].$wrapper.hide();
                    frm.fields_dict['submit3'].$wrapper.hide();
                    frm.fields_dict['revert3'].$wrapper.hide();
                    frm.fields_dict['submit4'].$wrapper.hide();
                    frm.fields_dict['revert4'].$wrapper.hide();
                    frm.fields_dict['submit5'].$wrapper.hide();
                    frm.fields_dict['revert5'].$wrapper.hide();
                    frm.fields_dict['submit6'].$wrapper.hide();
                    frm.fields_dict['revert6'].$wrapper.hide();
                    frm.fields_dict['submit7'].$wrapper.hide();
                    frm.fields_dict['revert7'].$wrapper.hide();
                    frm.fields_dict['submit8'].$wrapper.hide();
                    frm.fields_dict['revert8'].$wrapper.hide();
                    frm.fields_dict['submit9'].$wrapper.hide();
                    frm.fields_dict['revert9'].$wrapper.hide();
                    frm.fields_dict['submit10'].$wrapper.hide();
                    frm.fields_dict['revert10'].$wrapper.hide();
                    frm.fields_dict['submit11'].$wrapper.hide();
                    frm.fields_dict['revert11'].$wrapper.hide();
                    frm.fields_dict['submit12'].$wrapper.hide();
                    frm.fields_dict['revert12'].$wrapper.hide();
                    frm.fields_dict['submit13'].$wrapper.hide();
                    frm.fields_dict['revert13'].$wrapper.hide();
                    frm.fields_dict['submit14'].$wrapper.hide();
                    frm.fields_dict['revert14'].$wrapper.hide();
                    frm.fields_dict['submit15'].$wrapper.hide();
                    frm.fields_dict['revert15'].$wrapper.hide();
	    }
	    else {
			if(frm.doc.docstatus==1){
	    	frm.fields.forEach(function(field) {
                        frm.set_df_property(field.df.fieldname, 'read_only', 0);

                    });
				}
			        frm.set_df_property("file_discussion", "read_only", 1);
			        frm.set_df_property("documents_received", "read_only", 1);
                     frm.set_df_property("our_queries_given", "read_only", 1);
                     frm.set_df_property("queries_received", "read_only", 1);
                     frm.set_df_property("assessment", "read_only", 1);
                     frm.set_df_property("login", "read_only", 1);
                     frm.set_df_property("bank_login_queries", "read_only", 1);
                     frm.set_df_property("credit_queries", "read_only", 1);
                     frm.set_df_property("login_completion", "read_only", 1);
                     frm.set_df_property("sanction", "read_only", 1);
                     frm.set_df_property("technical_assessment", "read_only", 1);
                     frm.set_df_property("legel_assessment", "read_only", 1);
                     frm.set_df_property("ops", "read_only", 1);
                     frm.set_df_property("docket", "read_only", 1);
                     frm.set_df_property("disbursement", "read_only", 1);
                     frm.set_df_property("cheques_handover", "read_only", 1);

	                frm.fields_dict['submit'].$wrapper.show();
                    frm.fields_dict['revert'].$wrapper.show();
                    frm.fields_dict['submit1'].$wrapper.show();
                    frm.fields_dict['revert1'].$wrapper.show();
                    frm.fields_dict['submit2'].$wrapper.show();
                    frm.fields_dict['revert2'].$wrapper.show();
                    frm.fields_dict['submit3'].$wrapper.show();
                    frm.fields_dict['revert3'].$wrapper.show();
                    frm.fields_dict['submit4'].$wrapper.show();
                    frm.fields_dict['revert4'].$wrapper.show();
                    frm.fields_dict['submit5'].$wrapper.show();
                    frm.fields_dict['revert5'].$wrapper.show();
                    frm.fields_dict['submit6'].$wrapper.show();
                    frm.fields_dict['revert6'].$wrapper.show();
                    frm.fields_dict['submit7'].$wrapper.show();
                    frm.fields_dict['revert7'].$wrapper.show();
                    frm.fields_dict['submit8'].$wrapper.show();
                    frm.fields_dict['revert8'].$wrapper.show();
                    frm.fields_dict['submit9'].$wrapper.show();
                    frm.fields_dict['revert9'].$wrapper.show();
                    frm.fields_dict['submit10'].$wrapper.show();
                    frm.fields_dict['revert10'].$wrapper.show();
                    frm.fields_dict['submit11'].$wrapper.show();
                    frm.fields_dict['revert11'].$wrapper.show();
                    frm.fields_dict['submit12'].$wrapper.show();
                    frm.fields_dict['revert12'].$wrapper.show();
                    frm.fields_dict['submit13'].$wrapper.show();
                    frm.fields_dict['revert13'].$wrapper.show();
                    frm.fields_dict['submit14'].$wrapper.show();
                    frm.fields_dict['revert14'].$wrapper.show();
                    frm.fields_dict['submit15'].$wrapper.show();
                    frm.fields_dict['revert15'].$wrapper.show();
	    
	}
		if(frm.doc.docstatus==1){
			frappe.model.get_value("User Company", {"user":frappe.session.user}, "read_only_crm_field_for_user", function(value) {
				if(value.read_only_crm_field_for_user==1){
					frm.fields.forEach(function(field) {
                        frm.set_df_property(field.df.fieldname, 'read_only', 1);
                    });
					
				}
			})

		}
	            document.querySelectorAll("[data-fieldname='status']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='doc_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='file_completed']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='file_vendor_is_submittable']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='file_is_submittable']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='file_discussion_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='documents_received_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='our_queries_given_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='queries_received_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='assessment_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='login_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='bank_login_queries_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='login_completion_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='credit_queries_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='sanction_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='technical_assessment_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='legel_assessment_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='ops_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='docket_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='disbursement_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='cheques_handover_state']")[0].style.display = "none";
	            document.querySelectorAll("[data-fieldname='file_completed_state']")[0].style.display = "none";


	            document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert']")[1].style.cssText += 'height:23px';

                document.querySelectorAll("[data-fieldname='documents_received']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='documents_received']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit1']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert1']")[1].style.cssText += 'height:23px';

                document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit2']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert2']")[1].style.cssText += 'height:23px';

                document.querySelectorAll("[data-fieldname='queries_received']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='queries_received']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit3']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert3']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='assessment']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='assessment']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit4']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert4']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='login']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='login']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit5']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert5']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit6']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert6']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='login_completion']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='login_completion']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit7']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert7']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit8']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert8']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='sanction']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='sanction']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit9']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert9']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit10']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert10']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit11']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert11']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='ops']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='ops']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit12']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert12']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='docket']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='docket']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit13']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert13']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='disbursement']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='disbursement']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit14']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert14']")[1].style.cssText += 'height:23px';


                document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit15']")[1].style.cssText += 'height:23px';
		        document.querySelectorAll("[data-fieldname='revert15']")[1].style.cssText += 'height:23px';


        if (!frm.doc.__islocal) {
//            if(!frm.doc.docstatus==1){
//            frm.toggle_display(['submit'], false);
//				frm.toggle_display(['revert'], false);
//            }
            var file_discussion = frm.doc.file_discussion;
            if (file_discussion) {
                frm.toggle_display(['submit'], false);
				frm.toggle_display(['revert'], true);
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.backgroundColor = "#d3f8d3";
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.borderRadius = "0px 15px 15px 0px";
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.paddingTop = "2px";

            } else {
                frm.toggle_display(['revert'], false);
				frm.toggle_display(['submit'], true);
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.backgroundColor = "white";
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.paddingTop = "2px";

            }

		var documents_received = frm.doc.documents_received;
		if (documents_received) {
		frm.toggle_display(['submit1'], false);
		frm.toggle_display(['revert1'], true);
		document.querySelectorAll("[data-fieldname='documents_received']")[0].style.backgroundColor ="#d3f8d3";
        document.querySelectorAll("[data-fieldname='documents_received']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='documents_received']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert1'], false);
		frm.toggle_display(['submit1'], true);
		document.querySelectorAll("[data-fieldname='documents_received']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='documents_received']")[0].style.paddingTop = "2px";

		}

		var our_queries_given = frm.doc.our_queries_given;
		if (our_queries_given) {
		frm.toggle_display(['submit2'], false);
		frm.toggle_display(['revert2'], true);
		document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert2'], false);
		frm.toggle_display(['submit2'], true);
		document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.paddingTop = "2px";

		}
		var queries_received = frm.doc.queries_received;
		if (queries_received) {
		frm.toggle_display(['submit3'], false);
		frm.toggle_display(['revert3'], true);
		document.querySelectorAll("[data-fieldname='queries_received']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='queries_received']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='queries_received']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert3'], false);
		frm.toggle_display(['submit3'], true);
		document.querySelectorAll("[data-fieldname='queries_received']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='queries_received']")[0].style.paddingTop = "2px";

		}
		var assessment = frm.doc.assessment;
		if (assessment) {
		frm.toggle_display(['submit4'], false);
		frm.toggle_display(['revert4'], true);
		document.querySelectorAll("[data-fieldname='assessment']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='assessment']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='assessment']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert4'], false);
		frm.toggle_display(['submit4'], true);
		document.querySelectorAll("[data-fieldname='assessment']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='assessment']")[0].style.paddingTop = "2px";


		}
		var login = frm.doc.login;
		if (login) {
		frm.toggle_display(['submit5'], false);
		frm.toggle_display(['revert5'], true);
		document.querySelectorAll("[data-fieldname='login']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='login']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='login']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert5'], false);
		frm.toggle_display(['submit5'], true);
		document.querySelectorAll("[data-fieldname='login']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='login']")[0].style.paddingTop = "2px";


		}
		var bank_login_queries = frm.doc.bank_login_queries;
		if (bank_login_queries) {
		frm.toggle_display(['submit6'], false);
		frm.toggle_display(['revert6'], true);
		document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert6'], false);
		frm.toggle_display(['submit6'], true);
		document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.paddingTop = "2px";



		}
		var login_completion = frm.doc.login_completion;
		if (login_completion) {
		frm.toggle_display(['submit7'], false);
		frm.toggle_display(['revert7'], true);
		document.querySelectorAll("[data-fieldname='login_completion']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='login_completion']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='login_completion']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert7'], false);
		frm.toggle_display(['submit7'], true);
		document.querySelectorAll("[data-fieldname='login_completion']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='login_completion']")[0].style.paddingTop = "2px";


		}
		var credit_queries = frm.doc.credit_queries;
		if (credit_queries) {
		frm.toggle_display(['submit8'], false);
		frm.toggle_display(['revert8'], true);
		document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert8'], false);
		frm.toggle_display(['submit8'], true);
		document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.paddingTop = "2px";


		}
		var sanction = frm.doc.sanction;
		if (sanction) {
		frm.toggle_display(['submit9'], false);
		frm.toggle_display(['revert9'], true);
		document.querySelectorAll("[data-fieldname='sanction']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='sanction']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='sanction']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert9'], false);
		frm.toggle_display(['submit9'], true);
		document.querySelectorAll("[data-fieldname='sanction']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='sanction']")[0].style.paddingTop = "2px";


		}
		var technical_assessment = frm.doc.technical_assessment;
		if (technical_assessment) {
		frm.toggle_display(['submit10'], false);
		frm.toggle_display(['revert10'], true);
		document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert10'], false);
		frm.toggle_display(['submit10'], true);
		document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.paddingTop = "2px";


		}
		var legel_assessment = frm.doc.legel_assessment;
		if (legel_assessment) {
		frm.toggle_display(['submit11'], false);
		frm.toggle_display(['revert11'], true);
		document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert11'], false);
		frm.toggle_display(['submit11'], true);
		document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.paddingTop = "2px";


		}
		var ops = frm.doc.ops;
		if (ops) {
		frm.toggle_display(['submit12'], false);
		frm.toggle_display(['revert12'], true);
		document.querySelectorAll("[data-fieldname='ops']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='ops']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='ops']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert12'], false);
		frm.toggle_display(['submit12'], true);
		document.querySelectorAll("[data-fieldname='ops']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='ops']")[0].style.paddingTop = "2px";


		}
		var docket = frm.doc.docket;
		if (docket) {
		frm.toggle_display(['submit13'], false);
		frm.toggle_display(['revert13'], true);
		document.querySelectorAll("[data-fieldname='docket']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='docket']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='docket']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert13'], false);
		frm.toggle_display(['submit13'], true);
		document.querySelectorAll("[data-fieldname='docket']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='docket']")[0].style.paddingTop = "2px";


		}
		var disbursement = frm.doc.disbursement;
		if (disbursement) {
		frm.toggle_display(['submit14'], false);
		frm.toggle_display(['revert14'], true);
		document.querySelectorAll("[data-fieldname='disbursement']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='disbursement']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='disbursement']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert14'], false);
		frm.toggle_display(['submit14'], true);
		document.querySelectorAll("[data-fieldname='disbursement']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='disbursement']")[0].style.paddingTop = "2px";


		}
		var cheques_handover = frm.doc.cheques_handover;
		if (cheques_handover) {
		frm.toggle_display(['submit15'], false);
		frm.toggle_display(['revert15'], true);
		document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.backgroundColor ="#d3f8d3";
                document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.borderRadius = "0px 15px 15px 0px";
        document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.paddingTop = "2px";

		} else {
		frm.toggle_display(['revert15'], false);
		frm.toggle_display(['submit15'], true);
		document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.backgroundColor ="white";
        document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.paddingTop = "2px";

		}
			
        } else {
            frm.toggle_display(['revert'], false);
			frm.toggle_display(['revert1'], false);
			frm.toggle_display(['revert2'], false);
			frm.toggle_display(['revert3'], false);
			frm.toggle_display(['revert4'], false);
			frm.toggle_display(['revert5'], false);
			frm.toggle_display(['revert6'], false);
			frm.toggle_display(['revert7'], false);
			frm.toggle_display(['revert8'], false);
			frm.toggle_display(['revert9'], false);
			frm.toggle_display(['revert10'], false);
			frm.toggle_display(['revert11'], false);
			frm.toggle_display(['revert12'], false);
			frm.toggle_display(['revert13'], false);
			frm.toggle_display(['revert14'], false);
			frm.toggle_display(['revert15'], false);
			document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.backgroundColor = "white";
			document.querySelectorAll("[data-fieldname='documents_received']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='queries_received']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='assessment']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='login']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='login_completion']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='sanction']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='ops']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='docket']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='disbursement']")[0].style.backgroundColor ="white";
			document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.backgroundColor ="white";



			
        }
    },
	
	submit:function(frm){
		// frm.doc.__islocal checks if the document is a new, unsaved document.
		//  If it's not a new document (__islocal is false), it will proceed with the confirmation dialog.
		// If it's a new document, it will display a message asking the user to save or submit the document first.
		if (!frm.doc.__islocal) { 
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_file_discussion",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state","File Discussion");
							frm.set_value("file_discussion_state","Completed");
							// frm.refresh_field("file_discussion")
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
					
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}
	},
    revert: function(frm) {
		frappe.confirm('Are you sure you want to proceed?',
		() => {
			frappe.call({
				method: "revert_file_discussion",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
//					#frm.set_value("doc_state", r.message);
frm.set_value("file_discussion_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
    
    },
	submit1:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					
					frappe.call({
						method: "submit_documents_received",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//								frm.set_value("doc_state","Documents received");
								frm.set_value("documents_received_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert1:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_documents_received",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
//					frm.set_value("doc_state", r.message);
					frm.set_value("documents_received_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit2:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_our_queries_given",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state","Our Queries Given");
							frm.set_value("our_queries_given_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert2:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_our_queries_given",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
//					frm.set_value("doc_state", r.message);
					frm.set_value("our_queries_given_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit3:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					
					frappe.call({
						method: "submit_queries_received",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state","Queries Received");
							frm.set_value("queries_received_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert3:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_queries_received",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("queries_received_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit4:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_assessment",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Assessment");
							frm.set_value("assessment_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert4:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_assessment",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("assessment_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit5:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_login",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Login");
							frm.set_value("login_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert5:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_login",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("login_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit6:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					
					frappe.call({
						method: "submit_bank_login_queries",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Bank Login Queries");
							frm.set_value("bank_login_queries_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert6:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_bank_login_queries",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("bank_login_queries_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit7:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					
					frappe.call({
						method: "submit_login_completion",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Login Completion");
							frm.set_value("login_completion_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert7:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_login_completion",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("login_completion_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit8:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
			
					frappe.call({
						method: "submit_credit_queries",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Credit Queries");
							frm.set_value("credit_queries_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert8:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_credit_queries",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("credit_queries_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit9:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_sanction",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state","Sanction");
							frm.set_value("sanction_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert9:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_sanction",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("sanction_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit10:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					
					frappe.call({
						method: "submit_technical_assessment",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Technical Assessment");
							frm.set_value("technical_assessment_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert10:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_technical_assessment",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("technical_assessment_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit11:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_legel_assessment",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Legel Assessment");
							frm.set_value("legel_assessment_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert11:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_legel_assessment",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("legel_assessment_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit12:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_ops",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Ops");
							frm.set_value("ops_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert12:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_ops",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("ops_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit13:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					frappe.call({
						method: "submit_docket",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Docket");
							frm.set_value("docket_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert13:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_docket",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("docket_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit14:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					
					frappe.call({
						method: "submit_disbursement",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Disbursement");
							frm.set_value("disbursement_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert14:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_disbursement",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("disbursement_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
	},
	submit15:function(frm){
		if (!frm.doc.__islocal) {
			frappe.confirm('Are you sure you want to proceed?',
				() => {
					
					frappe.call({
						method: "submit_cheques_handover",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Cheques Handover");
							frm.set_value("cheques_handover_state","Completed");
							frm.refresh();
							frm.save("Update");
							}
			
						}
					})
				},
				() => {
					// Do nothing if user cancels
				}
			);
		} else {
			frappe.msgprint("Please save or submit the document first.");
		}

	},
	revert15:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frappe.call({
				method: "revert_cheques_handover",
				doc:frm.doc,
				callback: function(r){
					if(r.message){
					//frm.set_value("doc_state", r.message);
frm.set_value("cheques_handover_state", "Pending");
					frm.refresh();
					frm.save("Update");
					}
	
				}
			})
		}, () => {
		})
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


frappe.ui.form.on('Loan Files', {
    refresh: function(frm) {
		if(frm.doc.docstatus==1){
		if(frm.doc.status!="Completed"){
        frm.add_custom_button(__('Mark as Completed'), function() {
            frappe.confirm(__('Are you sure you want to mark this as completed?'), function() {
                // Perform validations
                    // Change status to Completed
                    frappe.call({
						method: "submit_completion_document",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Completed");
							frm.set_value("file_completed_state","Completed");
							frm.refresh();
							frm.save("Update");
							}

						}
					})


                
            });
        });
	}else{
        frm.add_custom_button(__('Go Back'), function() {
            frappe.confirm(__('Are you sure you want to go back to draft'), function() {
                // Perform validations
                    // Change status to Completed
                    frappe.call({
						method: "revert_completion_document",
						doc:frm.doc,
						callback: function(r){
							if(r.message){
//							frm.set_value("doc_state", "Completed");
							frm.set_value("file_completed_state","Pending");
							frm.refresh();
							frm.save("Update");
							}

						}
					})


          
            });
        });
    }
}
}
});