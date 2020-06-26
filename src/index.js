import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

import './styles/icons/technology-icons.css';
import './styles/icons/style.css';
import './styles/index.scss';
import './styles/fonts/LatoLatin/stylesheet.css';

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept();
//   module.hot.accept('./containers/Root', () => {
//     const RootContainer = require('./containers/Root').default;
//     render(
//       <AppContainer>
//         <RootContainer/>
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }
