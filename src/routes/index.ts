import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/rnb', PageController.rnb);
router.get('/pop', PageController.pop);
router.get('/rock', PageController.rock);
router.get('/indie', PageController.indie);
router.get('/folk', PageController.folk);
router.get('/jazz', PageController.jazz);

router.get('/search', SearchController.search);

export default router;