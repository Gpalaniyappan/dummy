import {Provider, NavigationMenu} from '@shopify/app-bridge-react';

function MyApp {
  return (
    <Provider config={config}>
      <NavigationMenu
        navigationLinks={[
          {
            label: 'Home',
            destination: '/',
          },
          {
            label: 'About',
            destination: '/about',
          },
        ]}
        matcher={(link, location) => link.destination === location.pathname}
      />
    </Provider>
  );
}


export default MyApp