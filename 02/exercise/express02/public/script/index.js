$(function(argument){
	$("#btnsubmit").click(function(event){
		event.preventDefault();
		$.ajax({
			url:'/receive',
			type:'get',
			dataType:'json',
			data:{
				userName:$("#userName").val()
			},
			success:function(data){
				console.log(data);
			},
			error:function(){
				alert('error');
			}
		})
	});
});