import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        succes: false,
        message: "UNAUTHORIZE",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.tokenData = decoded;
    console.log("userID " + req.tokenData.userId);
    next();
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "JWT NOT VALID OR MALFORMED",
    });
  }
};
