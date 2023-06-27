import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/areodin/',
  srcDir: 'src',

	title: "Areodin",
	description: "The Areodin Lore Repository",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Information', link: '/general/glossary' },
		],

		sidebar: [
      {
        text: 'General Information',
        collapsed: false,
        items: [
          { text: 'Glossary',        link: '/general/glossary' },
          { text: 'Androids',        link: '/general/androids' },
          { text: 'The Builders',    link: '/general/builders' },
          { text: 'Gryphon Knights', link: '/general/gryphon_knights' },
          { text: 'Island Crystals', link: '/general/island_crystals' },
          { text: 'Languages',       link: '/general/languages' },
          { text: 'The Mist',        link: '/general/the_mist' },
          { text: 'The Strix',       link: '/general/strix' },
        ]
      },
      {
        text: 'History',
        collapsed: false,
        items: [
          { text: 'The Evacuation', link: '/history/evacuation' },
        ]
      },
			{
        text: 'People',
        collapsed: false,
        items: [
          { text: "Captain Victoria Mosane",                 link: '/people/victoria' },
          { text: "Captain's Steward Theo Simdas",           link: '/people/theo' },
          { text: "First Mate Ironhearth Ragnar",            link: '/people/ragnar' },
          { text: "First Mate's Steward Ironhearth Brocard", link: '/people/brocard' },
          { text: "Second Mate Sarah Goldlily",              link: '/people/sarah' },
          { text: "Gunnery Officer Ustraki",                 link: '/people/ustraki' },
          { text: "Lily",                                    link: '/people/lily' },
          { text: "Pumpkin",                                 link: '/people/pumpkin' },
          { text: "Hurricane",                               link: '/people/hurricane' },
          { text: "Eletha Keldi, Ph.D.",                     link: '/people/eletha' },
          { text: "Atax",                                    link: '/people/atax' },
        ]
      },
			{
        text: 'Places',
        collapsed: false,
        items: [
          { text: 'Skyhaven',          link: '/places/skyhaven' },
          { text: 'The Mineral Holds', link: '/places/mineral_holds' },
          { text: 'The Quintuplets',   link: '/places/quintuplets' },
          { text: 'Chita Observatory', link: '/places/observatory' },
          { text: 'Grefor',            link: '/places/grefor' },
          { text: 'Sky-Roost',         link: '/places/sky_roost' },
          { text: 'Gryphonstone',      link: '/places/gryphonstone' },
          { text: 'Lufveria',          link: '/places/lufveria' },
          { text: 'The Crystal Grove', link: '/places/crystal_grove' },
          { text: 'Luin',              link: '/places/luin' },
          { text: 'Aerodin Academy',   link: '/places/academy' },
          { text: 'Trit-Shi',          link: '/places/trit_shi' },
          { text: 'Minor Towns',       link: '/places/minor_towns' },
        ]
      },
      {
        text: 'Meta',
        collapsed: false,
        link: '/meta/',
        items: [
          { text: 'Ancestries', link: '/meta/ancestries' },
        ]
      },
		],
    search: {
      provider: 'local',
    },
	}
})
