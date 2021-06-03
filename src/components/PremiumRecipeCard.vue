<template>
  <div class="premium-recipe-card">
    <div class="image-container" :style="{ backgroundImage: `url(${image})` }">
      <div class="gradient-cover">
        <button class="favorite-btn">
          <img :src="heartFilledIcon" v-if="isFavorited" />
          <img :src="heartIcon" v-else />
        </button>
        <div class="tag">
          <img :src="trophyIcon" />
          <span v-text="'Premium Recipe'" />
        </div>
      </div>
    </div>
    <div class="data-container">
      <div class="title" v-text="title" />
      <div class="rating-star-row">
        <div class="rating" v-if="numberOfRatings">
          <rating-star :index="1" :rating="rating" />
          <rating-star :index="2" :rating="rating" />
          <rating-star :index="3" :rating="rating" />
          <rating-star :index="4" :rating="rating" />
          <rating-star :index="5" :rating="rating" />
        </div>
        <div class="number-of-ratings" v-text="numberOfRatings ? `${numberOfRatings} ratings` : 'No ratings yet'" />
      </div>

      <div class="stats-row">
        <div class="left-side">
          <div class="stats-pair">
            <img class="stats-icon" :src="clockIcon" />
            <div class="stats-value" v-text="prepTimeInMins ? `${prepTimeInMins} min` : '-'" />
          </div>
          <div class="stats-pair">
            <img class="stats-icon" :src="caloriesIcon" />
            <div class="stats-value" v-text="energyUnits ? `${energyUnits} Calories` : '-'" />
          </div>
        </div>
        <div class="right-side">
          <div class="stats-pair small">
            <div class="macro-dot carbs" />
            <div class="stats-value" v-text="carbsInGrams ? `${carbsInGrams} g` : '-'" />
          </div>
          <div class="stats-pair small">
            <div class="macro-dot protein" />
            <div class="stats-value" v-text="proteinInGrams ? `${proteinInGrams} g` : '-'" />
          </div>
          <div class="stats-pair small">
            <div class="macro-dot fats" />
            <div class="stats-value" v-text="fatInGrams ? `${fatInGrams} g` : '-'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heartIcon from 'src/assets/icons/heart.svg';
import heartFilledIcon from 'src/assets/icons/heart-filled.svg';
import clockIcon from 'src/assets/icons/clock.svg';
import caloriesIcon from 'src/assets/icons/calories.svg';
import trophyIcon from 'src/assets/icons/trophy.svg';
import ratingStar from './ratingStar.vue';

export default {
  components: { ratingStar },
  props: {
    // Rating given out of 5.
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
    energyUnits: {
      type: Number,
      default: 0,
    },
    energyType: {
      type: String,
      default: 'cal', // Can be 'cal' or 'kj'.
    },
    isFavorited: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '-',
    },
    image: {
      type: Object,
      default: null,
    },
    carbsInGrams: {
      type: Number,
      default: 0,
    },
    proteinInGrams: {
      type: Number,
      default: 0,
    },
    fatInGrams: {
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
      trophyIcon,
    };
  },
  computed: {
    formattedEnergyUnits() {
      return this.energyType === 'cal' ? this.energyUnits : (this.energyUnits / 4.184).toFixed(2);
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.premium-recipe-card {
  width: 343px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
}
.image-container {
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .gradient-cover {
    padding: 16px 8px 12px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(22, 27, 35, 0.2) 70.94%, rgba(26, 29, 34, 0.79) 106.25%);
  }
}
.favorite-btn {
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin-right: 8px;
}
.tag {
  align-self: flex-start;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(#fff, 0.3);
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
  }
}
.data-container {
  padding: 16px;
}
.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  text-align: left;
}
.rating-star-row {
  display: flex;
  align-items: center;
  height: 12px;
  .rating {
    display: flex;
    margin-right: 8px;
  }
  .number-of-ratings {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #1ca677;
  }
}

.stats-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  .left-side {
    display: flex;
  }
  .right-side {
    display: flex;
  }
  .stats-pair {
    display: flex;
    align-items: center;
    color: #393c40;
    &:not(:first-child) {
      margin-left: 16px;
    }
    &.small {
      margin-left: 8px;
    }
    .stats-icon {
      height: 15px;
      width: 15px;
      margin-right: 8px;
    }
    .stats-value {
      font-size: 12px;
      line-height: 14px;
    }
  }
}

.macro-dot {
  display: inline-block;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin-right: 4px;
  &.carbs {
    background-color: #f94642;
  }
  &.protein {
    background-color: #3177bb;
  }
  &.fats {
    background-color: #fda120;
  }
}
</style>
