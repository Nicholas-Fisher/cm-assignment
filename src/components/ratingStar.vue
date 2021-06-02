<template>
  <div class="rating-star">
    <img :src="halfStarIcon" v-if="isHalf" />
    <img class="is-empty" :src="fullStarIcon" v-if="isEmpty" />
    <img class="is-full" :src="fullStarIcon" v-if="isFull" />
  </div>
</template>

<script>
import halfStarIcon from 'src/assets/icons/half-star.svg';
import fullStarIcon from 'src/assets/icons/full-star.svg';

export default {
  props: {
    // Position in star rating row.
    index: {
      type: Number,
      required: true,
    },
    // Rating given out of 10.
    rating: {
      type: Number,
      default: 0, // Out of 10.
    },
  },
  data() {
    return {
      halfStarIcon,
      fullStarIcon,
      isEmpty: this.rating < this.index,
      isHalf: this.rating > this.index && this.rating < this.index + 1,
      isFull: this.rating >= this.index,
    };
  },
};
</script>

<style scoped></style>
