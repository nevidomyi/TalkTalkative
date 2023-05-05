const router = require("express").Router();
const chatController = require("../controllers/chatController");

router.post("/category", chatController.addCategory);
router.get("/category", chatController.getCategories);
router.put("/category/:id", chatController.editCategory);
router.delete("/category/:id", chatController.deleteCategory);
router.post("/chat/:categoryId", chatController.addChat);
router.get("/chat/", chatController.getChats);
router.put("/chat/:chatId", chatController.editChat);
router.delete("/chat/:chatId", chatController.deleteChat);
router.post("/chat/user/:chatId", chatController.joinToChat);
router.delete("/chat/user/:chatId", chatController.deleteFromChat);
router.get(
  "/messages/:chatId",
  chatController.isUserBelong,
  chatController.getMessages
);

// router.post("/categories", chatController.addCategory);
// router.post("/categories/chat", chatController.addChat);
// router.get("/categories", chatController.getCategories);
// router.delete("/categories/:id", chatController.deleteCategory);
// router.delete("/chat/:id", chatController.deleteChat);
// router.delete("/chat/user/:id", chatController.deleteUser);
// router.post("/chat/user/:id", chatController.addUser);
// router.get("/chat/:categoryId", chatController.getChats);
// router.get(
//   "/messages/:chatId",
//   chatController.isUserBelong,
//   chatController.getMessages
// );

module.exports = router;
