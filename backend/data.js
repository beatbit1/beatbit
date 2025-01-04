const mongoose = require("mongoose");
const Reel = require("./model/Reels");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const reels = [
    {
        audioUrl: 'https://cdn.trendybeatz.com/audio/347aidan-Memories-(TrendyBeatz.com).mp3',
        title: '347aidan-Memories',
        imageUrl: '/Images/music1.png',
        icon: '/Images/play.png', 
        type: 'audio/mpeg',
        likeicon: '/Images/like.png',
        dislikeicon: '/Images/dislike.png'
    },
    {
        audioUrl: 'https://xclusivepop.work/wp-content/uploads/2022/11/Burna_Boy_-_Alone.mp3',
        title: 'Alone by Burnaboy',
        imageUrl: '/Images/music2.png',
        type: 'audio/mpeg',
        likeicon: '/Images/like.png',
        dislikeicon: '/Images/dislike.png'
    },
    {
        audioUrl: 'https://cdn3.justnaija.me/uploads/music/2020/08/Burna-Boy-Monsters-You-Made-ft-Chris-Martin-(JustNaija.com).mp3',
        title: 'Monster you made by Burnaboy',
        imageUrl: '/Images/music1.png',
        type: 'audio/mpeg',
        likeicon: '/Images/like.png',
        dislikeicon: '/Images/dislike.png'
    },
    {
        audioUrl: 'https://cdn.val9ja.com/wp-content/uploads/2024/04/Burna_Boy_Ft_Prince_Swanny_-_Tested_Approved_Trusted.mp3',
        title: 'Tested, Approved & Trusted (feat. Prince Swanny)',
        imageUrl: '/Images/music1.png',
        type: 'audio/mpeg',
        likeicon: '/Images/like.png',
        dislikeicon: '/Images/dislike.png'
    },
    
];

const insertReels = async () => {
    await connectDB();
    try {
        await Reel.insertMany(reels);
        console.log('Mock data inserted successfully!');
    } catch (error) {
        console.error('Error inserting mock data:', error);
    } finally {
        mongoose.disconnect(); // Close connection
    }
};

insertReels();
