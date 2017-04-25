<template >


<div class="enroll__detail">
  <section class="enroll-lec__time-cost">
    <h2 class="enroll-lec__time-cost__heading">커리큘럼</h2>
    <fieldset class="">

  <div class="enroll-lec__curriculum">
    <h3 class="">커리큘럼</h3>
    <div class="enroll-lec__curriculum-wrap">

    <ul class="enroll-lec__curriculum-list">

      <li v-for = "(item, index) in curriculumnum">
        <div class="enroll-lec__curriculum-label-wrap">
          <p class="enroll-lec__curriculum1">{{item}}회차</p>

          <label>
            <input @change="sync(this.event, index)" class="enroll-lec__curriculum__picture" type="file" multiple="">
          </label>

        </div>

        <textarea  v-model = "curriculum[index].information" @onchange = "inputCurriculum" placeholder="내용을 입력해주세요" class=""></textarea>
      </li>

    </ul>

      <div class="curriculum__button-wrapper">
        <button @click = "deleteCurriculum" type= "button">커리큘럼 삭제 - </button>
        <button @click = "addCurriculum" type= "button">커리큘럼 추가 + </button>
      </div>
    </div>

  </div>
</fieldset>
</section>


  <section class="enroll-lec__time-cost">
    <h2 class="enroll-lec__time-cost__heading-set">시간 및 비용 설정</h2>
    <fieldset class="">

      <div class="row_group">
        <div class="enroll-lec__list">
          <h3 class="">수업요일</h3>

          <form  class="enroll-lec__day">
            <input type="radio" name="day"  id="mon" value="MO" v-model="registerdetailInfo.day">
            <label for="mon">월</label>
            <input type="radio" name="day" id="tue" value="TU" v-model="registerdetailInfo.day">
            <label for="tue">화</label>
            <input type="radio" name="day" id="wed" value="WE" v-model="registerdetailInfo.day">
            <label for="wed">수</label>
            <input type="radio" name="day" id="thu" value="TH" v-model="registerdetailInfo.day">
            <label for="thu">목</label>
            <input type="radio" name="day" id="fri" value="FR" v-model="registerdetailInfo.day">
            <label for="fri">금</label>
            <input type="radio" name="day" id="sat" value="SA" v-model="registerdetailInfo.day">
            <label for="sat">토</label>
            <input type="radio" name="day" id="sun" value="SU" v-model="registerdetailInfo.day">
            <label for="sun">일</label>
          </form>

        </div>
        <div class="enroll-lec__list enroll-lec__time">
          <h3 class="">수업시간</h3>
          <input type="text" v-model = "registerdetailInfo.time" placeholder=" 예:9:00~11:00/13:00~14:00" class="enroll-lec__time__input">
        </div>

      </div>
    </fieldset>
  </section>


  <section class="enroll-lec-location">
    <h2 class="enroll-lec-location__heading">장소등록</h2>
    <fieldset class="">
      <div class="">
        <div class="enroll-lec__list ">
          <h3 class="">대표장소</h3>

          <label class="enroll-lec__location">
            <select  v-model = "registerdetailInfo.region" >
              <option value=""> 지역 전체</option>
              <option value="KOU">고려대</option>
              <option value="SNU">서울대</option>
              <option value="YOU">연세대</option>
              <option value="HOU">홍익대</option>
              <option value="EWWU">이화여대</option>
              <option value="BSU">부산대</option>
              <option value="JAU">중앙대</option>
              <option value="GGU">건국대</option>
              <option value="HYU">한양대</option>
              <option value="KN">강남</option>
              <option value="SC">신촌</option>
              <option value="SD">사당</option>
              <option value="JS">잠실</option>
              <option value="JR">종로</option>
              <option value="HH">혜화</option>
              <option value="YS">용산</option>
              <option value="HJ">합정</option>
              <option value="MD">목동</option>
              <option value="ETC">기타</option>
            </select>
          </label>
        </div>
        <div class="enroll-lec__list enroll-lec-location-notice-qa">
          <h3 class="enroll-lec-location-notice-q">추가비용</h3>
          <form class="enroll-lec__addcost">
            <input  v-model = "registerdetailInfo.extra_fee" type="radio" name="addcost" value="Y"> <label>예, 있습니다. </label>
            <input  v-model = "registerdetailInfo.extra_fee" type="radio"  name="addcost" value="N"><label> 아니오,없습니다.</label>
          </form>
        </div>
        <div class="enroll-lec__list enroll-lec-location__heading-comment">
          <h3 class="">비용안내</h3>
          <input  v-model = "registerdetailInfo.extra_fee_amount" type="text"
          placeholder="비용에 관한 추가 안내를 적어주세요"
          class="">
        </div>
      </div>
    </fieldset>


  </section>
  <div class="enroll-btn-all">
    <button @click = "complite "class="enroll-btn ">등록하기</button>
  </div>

</div>
</template>

<script>
import {bus} from '../bus'

export default {
  data(){
    return{
      i: 0,
      registerdetailInfo: {
        talent_pk: this.$store.state.register.talent_pk,
        region: "",
        specific_location: "NEGO",
        day: "",
        time: "",
        extra_fee: "",
        extra_fee_amount: "",
        location_info: "상세장소 협의",
      },
      curriculumnum: 1,
      curriculum:
      // {
        // input_list: [
        [
          {
            talent_pk: this.$store.state.register.talent_pk
          },
        ]
        // ],
      // }
    }
  },
  methods:{
    sync: function(e, index) {
    console.log("e, index", index)
    e.preventDefault(index),
    // thie.tempfile = e.target.files[0]
    this.curriculum[index].image = e.target.files[0]
    console.log("this.image:",this.curriculum[index].image)
    },
    complite(){
      this.submitCurriculum();
    },
    submitCurriculum(){
      if(this.registerdetailInfo.region === "" || this.registerdetailInfo.day === "" || this.registerdetailInfo.time === "" || this.registerdetailInfo.location_info === "" || this.registerdetailInfo.extra_fee === "" ){
        alert("항목을 빠짐 없이 입력해 주세요")
        return
      }




      // for (var i = 0; i < this.curriculumnum ; i++){
      //   const data = new FormData()
      //   console.log(`>>>>>>>>>>>>>>>>>>${i}`);
      //   data.append('talent_pk', this.curriculum[i].talent_pk)
      //   data.append('information', this.curriculum[i].information)
      //   if(this.curriculum[i].image){
      //     data.append('image', this.curriculum[i].image)
      //
      //   }
      //
      //   this.$http.post('talent/add/curriculum/',data,  {
      //   headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      //   })
      //   .then(function(response){
      //     console.log(`submitCurriculum:${i}`,response)
      //   })
      // }
      this.curriculums()
    },

    curriculums(){
      // for (var i = 0; i < this.curriculumnum ; i++){

      const data = new FormData()
      console.log(`>>>>>>>>>>>>>>>>>>${this.i}`);
      data.append('talent_pk', this.curriculum[this.i].talent_pk)
      data.append('information', this.curriculum[this.i].information)
      if(this.curriculum[this.i].image){
        data.append('image', this.curriculum[this.i].image)
      }
      this.$http.post('talent/add/curriculum/',data,  {
        headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(response){
        console.log(`submitCurriculum:${this.i}`,response)

        if(this.i < this.curriculumnum - 1) {
          this.i = this.i + 1
          this.curriculums()
        } else {
          this.i = 0
          this.submitLocation();

        }
      })

    // }

    },

    submitLocation(){

      this.$http.post('talent/add/location/',this.registerdetailInfo,  {
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(response){
        console.log("submitLocation-response:",response)
        this.registerdetailInfo.region= ""
        this.registerdetailInfo.day= ""
        this.registerdetailInfo.time= ""
        this.registerdetailInfo.extra_fee= ""
        this.registerdetailInfo.extra_fee_amount= ""
        this.registerdetailInfo.location_info= ""
        this.curriculum  = [
          {
            talent_pk: this.$store.state.register.talent_pk
          },
        ]

        alert("수업등록이 완료되었습니다. 관리자 승인 후 검색페이지에서 확인 하 실 수 있습니다. ")

        bus.$emit('talentsrefreash')
        this.$router.push({ path: '/enroll/register'})


      })
    },

    addCurriculum(){
      this.curriculumnum = this.curriculumnum + 1;
      // this.curriculum.input_list.push({talent_pk: this.$store.state.register.talent_pk})
      this.curriculum.push({talent_pk: this.$store.state.register.talent_pk})

      console.log("this.curriculum:",this.curriculumnum)
    },
    deleteCurriculum(){
      if(this.curriculumnum > 1){
        this.curriculumnum = this.curriculumnum - 1;
          this.curriculum.pop({talent_pk: this.$store.state.register.talent_pk})
      } else {
        console.log("nonononono")
      }
    },
    inputCurriculum(){
      this.curriculum.push(this.tempcurriculum);
      this.tempcurriculum = ""
    }
  },

}
</script>

<style lang="css">
</style>
