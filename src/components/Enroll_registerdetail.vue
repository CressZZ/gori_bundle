<template >


<div class="enroll__detail">
  <section class="enroll-lec__time-cost">
    <h2 class="enroll-lec__time-cost__heading">커리큘럼</h2>
    <fieldset class="">

  <div class="enroll-lec__curriculum">
    <h3 class="">커리큘럼</h3>
    <ul class="enroll-lec__curriculum-list">
      <li v-for = "(item, index) in curriculumnum">
        <p class="enroll-lec__curriculum1">{{item}}회차</p>
        <textarea  v-model = "curriculum[index].information" @onchange = "inputCurriculum" placeholder="내용을 입력해주세요" class=""></textarea>
      </li>


      <div class="curriculum__button-wrapper">
        <button @click = "addCurriculum" type= "button"> + </button>
        <button @click = "deleteCurriculum" type= "button"> - </button>

      </div>
    </ul>

  </div>
</fieldset>
</section>


  <section class="enroll-lec__time-cost">
    <h2 class="enroll-lec__time-cost__heading">시간 및 비용 설정</h2>
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
          <input type="text" v-model = "registerdetailInfo.time" placeholder="수업가능한 시간을 적어주세요 예:9:00~11:00/13:00~14:00" class="">
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
          placeholder="신청자 분들이 수업 장소와 시간에 대해 알면 좋은 사항들이 있나요?"
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
export default {
  data(){
    return{
      registerdetailInfo: {
        talent_pk: this.$store.state.register.talent_pk,
        region: "",
        specific_location: "NEGO",
        day: "",
        time: "",
        extra_fee: "",
        extra_fee_amount: "",
        location_info: "",
      },
      curriculumnum: 2,
      curriculum:[
        {
          talent_pk: this.$store.state.register.talent_pk

        },
        {
          talent_pk: this.$store.state.register.talent_pk

        },
      ],
    }
  },
  methods:{
    complite(){
      this.submitCurriculum();


    },
    submitCurriculum(){
      for (var i = 0; i < this.curriculumnum ; i++){
        this.$http.post('talent/add/curriculum/',this.curriculum[i],  {
        headers: {Authorization: `Token ${this.$store.state.login.Token}`}
        })
        .then(function(response){
          console.log("submitCurriculum:",response)
          this.submitLocation();
        })
      }
    },
    submitLocation(){
      this.$http.post('talent/add/location/',this.registerdetailInfo,  {
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(response){
        console.log("submitLocation:",response)
        this.registerdetailInfo.region= ""
        this.registerdetailInfo.day= ""
        this.registerdetailInfo.time= ""
        this.registerdetailInfo.extra_fee= ""
        this.registerdetailInfo.extra_fee_amount= ""
        this.registerdetailInfo.location_info= ""
      })
    },

    addCurriculum(){
      this.curriculumnum = this.curriculumnum + 1;
      this.curriculum.push({talent_pk: this.$store.state.register.talent_pk})
      console.log("this.curriculum:",this.curriculumnum)
    },
    deleteCurriculum(){
      if(this.curriculumnum > 2){
        this.curriculumnum = this.curriculumnum - 1;
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
