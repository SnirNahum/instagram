// import { httpService } from "./http.service.js";
// import { utilService } from "./util.service.js";
// import { userService } from "./user.service.js";

// export const storyService = {
//   query,
//   getById,
//   save,
//   remove,
//   getEmptyStory,
//   addStoryComment,
// };

// window.cs = storyService; // for console usage

// async function query(filterBy = { txt: "", price: 0 }) {
//   return httpService.get("story", filterBy);
// }
// function getById(storyId) {
//   return httpService.get(`story/${storyId}`);
// }

// async function remove(storyId) {
//   return httpService.delete(`story/${storyId}`);
// }
// async function save(story) {
//   var savedStory;
//   if (story._id) {
//     savedStory = await httpService.put(`story/${story._id}`, story);
//   } else {
//     savedStory = await httpService.story("story", story);
//   }
//   return savedStory;
// }

// async function addStoryComment(storyId, txt) {
//   const savedMsg = await httpService.story(`story/${storyId}/msg`, { txt });
//   return savedMsg;
// }

// function getEmptyStory() {
//   return {
//     id: utilService.makeId(),
//     img: "img",
//   };
// }
