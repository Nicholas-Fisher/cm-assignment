import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import PremiumRecipeCard from '../src/components/PremiumRecipeCard.vue';
import cardImage from 'src/assets/images/thai-chicken.png';

export default {
  title: 'PremiumRecipeCard',
  component: PremiumRecipeCard,
  decorators: [withKnobs],
};

const energyTypeOptions = {
  Kilojoules: 'kj',
  Calories: 'cal',
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    // Rating given out of 5.
    rating: {
      type: Number,
      default: number('rating', 0),
    },
    numberOfRatings: {
      type: Number,
      default: number('numberOfRatings', 0),
    },
    prepTimeInMins: {
      type: Number,
      default: number('prepTimeInMins', 0),
    },
    energyUnits: {
      type: Number,
      default: number('energyUnits', 0),
    },
    energyType: {
      type: String,
      default: select('energyType', energyTypeOptions, 'cal'), // Can be 'cal' or 'kj'.
    },
    isFavorited: {
      type: Boolean,
      default: boolean('isFavorited', false),
    },
    title: {
      type: String,
      default: text('title', 'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice'),
    },
    image: {
      type: String,
      default: text('image', cardImage),
    },
    carbsInGrams: {
      type: Number,
      default: number('carbsInGrams', 0),
    },
    proteinInGrams: {
      type: Number,
      default: number('proteinInGrams', 0),
    },
    fatInGrams: {
      type: Number,
      default: number('fatInGrams', 0),
    },
  },
  template: `<PremiumRecipeCard
  @click="action"
  :title="title"
  :energyType="energyType"
  :rating="rating"
  :numberOfRatings="numberOfRatings"
  :prepTimeInMins="prepTimeInMins"
  :energyUnits="energyUnits"
  :carbsInGrams="carbsInGrams"
  :proteinInGrams="proteinInGrams"
  :fatInGrams="fatInGrams"
  :image="image"
  :isFavorited="isFavorited"
  />`,
  methods: {
    action: action('clicked'),
  },
});
