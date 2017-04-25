<template >
  <section class="enroll-myinfo-all-tutor">
    <h2 class="enroll-myinfo__heading">튜터정보</h2>
    <form class="">
      <fieldset>
          <legend class="blind">튜터정보 작성폼</legend>
    <table class="enroll-myinfo__tutor">
      <caption class="blind">튜터 정보</caption>
        <tbody>
          <tr>
            <th class="th4"><p>인증수단</p></th>
            <td>
                <label class="enroll-myinfo__tutor-id">
                  <select class=""  @change = "" v-model = "tutorUpdate.verification_method">
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
              <label class="enroll-myinfo__tutor-status">
                <select @change = "" v-model="tutorUpdate.current_status" class="">
                  <option value="G">졸업</option>
                  <option value="E">재학</option>
                  <option value="I">수료</option>
                </select>
              </label>
            </td>
          </tr>
      <tr>
        <th class=""><p>인증사진</p></th>
        <td class="file_upload">
          <input @change="sync2" type="file" multiple="">
        </td>
      </tr>
      <tr>
        <th class="th4"><p>학교정보</p></th>
        <td>
          <p class="enroll-myinfo__tutor-pic">
            <input v-model = "tutorUpdate.school" type="text">
          </p>
        </td>
      </tr>
      <tr>
        <th class="th4"><p>전공과목</p></th>
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


  },
  methods: {
    sync2: function(e) {
    e.preventDefault()
    this.tutorUpdate.verification_images = e.target.files[0]

  },
    register(){
      const data = new FormData()
      data.append('verification_method', this.tutorUpdate.verification_method)
      data.append('verification_images', this.tutorUpdate.verification_images)
      data.append('school', this.tutorUpdate.school)
      data.append('major', this.tutorUpdate.major)
      data.append('current_status', this.tutorUpdate.current_status)
      this.$http.post('member/register/tutor/',data,  {
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(response){
        console.log("register-response:",response)
        this.tutorUpdate.verification_method= ""
        this.tutorUpdate.verification_images= ""
        this.tutorUpdate.school= ""
        this.tutorUpdate.current_status= ""
        this.tutorUpdate.major= ""
        alert(response.body.detail)
        return
      })
      .catch( error => {
        return error.json()
      })
      .then( error => {
        console.error("error",error)
        alert(error.detail)
      });
    },


  },
}
</script>

<style lang="css">
</style>
