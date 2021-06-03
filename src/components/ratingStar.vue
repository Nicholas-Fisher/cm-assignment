<template>
  <div class="rating-star">
    <img :src="halfStarIcon" v-if="isHalf" />
    <img :src="emptyStarIcon" v-else-if="isEmpty" />
    <img :src="fullStarIcon" v-else-if="isFull" />
  </div>
</template>

<script>
import emptyStarIcon from 'src/assets/icons/empty-star.svg';
import halfStarIcon from 'src/assets/icons/half-star.svg';
import fullStarIcon from 'src/assets/icons/full-star.svg';

export default {
  props: {
    // Position in star rating row.
    index: {
      type: Number,
      required: true,
    },
    // Rating given out of 5.
    rating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      emptyStarIcon,
      halfStarIcon,
      fullStarIcon,
      isEmpty: this.rating < this.index,
      isHalf: this.rating === this.index - 0.5,
      isFull: this.rating >= this.index,
    };
  },
};
</script>

<style lang="scss" scoped>
.rating-star {
  padding: 2px;
}
img {
  height: 12px;
  width: 12px;
}
</style>
