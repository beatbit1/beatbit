const Reel = require("./model/Reels");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const reels = [
    {
        src: 'https://cdn.trendybeatz.com/audio/347aidan-Memories-(TrendyBeatz.com).mp3',
        title: '347aidan-Memories',
        image: '/Images/music1.png',
        icon: '/Images/play.png', 
        type: 'audio/mpeg',
    },
    {
        src: 'https://xclusivepop.work/wp-content/uploads/2022/11/Burna_Boy_-_Alone.mp3',
        title: 'Alone by Burnaboy',
        image: '/Images/music2.png',
        type: 'audio/mpeg',
    },
    {
        src: 'https://cdn3.justnaija.me/uploads/music/2020/08/Burna-Boy-Monsters-You-Made-ft-Chris-Martin-(JustNaija.com).mp3',
        title: 'Monster you made by Burnaboy',
        image: '/Images/music1.png',
        type: 'audio/mpeg',
    },
    {
        src: 'https://cdn.val9ja.com/wp-content/uploads/2024/04/Burna_Boy_Ft_Prince_Swanny_-_Tested_Approved_Trusted.mp3',
        title: 'Tested, Approved & Trusted (feat. Prince Swanny)',
        image: '/Images/music1.png',
        type: 'audio/mpeg',
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
