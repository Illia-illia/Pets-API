const getCurrent = async (req, res, next) => {
  const { email, name, city, phone, birthday, _id, avatarURL } = req.user;

  res.json({
    status: "sucess",
    code: 200,
    user: {
      name,
      email,
      phone,
      city,
      birthday,
      avatarURL,
      _id,
    },
  });
};

module.exports = getCurrent;
