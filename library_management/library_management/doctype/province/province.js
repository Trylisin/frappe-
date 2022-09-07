// Copyright (c) 2022, Lisin and contributors
// For license information, please see license.txt

frappe.ui.form.on('Province', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('ProvinceDe', {
   
	amount: (frm,cdt, cdn) => getTotal(frm,cdt,cdn),
	qty: 	(frm,cdt, cdn) => getTotal(frm,cdt,cdn)

})


let getTotal = (frm, cdt, cdn) => {

	let row 		= locals[cdt][cdn];
	let grandtotal 	= 0
	
	if (!row.qty) row.qty = 0;
	if (!row.amount) row.amount = 0;

	frm.doc.provincede.forEach(function(row) {
		frappe.model.set_value(row.doctype, row.name, 'total', (row.amount * row.qty)); //calculate total amount for each row
		grandtotal += row.total
	  });

	// frappe.model.set_value(row.doctype, row.name, 'total', (row.amount * row.qty)); //calculate total amount for each row
	// grandtotal += row.total
	frm.refresh_field('total');
	frm.set_value('grandtotal',grandtotal)
}