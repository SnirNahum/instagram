import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.local.js";

const STORAGE_KEY = "story";

export const storyService = {
  query,
  getById,
  save,
  remove,
  getEmptyStory,
  addStoryComment,
};

async function query(filterBy = { txt: "", price: 0 }) {
  var stories = await storageService.query(STORAGE_KEY);
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, "i");
    stories = stories.filter(
      (story) => regex.test(story.txt) || regex.test(story.imgUrl)
    );
  }
  if (filterBy.price) {
    stories = stories.filter((story) => story.price <= filterBy.price);
  }
  return stories;
}

function getById(storyId) {
  return storageService.get(STORAGE_KEY, storyId);
}

async function remove(storyId) {
  await storageService.remove(STORAGE_KEY, storyId);
}

async function save(story) {
  var savedStory;
  if (story._id) {
    savedStory = await storageService.put(STORAGE_KEY, story);
  } else {
    // Later, owner is set by the backend
    // story.owner = userService.getLoggedinUser()
    savedStory = await storageService.post(STORAGE_KEY, story);
  }
  return savedStory;
}

async function addStoryComment(storyId, txt) {
  // Later, this is all done by the backend
  const story = await getById(storyId);
  if (!story.comments) story.comments = [];

  const comment = {
    // id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    by: {
      id: "101",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png",
      fullname: "Manor Solomon",
    },
    txt,
  };
  story.comments.push(comment);
  await storageService.put(STORAGE_KEY, story);

  return comment;
}

function getEmptyStory() {
  return {
    txt: "",
    imgUrl: "",
    by: {
      id: "101",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png",
      fullname: "Manor Solomon",
    },
  };
}
_createStories();
function _createStories() {
  let stories = utilService.loadFromStorage(STORAGE_KEY);
  if (!stories || !stories.length) {
    stories = getStories();
    utilService.saveToStorage(STORAGE_KEY, stories);
  }
  return stories;
}

function getStories() {
  return [
    {
      imgUrl:
        "https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg",
      txt: "Happy birthday, Wilson Palacios",
      _id: utilService.makeId(),
      by: {
        _id: "u101",
        fullname: "Manor Solomon",
        username: "spursofficial",
        imgUrl: "https://robohash.org/" + Math.random() * 1000,
        createdAt: "",
      },
      comments: [
        {
          id: "c1001",
          by: {
            _id: "u105",
            username: "bob_the_great",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "good one!",
          likedBy: [
            {
              _id: "u105",
              username: "bob_the_great",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
            {
              _id: "u108",
              username: "alice_in_wonderland",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-30T10:15:22",
          relativeTime: "2h ago",
        },
        {
          id: "c1002",
          by: {
            _id: "u106",
            username: "dob_88",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "not good!",
          createdAt: "2023-07-29T18:45:10",
          relativeTime: "1d ago",
        },
        {
          id: "c1003",
          by: {
            _id: "u101",
            username: "johnDoe",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "Awesome shot!",
          likedBy: [
            {
              _id: "u105",
              username: "bob_the_great",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
            {
              _id: "u107",
              username: "eveWonders",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-28T09:30:05",
          relativeTime: "2d ago",
        },
        {
          id: "c1004",
          by: {
            _id: "u102",
            username: "janeSmith",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "So cute! 🥰",
          createdAt: "2023-07-27T15:20:30",
          relativeTime: "3d ago",
        },
        {
          id: "c1005",
          by: {
            _id: "u107",
            username: "eveWonders",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "Nice view!",
          likedBy: [
            {
              _id: "u106",
              username: "dob_88",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-26T21:12:55",
          relativeTime: "4d ago",
        },
        {
          id: "c1006",
          by: {
            _id: "u109",
            username: "kateM",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "Congratulations!",
          likedBy: [
            {
              _id: "u102",
              username: "janeSmith",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-26T08:05:14",
          relativeTime: "5d ago",
        },
      ],
      stories: [
        {
          id: utilService.makeId(),
          imgUrl:
            "https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png",
        },
        {
          id: utilService.makeId(),
          imgUrl:
            "https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png",
        },
        {
          id: utilService.makeId(),
          imgUrl:
            "https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png",
        },
        {
          id: utilService.makeId(),
          imgUrl:
            "https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png",
        },
      ],
    },
    {
      imgUrl:
        "https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg",
      txt: "Best trip ever1",
      _id: utilService.makeId(),
      by: {
        _id: "u101",
        fullname: "Oscar Gloukh",
        username: "unoRoboto",
        imgUrl: "https://robohash.org/" + Math.random() * 1000,
      },
      comments: [
        {
          id: "c1001",
          by: {
            _id: "u105",
            username: "bob_the_great",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "good one!",
          likedBy: [
            {
              _id: "u105",
              username: "bob_the_great",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
            {
              _id: "u108",
              username: "alice_in_wonderland",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-30T10:15:22",
          relativeTime: "2h ago",
        },
        {
          id: "c1002",
          by: {
            _id: "u106",
            username: "dob_88",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "not good!",
          createdAt: "2023-07-29T18:45:10",
          relativeTime: "1d ago",
        },
        {
          id: "c1003",
          by: {
            _id: "u101",
            username: "johnDoe",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "Awesome shot!",
          likedBy: [
            {
              _id: "u105",
              username: "bob_the_great",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
            {
              _id: "u107",
              username: "eveWonders",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-28T09:30:05",
          relativeTime: "2d ago",
        },
        {
          id: "c1004",
          by: {
            _id: "u102",
            username: "janeSmith",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "So cute! 🥰",
          createdAt: "2023-07-27T15:20:30",
          relativeTime: "3d ago",
        },
        {
          id: "c1005",
          by: {
            _id: "u107",
            username: "eveWonders",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "Nice view!",
          likedBy: [
            {
              _id: "u106",
              username: "dob_88",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-26T21:12:55",
          relativeTime: "4d ago",
        },
        {
          id: "c1006",
          by: {
            _id: "u109",
            username: "kateM",
            imgUrl: "https://robohash.org/" + Math.random() * 1000,
          },
          txt: "Congratulations!",
          likedBy: [
            {
              _id: "u102",
              username: "janeSmith",
              imgUrl: "https://robohash.org/" + Math.random() * 1000,
            },
          ],
          createdAt: "2023-07-26T08:05:14",
          relativeTime: "5d ago",
        },
      ],
    },
  ];
}
