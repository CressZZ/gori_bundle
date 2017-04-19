<template >
  <section class="enroll-myinfo-all-myinfo">
    <h2 class="enroll-myinfo__heading">나의정보 수정</h2>
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
    this.getUserInfo()
},

methods: {
    sync: function(e) {
    e.preventDefault()
    this.userUpdate.profile_image = e.target.files[0]
  },
  getUserInfo() {
    this.$http.get('member/profile/user/', {
    headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })
    .then(function(response){
      console.log("user-detail-response:",response)
      return response.json()
    })
    .then(function(data){
      this.$store.commit('loginInfo', data)
      console.log("user-nickname:",data.nickname)
      console.log("data:",data)
    })
    .catch(function(err){
      console.log("err:",err.bodyText)
    })
  },

  register() {
    const data2 = new FormData()
    data2.append('nickname', this.userUpdate.nickname)
    data2.append('profile_image', this.userUpdate.profile_image)
    data2.append('cellphone', this.userUpdate.cellphone)

    this.$http.patch('member/update/user/',data2,  {
    headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
    .then(function(data){
      console.log("fatch-userdata:",data)
      console.log("this.$store.state.login.loginInfo:",this.$store.state.login.loginInfo)
      this.getUserInfo()
      })
    },

  },
}
</script>

<style lang="css">
</style>
