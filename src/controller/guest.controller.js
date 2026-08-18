import * as guestService from "../services/guest.service.js";

export const createGuest = async (req, res) => {
    try {
        const newGuest = await guestService.createGuest(req.body);
        res.status(201).json(newGuest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const bulkGuestCreate = async (req, res) => {
    try {

        const newGuests = await guestService.bulkCreateGuest(req.body);
        res.status(201).json(newGuests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllGuests = async (req, res) => {
    try {
        const guests = await guestService.getAllGuests();
        res.status(200).json(guests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getGuestById = async (req, res) => {
    try {
        const guest = await guestService.getGuestById(req.params.id);
        res.status(200).json(guest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateGuestById = async (req, res) => {
    try {
        const updatedGuest = await guestService.updateGuestById(req.params.id, req.body);
        res.status(200).json(updatedGuest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteGuestById = async (req, res) => {
    try {
        const deletedGuest = await guestService.deleteGuestById(req.params.id);
        res.status(200).json(deletedGuest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const checkInGuestById = async (req, res) => {
    try {

        const already = await guestService.alreadyCheckInGuestById(req.params.id);

        if (already) {
            return res.status(400).json({ error: "Guest already checked in" });
        }

        const guest = await guestService.checkInGuestById(req.params.id);
        res.status(200).json(guest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};