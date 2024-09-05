import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    originalTitle: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    posterPath: {
        type: String,
        required: true,
    },
    backdropPath: {
        type: String,
        required: true,
    },
    duration:{
        type:Number,
        required:false
    },
    duration:{
        type:Number,
        required:false
    },
    duration:{
        type:String,
        required:false
    },
    rating:{
        type:Number,
        required:false
    },
    views:{
        type:Number,
        required:false
    },
    mediaType: {
        type: String,
        required: false,
    },
    video: {
        type: Boolean,
        required: false,
    },
    videoURL: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('trendingMovie', movieSchema);
