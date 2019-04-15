<template>
  <div id="app">
    <!-- header -->
    <test-header></test-header>
    <!-- // header -->

    <!-- container -->
    <div id="container">
        <div id="content">
            <h2 class="blind">회원가입</h2>
            <div class="join_content">
                <!-- 아이디, 비밀번호 입력 -->
                <div class="row_group">
                    <div class="join_row">
                        <h3 class="join_title"><label for="id">아이디</label></h3>
                        <span class="ps_box int_id">
                            <input type="text" id="id" name="id" class="int" title="ID" maxlength="20" v-model="id" v-on:blur="checkId">
                            <span class="step_url">@naver.com</span>
                        </span>
                        <span class="error_next_box" id="idMsg" style="" role="alert">{{idmsg}}</span>
                    </div>

                    <div class="join_row">
                        <h3 class="join_title"><label for="pswd1">비밀번호</label></h3>
                        <span class="ps_box int_pass" id="pswd1Img">
                            <input type="password" id="pswd1" name="pswd1" class="int" title="비밀번호 입력" aria-describedby="pswd1Msg" maxlength="20" v-model="password" v-on:blur="checkPassword">
                            <span class="lbl"><span id="pswd1Span" class="step_txt">{{stepTxt}}</span></span>
                        </span>
                        <span class="error_next_box" id="pswd1Msg" role="alert">{{pswd1msg}}</span>
                        <h3 class="join_title"><label for="pswd2">비밀번호 재확인</label></h3>
                        <span class="ps_box" id="pswd2Img" :class="checkEqual ==  true ? 'int_pass_check2' : 'int_pass_check'">
                            <input type="password" id="pswd2" name="pswd2" class="int" title="비밀번호 재확인 입력" v-model="repassword" v-on:blur="checkPassEqual" aria-describedby="pswd2Blind" maxlength="20">
                            <span id="pswd2Blind" class="wa_blind"></span>
                        </span>
                        <span class="error_next_box" id="pswd2Msg" style="" role="alert">{{pswdMsg}}</span>
                    </div>
                </div>
                <!-- // 아이디, 비밀번호 입력 -->

                <!-- 이름, 생년월일 입력 -->
                <div class="row_group">
                    <div class="join_row">
                        <h3 class="join_title"><label for="name">이름</label></h3>
                        <span class="ps_box box_right_space">
                            <input type="text" id="name" name="name" title="이름" class="int" maxlength="40" v-model="chkname" v-on:blur="checkNameRequire">
                        </span>
                        <span class="error_next_box" id="nameMsg" style="" role="alert">필수 정보입니다.</span>
                    </div>
                    

                    <div class="join_row join_birthday">
                        <h3 class="join_title"><label for="yy">생년월일</label></h3>
                            <div class="bir_wrap">
                                <div class="bir_yy">
                                    <span class="ps_box">
                                        <input type="text" id="yy" placeholder="년(4자)" aria-label="년(4자)" class="int" maxlength="4">
                                    </span>
                                </div>
                                <div class="bir_mm">
                                    <span class="ps_box">
                                        <select id="mm" class="sel" aria-label="월">
                                            <option>월</option>
                                            <option value="01">1</option>
                                            <option value="02">2</option>
                                            <option value="03">3</option>
                                            <option value="04">4</option>
                                            <option value="05">5</option>
                                            <option value="06">6</option>
                                            <option value="07">7</option>
                                            <option value="08">8</option>
                                            <option value="09">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </span>
                                </div>
                                <div class=" bir_dd">
                                    <span class="ps_box">
                                        <input type="text" id="dd" placeholder="일" aria-label="일" class="int" maxlength="2">
                                        <label for="dd" class="lbl"></label>
                                    </span>
                                </div>
                        </div>
                        <span class="error_next_box" id="birthdayMsg" style="" role="alert">태어난 년도 4자리를 정확하게 입력하세요.</span>
                    </div>

                    <div class="join_row join_sex">
                        <h3 class="join_title"><label for="gender">성별</label></h3>
                        <div class="ps_box gender_code">
                            <select id="gender" name="gender" class="sel" aria-label="성별">
                                <option value="" selected="">성별</option>
                                <option value="0">남자</option>
                                <option value="1">여자</option>
                            </select>
                        </div>
                    </div>
                    <span class="error_next_box" id="genderMsg" style="display:none" role="alert"></span>

                    <div class="join_row join_email">
                        <h3 class="join_title"><label for="email">본인 확인 이메일<span class="terms_choice">(선택)</span></label></h3>
                        <span class="ps_box int_email box_right_space">
                            <input type="text" id="email" name="email" maxlength="100" placeholder="선택입력" aria-label="선택입력" class="int">
                        </span>
                    </div>
                    <span class="error_next_box" id="emailMsg" style="display:none" role="alert"></span>
                </div>
                <!-- // 이름, 생년월일 입력 -->

                <!-- 휴대전화 번호, 인증번호 입력 -->
                <div class="join_row join_mobile" id="mobDiv">
                    <h3 class="join_title"><label for="phoneNo">휴대전화</label></h3>
                        <div class="ps_box country_code">
                            <nation-number></nation-number>
                        </div>
                        <div class="int_mobile_area">
                            <span class="ps_box int_mobile">
                                <input type="tel" id="phoneNo" name="phoneNo" placeholder="전화번호 입력" aria-label="전화번호 입력" class="int" maxlength="16">
                                <label for="phoneNo" class="lbl"></label>
                            </span>
                            <a href="#" class="btn_verify btn_primary" id="btnSend" role="button"><span class="">인증번호 받기</span></a>
                        </div>
                        <div class="ps_box_disable box_right_space" id="authNoBox">
                            <input type="tel" id="authNo" name="authNo" placeholder="인증번호 입력하세요" aria-label="인증번호 입력하세요" aria-describedby="wa_verify" class="int" disabled="" maxlength="4">
                            <label id="wa_verify" for="authNo" class="lbl">
                                <span class="wa_blind">인증받은 후 인증번호를 입력해야 합니다.</span>
                                <span class="input_code" id="authNoCode" style="display:none;"></span>
                            </label>
                        </div>
                    <span class="error_next_box" id="phoneNoMsg" style="" role="alert">필수 정보입니다.</span>
                </div>
                <!-- // 휴대전화 번호, 인증번호 입력 -->
                <div class="btn_area">
                    <basic-button 
                        id="btnJoin"
                        btnText="가입하기"
                        class="btn_type"
                        >
                    </basic-button>
                </div>
            </div>
        </div>
    </div>
    <!-- // container -->

    <!-- footer -->
    <test-footer></test-footer>
    <!-- // footer -->
  </div>
</template>

<script>
import TestHeader from './components/TestHeader.vue'
import TestFooter from './components/TestFooter.vue'
import BasicButton from './components/BasicButton.vue'
import NationNumber from './components/NationNumber.vue'

export default {
  name: 'App',
  components :{TestHeader,TestFooter,BasicButton,NationNumber},
  data () {
      return {
          password :'',
          repassword :'',
          chkname : '',
          id:'',
          idmsg:'',
          pswdMsg:'',
          pswd1msg:'',
          stepTxt:'',
          checkEqual : false
      }
  },
  created (){
    //input 에 focus시 스타일 지정
    var inputs = document.getElementsByClassName("int");

    for(var i = 0; i < inputs.length; ++i){
        inputs[i].onfocus = function() {
            this.parentNode.classList.add("focus");
        }
        inputs[i].onblur = function() {
            this.parentNode.classList.remove("focus");
        }
    }
  },
  methods : {
      //아이디 체크 유효성 검사
      checkId : function(){
          var regExpSpace = /\s/g; // 공백체크
          var regExpUpper = /[A-Z]/; //대문자체크
          var regExpKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글체크
          var regExpSpc = /[~!@#$%^&*()+|<>?:{}]/; // 특수문자
          var id = this.id;
          var idLength = id.length;
          var idMsg = document.getElementById("idMsg");
          
          if (idLength <= 0){
              //입력이 안되었을 경우
              consoel.log("아이디 입력 안됨");
              idMsg.style.display = "block";
              consoel.log("여기");
              idMsg.classList.remove("green");
              this.idmsg = "필수 정보입니다.";
          } else {
              // 아이디 유효성 체크
              if (regExpSpace.test(id) || regExpUpper.test(id) || regExpKor.test(id)  || regExpSpc.test(id) || (idLength < 5 || idLength > 20) ) {
              idMsg.style.display = "block";
              idMsg.classList.remove("green");
              this.idmsg = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
             } else{
              idMsg.style.display = "block";
              idMsg.classList.add("green");
              this.idmsg = "멋진 아이디네요!";
             }
          }
      },
      //비밀번호 체크 유효성 검사
      checkPassword : function(){
          var regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{7,18}$/;
          var password = this.password;
          var pswd1Msg = document.getElementById("pswd1Msg");
          var pswd1Img = document.getElementById("pswd1Img");
          var pswd1Span = document.getElementById("pswd1Span");
          if(password.length == 0 ){
              this.pswd1msg="필수 정보입니다";
          } else {
                if (!regExpPw.test(password)){
                    pswd1Msg.style.display="block";
                    pswd1Img.classList.remove("int_pass");
                    pswd1Img.classList.remove("int_pass_step4");
                    pswd1Img.classList.add("int_pass_step1");
                    this.pswd1msg="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요";
                    this.stepTxt ="사용불가";
                } else {
                    pswd1Img.classList.remove("int_pass");
                    pswd1Img.classList.remove("int_pass_step1");
                    pswd1Img.classList.add("int_pass_step4");
                    pswd1Msg.style.display="none";
                    this.stepTxt ="사용가능";
                }
          }
                    
         
      },
      //이름 필수입력 체크
      checkNameRequire : function(){
          var name = this.chkname;
          var nameMsg = document.getElementById("nameMsg");
          if(name.length == 0){
              nameMsg.style.display = "block";
          } else{
              nameMsg.style.display = "none";
          }
      },
      checkPassEqual : function(){
          var pswd2Msg = document.getElementById("pswd2Msg");
          var pswd2Img = document.getElementById("pswd2Img");
          if(this.repassword.length == 0){
              pswd2Msg.style.display ="block";
              this.pswdMsg ="필수 정보입니다."
          } else {
              if(this.password != this.repassword){
              this.pswdMsg ="비밀번호가 일치하지 않습니다."
              pswd2Msg.style.display ="block";
            } else {
                this.checkEqual = true;
                pswd2Msg.style.display ="none";
            }
          }
          
      }
  }
}
</script>

<style lang="scss">
    @import './assets/css/reset.css';
    @import './assets/css/common.scss';
    
    .row_group {
        overflow: hidden;
        width: 100%;
        & +.row_group{
            margin-top: 20px;
        }
    }
    .ps_box {
        display: block;
        position: relative;
        width: 100%;
        height: 51px;
        border: solid 1px #dadada;
        padding: 10px 14px 10px 14px;
        background: #fff;
        @extend .border-box;
        &.int_id{padding-right: 110px;}
        &.focus{border: solid 1px #08a600;}
        &.int_pass,
        &.ps_box.int_pass_check,&.ps_box.int_pass_check2{padding-right: 40px;}
        &.int_pass,&.int_pass_check,&.int_pass_check2,&.int_pass_step1,&.int_pass_step4{
            &:after{
                content: '';
                display: inline-block;
                position: absolute;
                top: 50%;
                right: 16px;
                width: 18px;
                height: 20px;
                margin-top: -10px;
                cursor: pointer;
            }
        }
        &.int_pass_step1{
            padding: 10px 93px 10px 14px;
            &:after {
                background: #fff url(https://static.nid.naver.com/images/ui/join/m_icon_not_use.png) 0 0 no-repeat;
                -webkit-background-size: 18px 20px;
                background-size: 18px 20px;
            }
        }
        &.int_pass_step4{
            padding: 10px 93px 10px 14px;
            &:after {
                background: #fff url(https://static.nid.naver.com/images/ui/join/m_icon_safe.png) 0 0 no-repeat;
                -webkit-background-size: 17px 20px;
                background-size: 18px 20px;
            }
        }
        .lbl {
            left: 0;
            padding: 0 14px;
            width: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
    .ps_box_disable {
        display: block;
        position: relative;
        width: 100%;
        height: 51px;
        border: solid 1px #dadada;
        padding: 10px 14px 10px 14px;
        background: #fff;
        @extend .border-box;
    }

   
    .ps_box.int_pass:after {
        background: #fff url(https://static.nid.naver.com/images/ui/join/pc_icon_pass_180417.png) 0 0 no-repeat;
    }
    .ps_box.int_pass_check:after {
        right: 13px;
        width: 20px;
        height: 20px;
        background: #fff url(https://static.nid.naver.com/images/ui/join/pc_icon_check_disable_180417.png) 0 0 no-repeat;
    }
    .ps_box.int_pass_check2:after {
        right: 13px;
        width: 20px;
        height: 20px;
        background: #fff url(https://static.nid.naver.com/images/ui/join/pc_icon_check_enable_180417.png) 0 0 no-repeat;
    }
    .ps_box.int_pass_step1:after {
        background: #fff url(https://static.nid.naver.com/images/ui/join/m_icon_not_use.png) 0 0 no-repeat;
        -webkit-background-size: 18px 20px;
        background-size: 18px 20px;
    }
   
    .join_title {
        margin: 19px 0 8px;
        font-size: 14px;
        font-weight: 700;
    }
    
    .step_url {
        position: absolute;
        top: 16px;
        right: 13px;
        font-size: 15px;
        line-height: 18px;
        color: #8e8e8e;
    }
    .bir_wrap, .name_wrap {
        display: table;
        width: 100%;
    }
    .join_birthday .ps_box {
        padding: 11px 14px;
    }
    .bir_dd, .bir_mm, .bir_yy {
        display: table-cell;
        table-layout: fixed;
        width: 147px;
        vertical-align: middle;
    }
    .bir_mm+.bir_dd, .bir_yy+.bir_mm {
        padding-left: 10px;
    }
    .join_email {
        .terms_choice {
            font-size: 12px;
            font-weight: 400;
        }
    }
    .country_code {
        position: relative;
        overflow: hidden;
    }
    .gender_nationality .gender_code, .join_mobile .country_code, .join_sex .gender_code {
        display: block;
        width: 100%;
        padding-right: 7px;
        @extend .border-box;
    }
    .btn_area {
        margin: 30px 0 9px;
    }
    .btn_verify {
        display: block;
        font-size: 15px;
        cursor: pointer;
    }
    .join_mobile {
        .int_mobile_area {
            position: relative;
            margin-top: 10px;
            padding: 0 125px 0 0;
            .btn_verify {
                position: absolute;
                top: 0;
                right: 0;
                width: 115px;
                height: 51px;
                padding: 18px 0 16px;
                text-align: center;
                text-decoration: none;
                @extend .border-box;
            }
        }
        .int_mobile {
            display: inline-block;
            width: 100%;
            padding: 10px 15px 10px 14px;
            vertical-align: top;
        }
        .ps_box_disable{
            background:#f7f7f7;
            outline:0;
        }
    }
   
    
    .int_mobile_area+.ps_box, .int_mobile_area+.ps_box_disable, .ps_box_disable+.ps_box {
        margin-top: 10px;
    }
    .ps_box_disable input{
        background:#f7f7f7;
        outline:0;
    }
    
    @media (max-width: 1024px){
        #container {
            width: auto;
            max-width: 768px;
        }
    }
    @media (max-width: 767px){
        #container, #footer, #header {
            min-width: 300px;
            margin: 0 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        #content {
            max-width: 460px;
            width: auto;
        }
    }
</style>

