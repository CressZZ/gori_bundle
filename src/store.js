// import Vuex from 'vuex'


export const stores = {
  state: {
    login: {
      is_login: false,
      // Token: "39248c0f2405edb4202fc393e5d7df367601f9cb",
      Token: "",
      wishlist: {},
      loginInfo: {},
      registration: {},
    },
    page:{
      question: {
        page: 1,
        requestCountPerPage: 4
      },
      review: {
        page: 1,
        requestCountPerPage: 4
      }
    },
    register:{
      talent_pk: 56,
    },
    join: {
      joinInfo: {
        username: "",
        password1: "",
        password2: "",
        name: ""
      },
    },
    rating:{
      add:{
        talent_pk: "",
        curriculum: "",
        readiness	: "",
        timeliness: "",
        delivery: "",
        friendliness: "",
        comment: ""
      },
    },
  },
  mutations: {

      Token (state, Token) {
        state.login.Token = Token;
      },
      islogout(state){
        state.login.Token = ""
        state.login.is_login = false;
        state.login.loginInfo = ""
        state.login.wishlist = ""
      },
      islogin(state){
        state.login.is_login = true;
      },
      loginInfo (state, loginInfo){
        state.login.loginInfo = loginInfo
      },
      wishlist(state, value){
        state.login.wishlist = value
      },
      registration(state, value){
        state.login.registration = value
      },

      joinInfo (state, joinInfo){
        console.log(joinInfo)
        state.join.joinInfo = joinInfo
      },

      logout(state){
        state.login.is_login = false;
        state.login.Token = "";
      },
      setRatingcurriculum(state,  value){
        state.rating.add.curriculum = value
      },
      setRatingreadiness(state,  value){
        state.rating.add.readiness = value
      },
      setRatingtimeliness(state,  value){
        state.rating.add.timeliness = value
      },
      setRatingdelivery(state,  value){
        state.rating.add.delivery = value
      },
      setRatingfriendliness(state,  value){
        state.rating.add.friendliness = value
      },
      setreview(state,  value){
        state.rating.add.comment = value
      },
      settalent_pk(state,  value){
        state.rating.add.talent_pk = value
      },
      resetreview(state){
        state.rating.add.curriculum = ""
        state.rating.add.readiness = "";
        state.rating.add.timeliness = ""
        state.rating.add.delivery = ""
        state.rating.add.friendliness = ""
        state.rating.add.comment = ""
        state.rating.add.talent_pk = ""
      },

      talentRegister(state, value){
        state.register.talent_pk = value
      },
      // userinfo(state, value){
      //   state.login.loginInfo = value
      // }
      pageChange(state, value){
        state.page.question.page = value
      },
      pageChangeReview(state, value){
        state.page.review.page = value
      },




  },
  actions: {
  //  submitLogin: function ({ commit }, { loginInfo }) {
  //    console.log("this.loginInfo:",loginInfo)
  //    this.$http.post('member/login/', loginInfo)
  //    .then(function(response){
  //      return response.json()
  //    })
  //    .then((data) => {
  //      commit('setkey', { key: data.key })
  //    })
  //    .catch( error => {
  //      alert(error.bodyText)
  //    });
  //  }
 },
};
