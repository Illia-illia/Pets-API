const add = require("./add");
const addFavoriteNotices = require("./addFavoriteNotices");
const getOneNotice = require("./getOneNotice");
const getNoticeByCategory = require("./getNoticeByCategory");
const getAllUserNotices = require("./getAllUserNotices");
const removeUserNotice = require("./removeUserNotice");
const removeNoticeFromFavorite = require("./removeNoticeFromFavorite");
const getFavoriteNotices = require("./getFavoriteNotices");

module.exports = {
  add,
  addFavoriteNotices,
  getOneNotice,
  removeNoticeFromFavorite,
  getNoticeByCategory,
  getAllUserNotices,
  removeUserNotice,
  getFavoriteNotices,
};
