export const questions = [
  {
    question: 'Выбери цвет',
    type: 'withImage',
    options: [
      {
        image: '/color/black.webp',
        id: 0,
        points: {
          useState: 10,
          useReducer: 5,
          useCallback: 8,
          useImperativeHandle: 6,
          useEffect: 10,
          useRef: 7,
          useLayoutEffect: 3
        }
      },
      {
        image: '/color/blue.webp',
        id: 1,
        points: {
          useState: 4,
          useReducer: 4,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 10,
          useRef: 4,
          useLayoutEffect: 3
        }
      },
      {
        image: '/color/gray.webp',
        id: 2,
        points: {
          useState: 10,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 4,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 4
        }
      },
      {
        image: '/color/green.webp',
        id: 3,
        points: {
          useState: 3,
          useReducer: 1,
          useCallback: 8,
          useImperativeHandle: 7,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 1
        }
      },
      {
        image: '/color/orange.webp',
        id: 4,
        points: {
          useState: 1,
          useReducer: 8,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 2,
          useRef: 1,
          useLayoutEffect: 7
        }
      },
      {
        image: '/color/pink.webp',
        id: 5,
        points: {
          useState: 3,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 9,
          useEffect: 6,
          useRef: 1,
          useLayoutEffect: 10
        }
      },

      {
        image: '/color/purple.webp',
        id: 6,
        points: {
          useState: 1,
          useReducer: 6,
          useCallback: 5,
          useImperativeHandle: 2,
          useEffect: 5,
          useRef: 5,
          useLayoutEffect: 1
        }
      },
      {
        image: '/color/red.webp',
        id: 7,
        points: {
          useState: 8,
          useReducer: 5,
          useCallback: 1,
          useImperativeHandle: 3,
          useEffect: 9,
          useRef: 8,
          useLayoutEffect: 7
        }
      },
      {
        image: '/color/yellow.webp',
        id: 8,
        points: {
          useState: 3,
          useReducer: 9,
          useCallback: 5,
          useImperativeHandle: 3,
          useEffect: 1,
          useRef: 1,
          useLayoutEffect: 4
        }
      }
    ]
  },
  {
    question: 'Выбери фильм',
    type: 'withImage',
    options: [
      {
        image: '/movie/brother.png',
        text: '"Брат"',
        id: 0,
        points: {
          useState: 10,
          useReducer: 5,
          useCallback: 8,
          useImperativeHandle: 6,
          useEffect: 10,
          useRef: 7,
          useLayoutEffect: 3
        }
      },
      {
        image: '/movie/zhmurki.png',
        text: '"Жмурки"',
        id: 1,
        points: {
          useState: 4,
          useReducer: 4,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 10,
          useRef: 4,
          useLayoutEffect: 3
        }
      },
      {
        image: '/movie/indiana.png',
        text: '"Индиана Джонс и последний крестовый поход"',
        id: 2,
        points: {
          useState: 10,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 4,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 4
        }
      },
      {
        image: '/movie/godfather.png',
        text: '"Крестный отец"',
        id: 3,
        points: {
          useState: 3,
          useReducer: 1,
          useCallback: 8,
          useImperativeHandle: 7,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 1
        }
      },
      {
        image: '/movie/beauty.png',
        text: '"Красотка"',
        id: 4,
        points: {
          useState: 1,
          useReducer: 8,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 2,
          useRef: 1,
          useLayoutEffect: 7
        }
      },
      {
        image: '/movie/avengers.png',
        text: '"Мстители: финал"',
        id: 5,
        points: {
          useState: 3,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 9,
          useEffect: 6,
          useRef: 1,
          useLayoutEffect: 10
        }
      },

      {
        image: '/movie/revenant.png',
        text: '"Выживший"',
        id: 6,
        points: {
          useState: 1,
          useReducer: 6,
          useCallback: 5,
          useImperativeHandle: 2,
          useEffect: 5,
          useRef: 5,
          useLayoutEffect: 1
        }
      },
      {
        image: '/movie/nocountry.png',
        text: '"Старикам здесь не место"',
        id: 7,
        points: {
          useState: 8,
          useReducer: 5,
          useCallback: 1,
          useImperativeHandle: 3,
          useEffect: 9,
          useRef: 8,
          useLayoutEffect: 7
        }
      },
      {
        image: '/movie/animals.png',
        text: '"Тайная жизнь домашних животных 2"',
        id: 8,
        points: {
          useState: 3,
          useReducer: 9,
          useCallback: 5,
          useImperativeHandle: 3,
          useEffect: 1,
          useRef: 1,
          useLayoutEffect: 4
        }
      }
    ]
  },
  {
    question: 'Выбери песню',
    type: 'withImage',
    options: [
      {
        image: '/song/despacito.png',
        text: 'Luis Fonsi: "Despacito"',
        id: 0,
        points: {
          useState: 10,
          useReducer: 5,
          useCallback: 8,
          useImperativeHandle: 6,
          useEffect: 10,
          useRef: 7,
          useLayoutEffect: 3
        }
      },
      {
        image: '/song/adele.png',
        text: 'Adele: "Rolling in the deep"',
        id: 1,
        points: {
          useState: 4,
          useReducer: 4,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 10,
          useRef: 4,
          useLayoutEffect: 3
        }
      },
      {
        image: '/song/beegees.png',
        text: 'Bee Gees: "How deep is your love"',
        id: 2,
        points: {
          useState: 10,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 4,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 4
        }
      },
      {
        image: '/song/hellsbells.png',
        text: 'AC/DC: "Hells bells"',
        id: 3,
        points: {
          useState: 3,
          useReducer: 1,
          useCallback: 8,
          useImperativeHandle: 7,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 1
        }
      },
      {
        image: '/song/survivor.png',
        text: 'Survivor: "Eye of the tiger"',
        id: 4,
        points: {
          useState: 1,
          useReducer: 8,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 2,
          useRef: 1,
          useLayoutEffect: 7
        }
      },
      {
        image: '/song/gaye.png',
        text: 'Marvin Gaye: "Lets get it on"',
        id: 5,
        points: {
          useState: 3,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 9,
          useEffect: 6,
          useRef: 1,
          useLayoutEffect: 10
        }
      },

      {
        image: '/song/pharell.png',
        text: 'Pharell Williams: "Happy"',
        id: 6,
        points: {
          useState: 1,
          useReducer: 6,
          useCallback: 5,
          useImperativeHandle: 2,
          useEffect: 5,
          useRef: 5,
          useLayoutEffect: 1
        }
      },
      {
        image: '/song/shortpairs.png',
        text: 'Shortparis: "Страшно"',
        id: 7,
        points: {
          useState: 8,
          useReducer: 5,
          useCallback: 1,
          useImperativeHandle: 3,
          useEffect: 9,
          useRef: 8,
          useLayoutEffect: 7
        }
      },
      {
        image: '/song/arctic.png',
        text: 'Arctic Monkeys: "Four out of five"',
        id: 8,
        points: {
          useState: 3,
          useReducer: 9,
          useCallback: 5,
          useImperativeHandle: 3,
          useEffect: 1,
          useRef: 1,
          useLayoutEffect: 4
        }
      }
    ]
  },
  {
    question: 'Где ты в пятницу вечером?',
    type: 'text',
    options: [
      {
        text: 'На свиданке',
        id: 0,
        points: {
          useState: 10,
          useReducer: 5,
          useCallback: 8,
          useImperativeHandle: 6,
          useEffect: 10,
          useRef: 7,
          useLayoutEffect: 3
        }
      },
      {
        text: 'Думаю о бывшей',
        id: 1,
        points: {
          useState: 4,
          useReducer: 4,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 10,
          useRef: 4,
          useLayoutEffect: 3
        }
      },
      {
        text: 'Провожу время с семьей',
        id: 2,
        points: {
          useState: 10,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 4,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 4
        }
      },
      {
        text: 'Бухаю с друзьями',
        id: 3,
        points: {
          useState: 3,
          useReducer: 1,
          useCallback: 8,
          useImperativeHandle: 7,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 1
        }
      },
      {
        text: 'Сплю',
        id: 4,
        points: {
          useState: 1,
          useReducer: 8,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 2,
          useRef: 1,
          useLayoutEffect: 7
        }
      },
      {
        text: 'Тусуюсь в клубе',
        id: 5,
        points: {
          useState: 3,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 9,
          useEffect: 6,
          useRef: 1,
          useLayoutEffect: 10
        }
      },

      {
        text: 'Смотрю кино дома',
        id: 6,
        points: {
          useState: 1,
          useReducer: 6,
          useCallback: 5,
          useImperativeHandle: 2,
          useEffect: 5,
          useRef: 5,
          useLayoutEffect: 1
        }
      },
      {
        text: 'Играю в настолки',
        id: 7,
        points: {
          useState: 8,
          useReducer: 5,
          useCallback: 1,
          useImperativeHandle: 3,
          useEffect: 9,
          useRef: 8,
          useLayoutEffect: 7
        }
      }
    ]
  },
  {
    question: 'Выбери суперспособность',
    type: 'text',
    options: [
      {
        text: 'Невидимость',
        id: 0,
        points: {
          useState: 10,
          useReducer: 5,
          useCallback: 8,
          useImperativeHandle: 6,
          useEffect: 10,
          useRef: 7,
          useLayoutEffect: 3
        }
      },
      {
        text: 'Путешествие во времени',
        id: 1,
        points: {
          useState: 4,
          useReducer: 4,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 10,
          useRef: 4,
          useLayoutEffect: 3
        }
      },
      {
        text: 'Писать популярные твиты',
        id: 2,
        points: {
          useState: 10,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 4,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 4
        }
      },
      {
        text: 'Суперсила',
        id: 3,
        points: {
          useState: 3,
          useReducer: 1,
          useCallback: 8,
          useImperativeHandle: 7,
          useEffect: 3,
          useRef: 10,
          useLayoutEffect: 1
        }
      },
      {
        text: 'Супертолератность',
        id: 4,
        points: {
          useState: 1,
          useReducer: 8,
          useCallback: 10,
          useImperativeHandle: 5,
          useEffect: 2,
          useRef: 1,
          useLayoutEffect: 7
        }
      },
      {
        text: 'Телепортация',
        id: 5,
        points: {
          useState: 3,
          useReducer: 4,
          useCallback: 7,
          useImperativeHandle: 9,
          useEffect: 6,
          useRef: 1,
          useLayoutEffect: 10
        }
      },

      {
        text: 'Читать мысли',
        id: 6,
        points: {
          useState: 1,
          useReducer: 6,
          useCallback: 5,
          useImperativeHandle: 2,
          useEffect: 5,
          useRef: 5,
          useLayoutEffect: 1
        }
      },
      {
        text: 'Дышать под водой',
        id: 7,
        points: {
          useState: 8,
          useReducer: 5,
          useCallback: 1,
          useImperativeHandle: 3,
          useEffect: 9,
          useRef: 8,
          useLayoutEffect: 7
        }
      }
    ]
  }
]

export const hooks = {
  useState: {
    description: 'Ты useState!',
    link: 'https://reactjs.org/docs/hooks-reference.html#usestate'
  },
  useReducer: {
    description: 'Ты useReducer!',
    link: 'https://reactjs.org/docs/hooks-reference.html#usestate'
  },
  useCallback: {
    description: 'Ты useCallback!',
    link: 'https://reactjs.org/docs/hooks-reference.html#usestate'
  },
  useImperativeHandle: {
    description: 'Ты useImperativeHandle!',
    link: 'https://reactjs.org/docs/hooks-reference.html#usestate'
  },
  useEffect: {
    description: 'Ты useEffect!',
    link: 'https://reactjs.org/docs/hooks-reference.html#usestate'
  },
  useRef: {
    description: 'Ты useRef!',
    link: 'https://reactjs.org/docs/hooks-reference.html#usestate'
  },
  useLayoutEffect: {
    description: 'Ты useLayoutEffect!',
    link: 'https://reactjs.org/docs/hooks-reference.html#usestate'
  }
}
