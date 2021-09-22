<template>
   <section>
	<div id="banner"></div>
	<img id="c1" src="https://media-exp1.licdn.com/dms/image/C4D03AQEi8_GBx0ge3w/profile-displayphoto-shrink_800_800/0/1631181511113?e=1637798400&v=beta&t=Qqb9r6-mmZiCDNMg2mqSaWC7Jgxa3GSFhRqgr6z0iMU">
	<h1>Ahmed-Jibril Ait ouaret</h1>
	<h3>Consultant Technico-Fonctionnel Salesforce</h3>
	<a id="b1" href="https://ahmed-jibrilaitouaret.fr/"> Découvres d'avantages</a>
</section>


</template>

<script>
    export default {
        name: 'Ahmed'
    }
</script>

<style>
  
#c1
{
	border-radius: 100%;
	display: block;
	width: 30%;
	margin: 0 auto;
}

h1,h3
{
	text-align: center;
}

#banner
{
	border: white 1px solid;
	z-index: -5;
	position: absolute;
	width: 100%;
	height: 300px;
	background: url(https://media-exp1.licdn.com/dms/image/C4D16AQGUgcrSU_Izxg/profile-displaybackgroundimage-shrink_350_1400/0/1631181026616?e=1637798400&v=beta&t=_HLaYKTZDvEGnpMD5XsxYTcO8UGR-oPKZ-XVwwiZNoU);
	background-position: center;
	background-size: 100%;
	background-repeat: no-repeat;
}

#b1
{
	margin: 20px auto;
	text-decoration: none !important;
	font-size: 22px;
	text-align: center;
	display: block;
	width: 200px;
	height: 75px;
	border-radius: 50px;
	background-color: blueviolet;
	color: white !important;
	-webkit-box-shadow: 1px 10px 15px 2px rgba(0,0,0,0.41);
	box-shadow: 1px 10px 15px 2px rgba(0,0,0,0.41);
}

</style>