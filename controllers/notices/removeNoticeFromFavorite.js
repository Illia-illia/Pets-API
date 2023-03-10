const HttpError = require("../../helpers/HttpError.js");
const { User } = require("../../models/user");

const removeNoticeFromFavorite = async (req, res) => {
  const { _id, favorite } = req.user;
  const { id } = req.params;

  if (!favorite.includes(id)) {
    throw HttpError(
      409,
      `there is not notice with id: ${id} in your favorite list `
    );
  }

  await User.findByIdAndUpdate(
    _id,
    { $pull: { favorite: id } },
    {
      new: true,
    }
  );

  res.status(200).json({
    message: `notice deleted ${id} from favorite`,
  });
};

module.exports = removeNoticeFromFavorite;
