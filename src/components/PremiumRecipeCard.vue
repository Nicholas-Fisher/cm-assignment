<template>
  <div class="premium-recipe-card">
    <div class="image-container">
      <button class="favorite-btn">
        <img :src="heartIcon" />
        <img :src="heartFilledIcon" />
      </button>
      <div class="tag">
        <span v-text="'Premium Recipe'" />
      </div>
    </div>
    <div class="label" v-text="'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice'" />
    <div v-if="numberOfRatings" class="rating-star-row">
      <rating-star :index="1" :rating="rating" />
      <rating-star :index="2" :rating="rating" />
      <rating-star :index="3" :rating="rating" />
      <rating-star :index="4" :rating="rating" />
      <rating-star :index="5" :rating="rating" />
    </div>
    <div v-else v-text="'No ratings yet'" />
    <div class="stats-row">
      <div class="left-side">
        <div class="stats-pair">
          <img class="stats-icon" :src="clockIcon" />
          <div class="stats-value" v-text="prepTimeInMins ? `${prepTimeInMins} min` : '-'" />
        </div>
        <div class="stats-pair">
          <img class="stats-icon" :src="caloriesIcon" />
          <div class="stats-value" v-text="calories ? `${calories} Calories` : '-'" />
        </div>
      </div>
      <div class="right-side">
        <div class="stats-pair">
          <div class="macro-dot carbs" />
          <div class="stats-value" v-text="carbsGrams ? `${carbsGrams} g` : '-'" />
        </div>
        <div class="stats-pair">
          <div class="macro-dot protein" />
          <div class="stats-value" v-text="proteinGrams ? `${proteinGrams} g` : '-'" />
        </div>
        <div class="stats-pair">
          <div class="macro-dot fats" />
          <div class="stats-value" v-text="fatsGrams ? `${fatsGrams} g` : '-'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heartIcon from 'src/assets/icons/heart.svg';
import clockIcon from 'src/assets/icons/clock.svg';
import caloriesIcon from 'src/assets/icons/calories.svg';
import heartFilledIcon from 'src/assets/icons/heart-filled.svg';
import ratingStar from './ratingStar.vue';

export default {
  components: { ratingStar },
  props: {
    // Rating given out of 10.
    rating: {
      type: Number,
      default: 0,
    },
    numberOfRatings: {
      type: Number,
      default: 0,
    },
    prepTimeInMins: {
      type: Number,
      default: 0,
    },
    calories: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      heartIcon,
      heartFilledIcon,
      clockIcon,
      caloriesIcon,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.label {
  -webkit-line-clamp: 2;
}
.macro-dot {
  display: inline-block;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  &.carbs {
    background-color: yellow;
  }
  &.protein {
    background-color: red;
  }
  &.fats {
    background-color: blue;
  }
}
</style>
