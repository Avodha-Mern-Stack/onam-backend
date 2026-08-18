import * as guestRepository from "../repositories/guest.repositories.js";

export const createGuest = async (guest) => {
    try {
        const newGuest = await guestRepository.createGuest(guest);
        return newGuest;
    } catch (error) {
        throw Error("Error creating guest", error);
    }
};

export const bulkCreateGuest = async (guests) => {
    try {
        const newGuests = await guestRepository.bulkCreateGuest(guests);
        return newGuests;
    } catch (error) {
        throw Error("Error creating guest", error);
    }
};

export const getAllGuests = async () => {
    try {
        const guests = await guestRepository.getAllGuests();
        return guests;
    } catch (error) {
        throw Error("Error getting guests", error);
    }
};

export const getGuestById = async (id) => {
    try {
        const guest = await guestRepository.getGuestById(id);
        return guest;
    } catch (error) {
        throw Error("Error getting guest", error);
    }
};

export const updateGuestById = async (id, guest) => {
    try {
        const updatedGuest = await guestRepository.updateGuestById(id, guest);
        return updatedGuest;
    } catch (error) {
        throw Error("Error updating guest", error);
    }
};

export const deleteGuestById = async (id) => {
    try {
        const deletedGuest = await guestRepository.deleteGuestById(id);
        return deletedGuest;
    } catch (error) {
        throw Error("Error deleting guest", error);
    }
};

export const checkInGuestById = async (id) => {
    try {
        const guest = await guestRepository.checkInGuestById(id);
        return guest;
    } catch (error) {
        throw Error("Error checking in guest", error);
    }
};

export const alreadyCheckInGuestById = async (id) => {
    try {
        const guest = await guestRepository.alreadyCheckInGuestById(id);
        return guest;
    } catch (error) {
        throw Error("Error checking in guest", error);
    }
};