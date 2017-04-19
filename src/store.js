// import Vuex from 'vuex'


export const stores = {
  state: {
    login: {
      is_login: false,
      // Token: "39248c0f2405edb4202fc393e5d7df367601f9cb",
      Token: "",
      wishlist:{

      },
      loginInfo: {

      },
    },
    register:{
      talent_pk: null,
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
        state.login.is_login = true;
        state.login.Token = Token;
      },
      loginInfo (state, loginInfo){
        state.login.loginInfo = loginInfo
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
      wishlist(state, value){
        state.login.wishlist = value
      },
      talentRegister(state, value){
        state.register.talent_pk = value
      },
      userinfo(state, value){
        state.login.loginInfo = value
      }




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
