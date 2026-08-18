import { Router } from "express";
import * as guestController from "../controller/guest.controller.js";

const router = Router();

// Guest Operations

router.get("/", guestController.getAllGuests);
router.get("/:id", guestController.getGuestById);
router.post("/", guestController.createGuest);
router.post("/bulk", guestController.bulkGuestCreate);
router.put("/:id", guestController.updateGuestById);
router.delete("/:id", guestController.deleteGuestById);

// Guest CheckIn Operations

router.post("/checkin/:id", guestController.checkInGuestById);


export default router;