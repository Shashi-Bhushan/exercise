/*FAQ's [START]*/
$(document).ready(function(){

$(".nav-tabs li:nth-child(1) > a").addClass('active show');

$(".tab-content .tab-pane:nth-child(1)").addClass('active show');

$(".accordion li.popular_question:nth-child(1) .acc-content").show();


$("ul.accordion > li .acc-tab").click(function() {
	$(this).closest('li').siblings().find('.acc-tab').removeClass('active').next('.acc-content').slideUp(250);
	$(this).toggleClass("active").next('.acc-content').slideToggle(250);
});


$('.categorie-holder > span').click(function() {
	$('.faq-lh .nav.nav-tabs').toggle();
});


});
/*FAQ's [END]*/