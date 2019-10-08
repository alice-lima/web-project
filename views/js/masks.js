$(document).ready(function() {
	//$.mask.definitions['~'] = '[+-]';
	$("#date").mask("00/00/0000",{completed:function(){alert("completed!");}});
	$("#celular").mask("(999) 9999-9999");
	$('.cpf').mask('999.999.999-99'), {reverse: true};
	$("#tin").mask("99-9999999");
	$("#ssn").mask("999-99-9999");
	$("#product").mask("a*-999-a999", { placeholder: " " });
	$("#eyescript").mask("~9.99 ~9.99 999");
	$("#po").mask("PO: aaa-999-***");
	$('"#pct"').mask("99%");
	$('input[type=tel]').focusout(function(){
		var phone, element;
		element = $(this);
		element.unmask();
		phone = element.val().replace(/\D/g, '');
		if(phone.length > 10) {
			element.mask("(99) 99999-999?9");
		} else {
			element.mask("(99) 9999-9999?9");
		}
	}).trigger('focusout');
	$("input").blur(function() {
		$("#info").html("Unmasked value: " + $(this).mask());
	}).dblclick(function() {
		$(this).unmask();
	});
	$("#inputcpf").mask("000.000.000-00", {reverse: true});
	$("#rg").mask("999.999.999-W", {
		translation: {
			//Dígito personalizado que admite os caracteres dentro dos colchetes(X(apenas em maiúsculo) e algarismos de 0 a 9)
			'W' : {
				pattern: /[X0-9]/
			}
		},
		reverse: true
	})
})