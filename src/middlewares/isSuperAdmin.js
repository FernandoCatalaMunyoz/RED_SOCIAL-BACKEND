export const isSuperAdmin = (req, res, next) => {
  try {
    if (req.tokenData.roleName !== "super_admin") {
      return res.status(401).json({
        succes: false,
        message: "UNAUTHORIZED",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "You dont have credentials",
    });
  }
};
