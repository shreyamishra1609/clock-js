<script type="text/javascript">
var clock=setInterval(clocktiming,1000)
function clocktiming(){
var date= Date();
var shreya=date.toLocaleTimeString();
document.getElementById("start").innerHTML=shreya;
}
</script>