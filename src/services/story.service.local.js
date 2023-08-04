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
  addStoryLike,
  getEmptyComment,
};

async function query(filterBy) {
  var stories = await storageService.query(STORAGE_KEY);
  if (filterBy.userId) {
    // const regex = new RegExp(filterBy.txt, "i");
    stories = stories.filter((story) => story.by._id === filterBy.userId);
  }
  // if (filterBy.price) {
  //   stories = stories.filter((story) => story.price <= filterBy.price);
  // }
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

async function addStoryComment(storyId, commentToAdd) {
  // Later, this is all done by the backend

  const story = await getById(storyId);
  // if (!story.comments) story.comments = [];
  story.comments.push(commentToAdd);
  await storageService.put(STORAGE_KEY, story);

  return commentToAdd;
}

async function addStoryLike(storyId, userId) {
  const story = await getById(storyId);

  if (!story.likedBy) {
    story.likedBy = [];
  }

  const idx = story.likedBy.findIndex((s) => s === userId);
  if (idx === -1) {
    story.likedBy.push(userId);
  } else {
    story.likedBy.splice(idx, 1);
  }
  await storageService.put(STORAGE_KEY, story);
  return story;
}

function getEmptyStory() {
  return {
    txt: "",
    imgUrl: "",
    likedBy: [],
    tags: [],
    comments: [],
    by: {
      imgUrl: "",
      username: "",
      fullname: "",
      createdAt: Date.now(),
    },
  };
}
function getEmptyComment() {
  return {
    by: {
      _id: "",
      imgUrl: "",
      username: "",
    },
    createdAt: Date.now(),
    likedBy: [],
    txt: "",
    _id: utilService.makeId(),
  };
}
// _createStories();
function _createStories() {
  let stories = utilService.loadFromStorage(STORAGE_KEY);
  if (!stories || !stories.length) {
    stories = getStories();
    utilService.saveToStorage(STORAGE_KEY, stories);
  }
  return stories;
}
