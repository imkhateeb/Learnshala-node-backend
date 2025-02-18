const cloudinary = require("../lib/cloudinary");
const { Readable } = require("stream");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: "error",
        msg: "Bad Request",
        data: {},
        error: {
          msg: "Bad Request",
        },
      });
    }

    const buffer = req.file.buffer;

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "assets" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      Readable.from(buffer).pipe(stream);
    });

    res.status(200).json({
      status: "success",
      msg: "File uploaded successfully",
      data: {
        url: result.secure_url,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
      data: {},
      error: {
        msg: "Internal Server Error",
      },
    });
  }
};

module.exports = uploadFile;
