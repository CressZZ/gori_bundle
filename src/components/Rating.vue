<template>
  <div id="rating">
    <div class="star-rating">

        <label class="star-rating__star" v-for="rating in ratings"
        :class="{'is-selected': (value >= rating)}"
        @click="set(rating)" @mouseover="star_over(rating)" @mouseout="star_out">
        <input class="star-rating star-rating__checkbox" type="radio" :value="rating" v-model="value" >★</label>
<!-- :class="{'test': is_test}" -->
      </div>
  </div>
</template>



<script>
import {bus} from '../bus'

export default {

  data: function() {
          return {
            temp_value: null,
            ratings: [1, 2, 3, 4, 5],
            value: "",
          }
        },
created(){
  console.log("rating-title:", this.title)
},
      props: ["title"],
       methods: {
        star_over: function(index) {
              this.temp_value = this.value;
              this.value = index;
          },
        star_out: function() {
              this.value = this.temp_value;
        },
        set: function(value) {
          this.temp_value = value;
          this.value = value;

          switch(this.title){
            case "curriculum" :
            this.$store.commit('setRatingcurriculum',  this.value)
            return;
            case "readiness" :
            this.$store.commit('setRatingreadiness',  this.value)
            return;
            case "timeliness" :
            this.$store.commit('setRatingtimeliness',  this.value)
            return;
            case "delivery" :
            this.$store.commit('setRatingdelivery',  this.value)
            return;
            case "friendliness" :
            this.$store.commit('setRatingfriendliness',  this.value)
            return

          }

        },
        rate: function(ratings){
          this.$http.post('talent/add/review/', this.ratings,{
          headers: {Authorization: `Token ${this.$store.state.login.Token}`}
          })
          .then(function (response) {
                    console.log('submitted');
                });
        }
  }
}










</script>

<style lang="sass">


</style>
