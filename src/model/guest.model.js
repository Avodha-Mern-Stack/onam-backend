import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    checkIn: { type: Date },
    attend: { type: Boolean, default: false },
    attendAt: { type: Date, default: null },
    qrToken: { type: String, default: null }
},
{
    timestamps: true
}
);

const Guest = mongoose.model("Guest", guestSchema);

export default Guest;