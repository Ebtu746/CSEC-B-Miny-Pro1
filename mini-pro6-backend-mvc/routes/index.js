const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const contactController = require("../controllers/contactController");

// Home route
router.get("/", homeController.getHome);

// About route
router.get("/about", aboutController.getAbout);

// Contact route
router.get("/contact", contactController.getContact);

// Dynamic route: server time
router.get("/time", homeController.getTime);

// POST route accepting JSON
router.post("/echo", homeController.postEcho);

module.exports = router;
