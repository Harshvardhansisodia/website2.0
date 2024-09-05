import trendingMovie from "../model/trendingMovies.js";

// Create trendingMovie
export const create = async (req, res) => {
    try {
        const trendingMovieData = new trendingMovie(req.body);
        if (!trendingMovieData) {
            return res.status(404).json({ msg: "trendingMovie Data Not Found" });
        }

        const savedData = await trendingMovieData.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All trendingMovies
export const getAll = async (req, res) => {
    try {
        const trendingMovieData = await trendingMovie.find();
        if (!trendingMovieData) {
            return res.status(404).json({ msg: "trendingMovies Not Found" });
        }

        res.status(200).json(trendingMovieData);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single trendingMovie
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const trendingMovieExist = await trendingMovie.findById(id);

        if (!trendingMovieExist) {
            return res.status(404).json({ msg: "trendingMovie Not Found!" });
        }

        res.status(200).json(trendingMovieExist);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
