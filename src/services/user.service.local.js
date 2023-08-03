import { storageService } from "./async-storage.service";

const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  saveLocalUser,
  getUsers,
  getById,
  remove,
  update,
  changeScore,
};

window.userService = userService;

function getUsers() {
  return storageService.query("user");
}

async function getById(userId) {
  const user = await storageService.get("user", userId);
  return user;
}

function remove(userId) {
  return storageService.remove("user", userId);
}

async function update({ _id, score }) {
  const user = await storageService.get("user", _id);
  user.score = score;
  await storageService.put("user", user);

  if (getLoggedinUser()._id === user._id) saveLocalUser(user);
  return user;
}

async function login(userCred) {
  const users = await storageService.query("user");
  const user = users.find(
    (user) =>
      user.username === userCred.username && user.password === userCred.password
  );

  if (user) {
    return saveLocalUser(user);
  }
}

async function signup(userCred) {
  if (!userCred.imgUrl)
    userCred.imgUrl =
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
  const user = await storageService.post("user", userCred);
  return saveLocalUser(user);
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
}

async function changeScore(by) {
  const user = getLoggedinUser();
  if (!user) throw new Error("Not loggedin");
  user.score = user.score + by || by;
  await update(user);
  return user.score;
}

function saveLocalUser(user) {
  console.log(user);
  // user = {
  //   _id: user._id,
  //   fullname: user.fullname,
  //   imgUrl: user.imgUrl,
  // };
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
}

// Initial data
(async () => {
  if (!userService.getLoggedinUser()) {
    const userB = {
      username: "username1",
      password: "a",
      fullname: "Username 1",
      imgUrl:
        "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.webp",
      following: [
        {
          _id: "u106",
          fullname: "Dob",
          imgUrl: "http://some-img",
        },
      ],
      followers: [
        {
          _id: "u105",
          username: "Bob",
          imgUrl: "http://some-img",
        },
      ],
      savedStoryIds: ["s104", "s111", "s123"],
      tags: [],
    };
    await userService.signup(userB);

    const userC = {
      username: "username2",
      password: "b",
      fullname: "User name 2",
      imgUrl:
        "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd",
      following: [
        {
          _id: "u106",
          fullname: "Dob",
          imgUrl: "http://some-img",
        },
      ],
      followers: [
        {
          _id: "u105",
          username: "Bob",
          imgUrl: "http://some-img",
        },
      ],
      savedStoryIds: ["s104", "s111", "s123"],
      tags: [],
    };
    await userService.signup(userC);
  }
})();
