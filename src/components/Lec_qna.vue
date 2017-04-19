<template lang="html">
  <!-- QnA -->
  <section class="qna" id="qna">
    <h2 class="qna__heading" >문의하기 {{detailQuestion.count}}건</h2>
    <div class="row">
      <div class="qna__write col-4-4 col-7-12">
        <textarea name="" placeholder="input text" wrap="on"  v-model = "tempQuestion"></textarea>
        <button type="button" class="" @click = "addQuestion">등록</button>
      </div>

    </div>

    <ul class="qna__list">

      <!-- <li v-for = "question in questions">
        <p>{{question}}</p>
      </li> -->



      <!-- <li class="qna__list__q" v-for = "question in detailQuestion.results" > -->
      <li class="qna__list__q" v-for = "question in questionpage" >

        <div class="row">
          <div class="qna__list__q__writer col-4-4 col-7-12">
            <span><div>q</div>{{question.user}}</span>
            <span class="qna__list__q__date">{{question.created_date.substring(0,10)}} &nbsp;  &nbsp;  {{question.created_date.substring(11,16)}}</span>
          </div>
        </div>
        <div class="row">
          <p class="qna__list__q__descrip col-4-4 col-7-12">{{question.content}}</p>
        </div>
        <div class="qna__list__a" v-for ="reply in question.replies">
          <div class="row">
            <div class="qna__list__a__writer col-4-4 col-7-12" >
              <span><div>A</div>{{reply.tutor}}</span>
              <span class="qna__list__a__date">{{reply.created_date.substring(0,10)}}</span>
            </div>
          </div>
          <div class="row">
            <p class="qna__list__a__descrip col-4-4 col-7-12">{{reply.content}}</p>
          </div>
        </div>
      </li>




    </ul>
    <div class="row">
      <div class="qna__page col-4-4 col-7-12">
        <a v-for = "n in pagenum" href="#" class="qna__page__btn on_page" @click.prevent = "changePage(n)">{{n}}</a>
        <!-- <a href="#" class="qna__page__btn">2</a>
        <a href="#" class="qna__page__btn">3</a> -->
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return {
      add:{
        talent_pk: this.$route.params.lecid,
        content: "새로운 질문 입니다."
      },
      tempQuestion: null,
      count_per_page: 4,
      page_to: 1,
      // pagenum: Math.ceil(this.detailQuestion.count / this.count_per_page),


    }
  },
  props: ["detailQuestion"],
  methods: {
    addQuestion(){
      if(!this.tempQuestion || this.tempQuestion === " "){
        return alert("내용을 입력하셔야죠!!!!!!")
      }
      this.add.content = this.tempQuestion;
      this.tempQuestion = null;
      this.$http.post('talent/add/question/', this.add,{
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        this.$emit('reflesh')
      })
      .catch( error => {
      });
    },
    changePage(n){
       this.page_to = n
    },
    pagenumadd(){
      this.pagenum = Math.ceil(this.detailQuestion.count / this.count_per_page)
    }
  },
  watch:{
    detailQuestion(){
      this.pagenumadd()
    }
  },
  computed:{
    questionpage(){
      const from = ((this.page_to * this.count_per_page) - this.count_per_page)
      const to = this.page_to * this.count_per_page
      return this.detailQuestion.results.reverse().slice(from, to)
    },
  },

  created(){
      // this.questionpage;
      this.pagenumadd()
  },
}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_qna"
  </style>
