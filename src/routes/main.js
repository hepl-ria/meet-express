// @flow
/* leny/meet-express
 *
 * /routes/main - Main routes
 *
 * coded by leny@flatLand!
 * started at 15/09/2016
 */

import { Router } from "express";
import fHomepageController from "../controllers/home";
import fAddBuddyController from "../controllers/add";

let oRouter = new Router();

oRouter.get( "/", fHomepageController );
oRouter.post( "/", fAddBuddyController );

export default oRouter;
