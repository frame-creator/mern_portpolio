const express = require('express');


const projectsControllers = require('../controllers/projects-controllers');

const router = express.Router();

router.get('/', projectsControllers.getStacks);
router.get('/tool', projectsControllers.getTools);
router.get('/design', projectsControllers.getDesigns);
router.get('/web', projectsControllers.getWebProjects);
router.get('/mobile', projectsControllers.getMobileProjects);
router.get('/framer', projectsControllers.getFramerProjects);
router.get('/prototype', projectsControllers.getPrototypeProjects);


router.get('/:pid', projectsControllers.getProjectById);

module.exports = router;
