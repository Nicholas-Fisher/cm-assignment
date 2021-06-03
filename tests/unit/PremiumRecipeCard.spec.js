import { shallowMount } from '@vue/test-utils';
import PremiumRecipeCard from 'src/components/PremiumRecipeCard.vue';

describe('PremiumRecipeCard.vue', () => {
  const wrapper = shallowMount(PremiumRecipeCard);

  test('Calories display correctly', async () => {
    // see if the message renders
    await wrapper.setProps({ energyUnits: 100 });
    await wrapper.setProps({ energyType: 'cal' });
    expect(wrapper.find('#energy-value').text()).toEqual('100 Calories');
    await wrapper.setProps({ energyType: 'kj' });
    expect(wrapper.find('#energy-value').text()).toEqual('418 Kilojoules');
    await wrapper.setProps({ energyUnits: 1000 });
    await wrapper.setProps({ energyType: 'cal' });
    expect(wrapper.find('#energy-value').text()).toEqual('1000 Calories');
    await wrapper.setProps({ energyType: 'kj' });
    expect(wrapper.find('#energy-value').text()).toEqual('4184 Kilojoules');
  });

  test('Ratings display correctly when there are ratings', async () => {
    // see if the message renders
    await wrapper.setProps({ numberOfRatings: 10 });
    expect(wrapper.find('.number-of-ratings').text()).toEqual('10 ratings');
  });

  test('No ratings message displays when there are no ratings', async () => {
    // see if the message renders
    await wrapper.setProps({ numberOfRatings: 0 });
    expect(wrapper.find('.number-of-ratings').text()).toEqual('No ratings yet');
  });

  test('Correct heat icon displays based on isFavorited status', async () => {
    // see if the message renders
    await wrapper.setProps({ isFavorited: true });
    expect(wrapper.find('#heart-filled').exists()).toBe(true);
    expect(wrapper.find('#heart-empty').exists()).toBe(false);
    await wrapper.setProps({ isFavorited: false });
    expect(wrapper.find('#heart-filled').exists()).toBe(false);
    expect(wrapper.find('#heart-empty').exists()).toBe(true);
  });
});
