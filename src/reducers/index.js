import { SET_INPUT, FILTER_LISTS } from "actions/actions";
import { github, tistory, youtube } from "images/channel";
import {
  animory,
  bitcoin,
  bookClip,
  gestalt,
  momentom,
  movieApp,
  responsiveSingle,
  timer,
  webCrawling,
  profileApp,
  readybe
} from "images/items";

const initialState = {
  value: "",
  viewList: [],
  totalLists: [
    {
      header: "레디비",
      imgSrc: readybe,
      tags: [
        "React-native",
        "Redux",
        "Expo",
        "Utility",
        "Framework",
        "Javascript"
      ],
      link: "https://github.com/minhanPark/todo-timer"
    },
    {
      header: "애니모리",
      imgSrc: animory,
      tags: ["React-native", "Expo", "Game", "Framework", "Javascript"],
      link:
        "https://play.google.com/store/apps/details?id=co.runningwater.animory"
    },
    {
      header: "반응형 페이지",
      imgSrc: responsiveSingle,
      tags: ["Responsive", "HTML", "CSS", "FLEX"],
      link: "https://minhanpark.github.io/singlepage-responsive-web/"
    },
    {
      header: "크롤러",
      imgSrc: webCrawling,
      tags: ["Python", "Crawling", "Scrapy", "Library"],
      link: "https://github.com/minhanPark/news_crawling"
    },
    {
      header: "뮤비 앱",
      imgSrc: movieApp,
      tags: ["React", "Javascript", "Fetch", "API"],
      link: "https://minhanpark.github.io/movie-app/"
    },
    {
      header: "프로필 생성기",
      imgSrc: profileApp,
      tags: ["React", "Javascript", "Fetch", "API"],
      link: "https://minhanpark.github.io/randomProfileMaker/"
    },
    {
      header: "북클립",
      imgSrc: bookClip,
      tags: ["Python", "Django", "Responsive", "PythonAnywhere", "Framework"],
      link: "http://runningwater.pythonanywhere.com/"
    },
    {
      header: "동물 페이지",
      imgSrc: gestalt,
      tags: ["React", "Javascript", "Responsive", "Framework", "Gestalt"],
      link: "https://minhanpark.github.io/gestalt_simple_wabpage/"
    },
    {
      header: "RH 코인",
      imgSrc: bitcoin,
      tags: ["Bitcoin", "Block chain", "Socket io", "Javascript", "Library"],
      link: "https://github.com/minhanPark/RH_coin"
    },
    {
      header: "코인 익스프롤러",
      imgSrc: bitcoin,
      tags: ["React", "Javascript", "Router", "SPA", "Bitcoin"],
      link: "https://github.com/minhanPark/RH_coin_Explorer"
    },
    {
      header: "모멘텀",
      imgSrc: momentom,
      tags: ["Javascript", "Vanilla", "API", "Fetch", "Local Storage"],
      link: "https://minhanpark.github.io/My_Momentom/"
    },
    {
      header: "타이머",
      imgSrc: timer,
      tags: ["React-native", "Redux", "Javascript", "Expo", "Framework"],
      link: "https://github.com/minhanPark/tomato-timer-app"
    }
  ],
  channels: [
    {
      header: "동영상",
      imgSrc: youtube,
      tags: ["Youtube", "Chobo coding", "Video"],
      link: "https://www.youtube.com/channel/UC-Q8WOED3l2Bx27EkOxaj8g"
    },
    {
      header: "저장소",
      imgSrc: github,
      tags: ["Git", "Repository", "Code"],
      link: "https://github.com/minhanPark"
    },
    {
      header: "블로그",
      imgSrc: tistory,
      tags: ["Blog", "Study", "Text"],
      link: "https://justmakeyourself.tistory.com/"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        value: action.value
      };
    case FILTER_LISTS:
      return {
        ...state,
        viewList: [...action.viewList]
      };
    default:
      return state;
  }
};

export default reducer;
