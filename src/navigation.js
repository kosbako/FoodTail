import {Navigation} from 'react-native-navigation';

//ffc7c7
//ffe2e2
//f6f6f6
//8785a2

export const goToAuth = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Auth',
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
        },
        children: [
          {
            component: {
              id: 'Login',
              name: 'LoginScreen',
            },
          },
        ],
      },
    },
  });
};

export const goHome = async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            backgroundColor: '#f6f6f6',
            currentTabId: 'HomeTab',
            titleDisplayMode: 'alwaysHide',
            visible: true,
            animate: false,
          },
        },
        id: 'MainApp',
        children: [
          {
            stack: {
              id: 'homeStack',
              children: [
                {
                  component: {
                    id: 'Home',
                    name: 'HomeScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  iconColor: '#d9d9d9',
                  selectedIconColor: '#8785a2',
                  fontFamily: 'IndieFlower',
                  fontSize: 12,
                  icon: require('./assets/images/home-32.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'favoritesStack',
              children: [
                {
                  component: {
                    id: 'Favorites',
                    name: 'HomeScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  iconColor: '#d9d9d9',
                  selectedIconColor: '#8785a2',
                  fontFamily: 'IndieFlower',
                  fontSize: 12,
                  icon: require('./assets/images/heart-32.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'searchStack',
              children: [
                {
                  component: {
                    id: 'Search',
                    name: 'HomeScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  iconColor: '#d9d9d9',
                  selectedIconColor: '#8785a2',
                  fontFamily: 'IndieFlower',
                  fontSize: 12,
                  icon: require('./assets/images/search-32.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'moreStack',
              children: [
                {
                  component: {
                    id: 'More',
                    name: 'HomeScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  iconColor: '#d9d9d9',
                  selectedIconColor: '#8785a2',
                  fontFamily: 'IndieFlower',
                  fontSize: 12,
                  icon: require('./assets/images/more-32.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
};
