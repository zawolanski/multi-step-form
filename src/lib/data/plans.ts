import IconAdvanced from "$lib/assets/icon-advanced.svelte";
import IconArcade from "$lib/assets/icon-arcade.svelte";
import IconPro from "$lib/assets/icon-pro.svelte";

export const plansOptions = [
  {
    id: 'arcade',
    header: 'Arcade',
    price: {
      month: 9,
      year: 90
    },
    yearText: '2 months free',
    icon: IconArcade
  },
  {
    id: 'advanced',
    header: 'Advanced',
    price: {
      month: 12,
      year: 120
    },
    yearText: '2 months free',
    icon: IconAdvanced
  },
  {
    id: 'pro',
    header: 'Pro',
    price: {
      month: 15,
      year: 150
    },
    yearText: '2 months free',
    icon: IconPro
  }
];