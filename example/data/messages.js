module.exports = [
  {
    _id: 6,
    text: 'In 10 minutes',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 30, 0)),
    user: {
      _id: 1,
      name: 'React Native developer',
    },
  },  {
    _id: 5,
    text: 'Place Gambetta',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 30, 0)),
    user: {
      _id: 1,
      name: 'React Native developer',
    },
  },
  {
    _id: 4,
    location: {
      latitude: 48.864601,
      longitude: 2.398704
    },
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'React Native developer',
    },
  },
  {
    _id: 3,
    text: 'Where can we meet?',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 10, 0)),
    user: {
      _id: 2,
      name: 'Someone',
      avatar: 'https://facebook.github.io/react/img/logo_og.png',
    },
  },
];
