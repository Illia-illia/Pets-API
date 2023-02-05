const express = require('express');

const router = express.Router();

const { controllerNotices: ctrl } = require('../../controllers');

const { ctrlWrapper } = require('../../helpers');

const {
  isValidId,
  authMiddleware,
  validation,
  upload,
  cloudinaryAddImage,
} = require('../../middlewares');

const { noticesReqSchema } = require('../../models/noticesSchema');

router.get('/:id', isValidId, ctrlWrapper(ctrl.getOneNotice));

router.get('/', ctrlWrapper(ctrl.getNoticeByCategory));

router.post(
  '/favourite/:id',
  authMiddleware,
  ctrlWrapper(ctrl.addFavoriteNotices)
);

router.post(
  '/',
  authMiddleware,
  upload.single('imageURL'),
  validation(noticesReqSchema),
  cloudinaryAddImage,
  ctrlWrapper(ctrl.add)
);

module.exports = router;
