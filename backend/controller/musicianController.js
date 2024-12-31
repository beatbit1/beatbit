const Reel = require("../model/Reels");

//fetch all musician
exports.getAllMusicians = async (req, res) => {
    try {
        const musicians = await Reel.find({});
        res.status(200).json(musicians);
    } catch (error) {
        res.status(500).json({error: "Fail to fetch musician"});
    }
};


// Fetch a single musician by title
exports.getMusicianByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const musician = await Reel.findOne({ title });
        if (!musician) {
            return res.status(404).json({ error: "Reel not found" });
        }
        res.status(200).json(musician);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch reel" });
    }
};

// Add a new musician
exports.addMusician = async (req, res) => {
    const { title, src, image, type, icon, name } = req.body;
    try {
      const newReel = new Reel({ title, src, image, type, icon, name });
      await newReel.save();
      res.status(201).json(newReel);
    } catch (error) {
      res.status(500).json({ error: "Failed to add reel" });
    }
  };

//Search Musician
exports.searchMusicians = async (req, res) => {
    const { query } = req.query;

    try {
        const musicians = await Reel.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { title: { $regex: query, $options: "i" } }
            ]
        })
        res.status(200).json(musicians)
    } catch (error) {
        res.status(500).json({ message: "Error searching reels", error });
    }
}