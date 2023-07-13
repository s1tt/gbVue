import { createStore } from 'vuex';

import card1 from '../assets/img/art1.jpg';
import card2 from '../assets/img/art2.jpg';
import card3 from '../assets/img/art3.jpg';
import card4 from '../assets/img/art4.jpg';
import card5 from '../assets/img/art5.jpg';
import card6 from '../assets/img/art6.jpg';
import blogDetailsPost1 from '../assets/img/blogDetailsPost1.jpg';
import blogDetailsPost2 from '../assets/img/blogDetailsPost2.jpg';
//our project
import bedRoom1 from '../assets/img/ourProject/bedRoom/bedRoom1.jpg';
import bedRoom2 from '../assets/img/ourProject/bedRoom/bedRoom2.jpg';
import bedRoom3 from '../assets/img/ourProject/bedRoom/bedRoom3.jpg';
import bedRoom4 from '../assets/img/ourProject/bedRoom/bedRoom4.jpg';
import bedRoom5 from '../assets/img/ourProject/bedRoom/bedRoom5.jpg';
import bedRoom6 from '../assets/img/ourProject/bedRoom/bedRoom6.jpg';
import bedRoom7 from '../assets/img/ourProject/bedRoom/bedRoom7.jpg';
import bedRoom8 from '../assets/img/ourProject/bedRoom/bedRoom8.jpg';
//slider
import slider1 from '../assets/img/slider.jpg';

export default createStore({
  state: {
    tags: {
      selectedTagId: '',
      tagsData: [
        {
          id: '1',
          title: 'Kitchen',
        },
        {
          id: '2',
          title: 'Bedroom',
        },
        {
          id: '3',
          title: 'Building',
        },
        {
          id: '4',
          title: 'Architecture',
        },
        {
          id: '5',
          title: 'Kitchen Planning',
        },
        {
          id: '6',
          title: 'Bedroom',
        },
      ],
    },
    cards: [
      {
        id: 1,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card1,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '1',
          title: 'Kitchen',
        },
        date: '26 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 2,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card2,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '2',
          title: 'Bedroom',
        },
        date: '1 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 3,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card3,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '3',
          title: 'Building',
        },
        date: '2 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 4,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card4,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '4',
          title: 'Architecture',
        },
        date: '3 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 5,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card5,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '5',
          title: 'Kitchen Planning',
        },
        date: '4 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 6,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card6,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '6',
          title: 'Bedroom',
        },
        date: '5 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 7,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card1,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '1',
          title: 'Kitchen',
        },
        date: '6 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 8,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card2,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '2',
          title: 'Bedroom',
        },
        date: '7 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 9,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card3,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '3',
          title: 'Building',
        },
        date: '8 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
      {
        id: 10,
        title: 'Let’s Get Solution For Building Construction Work',
        imgUrl: {
          main: card4,
          blogDetails1: blogDetailsPost1,
          blogDetails2: blogDetailsPost2,
        },
        tag: {
          id: '4',
          title: 'Architecture',
        },
        date: '9 December,2022 ',
        text: {
          main: {
            paragraph1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            paragraph2:
              'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            quote: 'The details are not the details. They make the design.',
          },
          more: {
            title: 'Design sprints are great',
            paragraph:
              'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            list: {
              li1: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li2: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              li3: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
          },
        },
      },
    ],
    ourProject: {
      selectedRoom: 'bedroom',
      ourProjectData: {
        bathroom: [
          {
            url: bedRoom1,
            title: 'Minimal Bedroom(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom2,
            title: 'Minimal Bedroom(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom4,
            title: 'Modern Bedroom(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom3,
            title: 'Classic Minimal Bedroom(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom5,
            title: 'Minimal Bedroom(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom6,
            title: 'System Table(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom7,
            title: 'Modern Medroom(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom8,
            title: 'Modern Bedroom(bathroom array)',
            subtitle: 'Decor / Artchitecture',
          },
        ],
        bedRoom: [
          {
            url: bedRoom1,
            title: 'Minimal Bedroom(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom2,
            title: 'Minimal Bedroom(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom4,
            title: 'Modern Bedroom(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom3,
            title: 'Classic Minimal Bedroom(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom5,
            title: 'Minimal Bedroom(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom6,
            title: 'System Table(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom7,
            title: 'Modern Medroom(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom8,
            title: 'Modern Bedroom(bedroom array)',
            subtitle: 'Decor / Artchitecture',
          },
        ],
        kitchen: [
          {
            url: bedRoom1,
            title: 'Minimal Bedroom(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom2,
            title: 'Minimal Bedroom(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom4,
            title: 'Modern Bedroom(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom3,
            title: 'Classic Minimal Bedroom(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom5,
            title: 'Minimal Bedroom(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom6,
            title: 'System Table(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom7,
            title: 'Modern Medroom(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom8,
            title: 'Modern Bedroom(kitchen array)',
            subtitle: 'Decor / Artchitecture',
          },
        ],
        livingArea: [
          {
            url: bedRoom1,
            title: 'Minimal Bedroom(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom2,
            title: 'Minimal Bedroom(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom4,
            title: 'Modern Bedroom(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom3,
            title: 'Classic Minimal Bedroom(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom5,
            title: 'Minimal Bedroom(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom6,
            title: 'System Table(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom7,
            title: 'Modern Medroom(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
          {
            url: bedRoom8,
            title: 'Modern Bedroom(livingArea array)',
            subtitle: 'Decor / Artchitecture',
          },
        ],
      },
    },
    sliderImages: [slider1, slider1, slider1],
  },
  getters: {
    getAllTags: (store) => store.tags.tagsData,
    getSelectedTagId: (store) => store.tags.selectedTagId,
    getAllCards: (store) => store.cards,
    getSliderImages: (store) => store.sliderImages,
    //project
    getAllOurProjectData: (store) => store.ourProject.ourProjectData,
    getSelectedRoom: (store) => store.ourProject.selectedRoom,
  },
  mutations: {
    selectTag(state, tag) {
      state.tags.selectedTagId = tag;
    },

    selectProjectRoom(state, room) {
      state.ourProject.selectedRoom = room;
    },
  },
  actions: {},
  modules: {},
});
