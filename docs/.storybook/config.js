// import {configure, addDecorator} from '@storybook/react';
// import {configureViewport} from '@storybook/addon-viewport';
// import {withOptions} from '@storybook/addon-options';
// import {withKnobs} from '@storybook/addon-knobs';

// function loadStories() {
//   const req = require.context('../stories', true, /\.story\.(jsx|tsx|ts|js)?$/);
//   req.keys().forEach(story => req(story));
// }

// addDecorator(
//   withOptions({
//     addonPanelInRight: true,
//   }),
//   withKnobs({
//     escapeHTML: false,
//   }),
// );

// configure(loadStories, module);
// configureViewport({
//   defaultViewport: 'iphone6p',
// });
import {create} from '@storybook/theming';

// import centered from './decorator-centered';
import {addParameters, configure, addDecorator} from '@storybook/react';

// Option defaults:
addParameters({
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0];
      const sectionB = b[1].id.split('-')[0];

      return sectionB.localeCompare(sectionA);
    },
    theme: create({
      base: 'dark',
      brandTitle: 'React Native Material UI',
      brandUrl: 'https://meftunca.github.io/react-native-mui',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    panelPosition: 'bottom',
  },
});

// addDecorator(centered);

const context = require.context(
  '../stories',
  true,
  /\.stories\.(ts|tsx|jsx|js|mdx)$/,
);

configure(context, module);
