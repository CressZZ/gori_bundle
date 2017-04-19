<template >
  <section class="enroll-myinfo-all">
    <h2 class="enroll-myinfo__heading">나의정보</h2>
    <form class="">
      <fieldset>
          <legend class="blind">나의정보 작성폼</legend>
		<table class="enroll-myinfo__basic">
			<caption class="blind">기본 정보</caption>
			<tbody>
			<tr>
				<th class="th2"><p>이름</p></th>
				<td>
					<p>{{userinfo.name}}</p>
				</td>
			</tr>
			<tr>
				<th class="th3"><p>닉네임</p></th>
				<td>
          <p class="">
            <input v-model = "userUpdate.nickname"  type="text">
          </p>
        </td>
			</tr>
			<!-- <tr>
				<th class="th4"><p>비밀번호</p></th>
				<td>
					<div class="pw__wrap">
						<p class="user__pw">
							<label  for="user__pw"><p class="blind">현재 비밀번호</p></label>
							<input class="user__pw-cg" type="password" placeholder="현재비밀번호를 입력">
						</p>
						<p class="">
							<label for="user__pw"><p class="blind">새 비밀번호</p></label>
              <input class="user__pw-cg" type="password" placeholder="새비밀번호를 입력">
						</p>
						<p class="">
							<label for="user__pw-ck"><p class="blind">비밀번호 확인</p></label>
              <input class="user__pw-cg" type="password" placeholder="새비밀번호를 한 번더 입력">
						</p>
					</div>
				</td>
			</tr> -->
			<tr>
				<th class="th3"><p>연락처</p></th>
				<td>
					<div class="">

					<input v-model = "userUpdate.cellphone"  type="tel" pattern="[0-9]{10}" name="tel" title="Phone Number?!?!"/>

					</div>
				</td>
			</tr>
			<!-- <tr>
				<th class="th3"><p>이메일</p></th>
				<td>
					<div class="">
						<input type="email" placeholder="foo@bar.com" />
					</div>
				</td>
			</tr> -->
			<!-- <tr>
				<th class="th4"><p>커버사진</p></th>
				<td class="file_upload">
          <input @change="sync" type="file" multiple="">
				</td>
			</tr> -->
      <tr>
        <th class="th"><p>프로필사진</p></th>
        <td class="file_upload">
          <input @change="sync" type="file" multiple="">
        </td>
      </tr>

			</tbody>
		</table>
    <table class="enroll-myinfo__tutor">
      <caption class="blind">튜터 정보</caption>
        <tbody>
          <tr>
            <th class="th4"><p>인증수단</p></th>
            <td>
                <label class="">
                  <select  @change = "" v-model = "tutorUpdate.verification_method" class="">
                    <option value="UN">대학생</option>
                    <option value="GR">대학원생</option>
                    <option value="ID">신분증</option>
                  </select>
                </label>
            </td>
          </tr>
          <tr>
            <th class="th4"><p>학적상태</p></th>
            <td>
              <label class="">
                <select @change = "" v-model="tutorUpdate.current_status" class="">
                  <option value="G">졸업</option>
                  <option value="E">재학</option>
                  <option value="I">수료</option>
                </select>
              </label>
            </td>
          </tr>
      <tr>
        <th class="th4"><p>인증사진</p></th>
        <td class="file_upload">
          <input @change="sync2" type="file" multiple="">
        </td>
      </tr>
      <tr>
        <th class="th4"><p>학교정보</p></th>
        <td>
          <p class="">
            <input v-model = "tutorUpdate.school" type="text">
          </p>
        </td>
      </tr>
      <tr>
        <th class="th2"><p>전공</p></th>
        <td>
          <p class="">
            <input v-model = "tutorUpdate.major" type="text">
          </p>
        </td>
      </tr>
      <!-- <tr>
        <th class="th4"><p>학적상태</p></th>
        <td>
          <p class="">
            <input v-model = "tutorUpdate.current_status" type="text">
          </p>
        </td>
      </tr> -->

      </tbody>
    </table>
  </fieldset>
</form>
    <button type="button" class="enroll__register-btn" @click="register"> 등록 </button>
  </section>
</template>

<!-- v-model = "userUpdate.profile_image" -->

<script>
export default {
  data(){
    return{
      userinfo: {},
      userUpdate: {
        name: "",
        nickname: "",
        profile_image: "",
        cellphone: "",
      },
      tutorUpdate:{
        verification_method: "",
        verification_images: "",
        school: "",
        major: "",
        current_status: ""
      },
      curriculumnum: 2,
      tempcurriculum:
        {
          talent_pk: "",
          information: ""
        },

      curriculum:[],
    }
  },
  props: ["detailAll"],
  created(){
    this.$http.get('member/profile/user/', {
    headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })
    .then(function(response){
      console.log("user-detail-response:",response)

      return response.json()
    })
    .then(function(data){
      this.userinfo = data
      console.log("user-name:",data.name)
      // console.log("data:",data)
    })
    .catch(function(err){
      console.log("err:",err.bodyText)
    })

  },
  methods: {
    sync: function(e) {
    e.preventDefault()
    this.userUpdate.profile_image = e.target.files[0]

  },
    sync2: function(e) {
    e.preventDefault()
    this.tutorUpdate.verification_images = e.target.files[0]

  },
    // userRegister(){
    //   this.$router.push({ path: 'registerDetail' })
    //   const data = new FormData()
    //   data.append('name', this.userUpdate.name)
    //   data.append('nickname', this.userUpdate.nickname)
    //   data.append('profile_image', this.userUpdate.profile_image)
    //   data.append('cellphone', this.userUpdate.cellphone)
    //   console.log("data:",data)
    //
    //   this.$http.patch('member/update/user/',data,  {
    //   headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    //   })
    //   .then(function(response){
    //     console.log("register-response:",response)
    //     this.userUpdate.name= ""
    //     this.userUpdate.nickname= ""
    //     this.userUpdate.profile_image= ""
    //     this.userUpdate.cellphone= ""
    //
    //   })
    //   .then(function(data){
    //     console.log("register-data:",data)
    //   })
    //   .catch( error => {
    //     console.error("error!!",error)
    //     alert(error.bodyText)
    //   });
    //
    // },
    register(){
      // this.$router.push({ path: 'registerDetail' })
      const data2 = new FormData()
      // data.append('name', this.userUpdate.name)
      data2.append('nickname', this.userUpdate.nickname)
      data2.append('profile_image', this.userUpdate.profile_image)
      data2.append('cellphone', this.userUpdate.cellphone)

      this.$http.patch('member/update/user/',data2,  {
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(data){
        console.log("register-data:",data)
      })

      // const data = new FormData()
      //
      // data.append('verification_method', this.tutorUpdate.verification_method)
      // data.append('verification_images', this.tutorUpdate.verification_images)
      // data.append('school', this.tutorUpdate.school)
      // data.append('major', this.tutorUpdate.major)
      // data.append('current_status', this.tutorUpdate.current_status)
      // console.log("data:",data)
      //
      //
      // const data = new FormData()
      //
      // this.$http.post('member/register/tutor/',data,  {
      // headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      // })
      // .then(function(response){
      //   console.log("register-response:",response)
      //   // this.userUpdate.name= ""
      //   this.userUpdate.nickname= ""
      //   this.userUpdate.profile_image= ""
      //   this.userUpdate.cellphone= ""
      //
      //   this.tutorUpdate.verification_method= ""
      //   this.tutorUpdate.verification_images= ""
      //   this.tutorUpdate.school= ""
      //   this.tutorUpdate.current_status= ""
      //   this.tutorUpdate.current_status= ""
      //
      // })
      // .then(function(data){
      //   console.log("register-data:",data)
      // })
      // .catch( error => {
      //   console.error("error!!",error)
      //   alert(error.bodyText)
      // });

    },


  },
}
</script>

<style lang="css">
</style>
