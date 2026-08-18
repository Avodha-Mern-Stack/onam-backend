import Guest from "../model/guest.model.js";

export const createGuest = async (
    guest
) => {
    try {
        const newGuest = await Guest.create(guest);
        return newGuest;
    } catch (error) {
        throw Error("Error creating guest", error);
    }
}

// Bulk Guest Creation
export const bulkCreateGuest = async (
    guests
) => {
    try {
        console.log(guests);

        const newGuests = await Guest.insertMany(guests);
        return newGuests;
    } catch (error) {
        throw Error("Error creating guest", error);
    }
}

// Get All Guests
export const getAllGuests = async () => {
    try {
        const guests = await Guest.find();
        return guests;
    } catch (error) {
        throw Error("Error getting guests", error);
    }
}


// Get Guest By Id
export const getGuestById = async (id) => {
    try {
        const guest = await Guest.findById(id);
        return guest;
    } catch (error) {
        throw Error("Error getting guest", error);
    }
}


// Update Guest By Id
export const updateGuestById = async (id, guest) => {
    try {
        const updatedGuest = await Guest.findByIdAndUpdate(id, guest, { new: true });
        return updatedGuest;
    } catch (error) {
        throw Error("Error updating guest", error);
    }
}


// Delete Guest By Id
export const deleteGuestById = async (id) => {
    try {
        const deletedGuest = await Guest.findByIdAndDelete(id);
        return deletedGuest;
    } catch (error) {
        throw Error("Error deleting guest", error);
    }
}

// CheckIn Guest By Id
export const checkInGuestById = async (id) => {
    try {
        const guest = await Guest.findById(id);
        guest.attend = true;
        guest.attendAt = new Date();
        const updatedGuest = await guest.save();
        return updatedGuest;
    } catch (error) {
        throw Error("Error checking in guest", error);
    }
}

// Already CheckIn Guest By Id
export const alreadyCheckInGuestById = async (id) => {
    try {
        const guest = await Guest.findById(id ).where("attend").equals(true);
        return guest;
    } catch (error) {
        throw Error("Error checking in guest", error);
    }
}