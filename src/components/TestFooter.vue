<template>
    <div id="footer" role="contentinfo">
		<ul>
			<li><a href="http://policy.naver.com/rules/service.html">이용약관</a></li>
			<li><strong><a href="http://policy.naver.com/policy/privacy.html">개인정보처리방침</a></strong></li>
			<li><a href="http://policy.naver.com/rules/disclaimer.html">책임의 한계와 법적고지</a></li>
			<li><a href="https://help.naver.com/support/alias/membership/p.membership/p.membership_26.naver" target="_blank">회원정보 고객센터 </a></li>
		</ul>
		<address>
			<em><a href="https://www.navercorp.com/" target="_blank" class="logo"><span class="blind">naver</span></a></em>
			<em class="copy">Copyright</em>
			<em class="u_cri">©</em>
			<a href="https://www.navercorp.com/" target="_blank" class="u_cra">NAVER Corp.</a>
			<span class="all_r">All Rights Reserved.</span>
		</address>
	</div>
</template>

<script>
export default {
  
}
</script>

<style>
#footer {
    clear: both;
    margin: 0 auto;
    padding: 30px 0 15px 0;
    text-align: center;
}
#footer * {
    font-size: 12px;
    font-style: normal;
    line-height: normal;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #333;
}
#footer ul {
    margin: 0 0 9px 0;
}
#footer ul li {
    font-size: 12px;
    position: relative;
    display: inline;
    padding: 0 3px 0 7px;
    white-space: nowrap;
    background: url(https://static.nid.naver.com/images/join/pc/bu_bar_2x.gif) left 50% no-repeat;
    -webkit-background-size: 1px 10px;
    background-size: 1px 10px;
}
#footer ul li:first-child {
    background: 0 0;
}
#footer address {
    font: 9px/14px Verdana;
}
#footer address em {
    font: 9px verdana;
    padding-left: 4px;
}
#footer address .u_cri {
    display: none;
    margin: 0;
    padding-left: 1px;
    font-size: 12px;
}
#footer address a {
    font: 700 9px Verdana;
    color: #333;
}
#footer address span {
    font: 9px/14px Verdana;
    padding-left: 2px;
}

#footer address .logo {
    position: relative;
    display: inline-block;
    width: 63px;
    height: 11px;
    background: url(https://static.nid.naver.com/images/join/pc/ci_naver.gif) no-repeat;
    background-position: 0 0;
    -webkit-background-size: 63px 11px;
    background-size: 63px 11px;
    top: 2px;
    margin-left: 1px;
}
@media (max-width: 1024px){
    
    #footer address .bar, #footer address .u_cra, #footer address .u_cri {
        display: inline-block;
        font-size: 12px;
        font-family: Arial,Helvetica,sans-serif;
        font-weight: 400;
        color: #7e7e7e;
    }
        #footer a, #footer a:visited {
        color: #7e7e7e;
    }
    #footer .u_cr, #footer address .all_r, #footer address .copy, #footer address .logo {
        display: none;
    }
}
@media (max-width: 767px){
    #container, #footer, #header {
        min-width: 300px;
        margin: 0 10px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
}
</style>
