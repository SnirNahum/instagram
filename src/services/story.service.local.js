import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.js";

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
    id: utilService.makeId(),
    // by: userService.getLoggedinUser(),
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
        "https://www.shutterstock.com/image-vector/cute-astronaut-holding-flag-on-600w-2106090470.jpg",
      txt: "Best trip ever1",
      _id: utilService.makeId(),
      by: {
        _id: "u101",
        fullname: "Manor Solomon",
        imgUrl:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png",
      },
      comments: [],
    },
    {
      imgUrl:
        "https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg",
      txt: "Best trip ever1",
      _id: utilService.makeId(),
      by: {
        _id: "u101",
        fullname: "Oscar Gloukh",
        imgUrl:
          "https://img.uefa.com/imgml/TP/players/13/2023/324x324/250153349.jpg",
      },
      comments: [],
    },
  ];
}
