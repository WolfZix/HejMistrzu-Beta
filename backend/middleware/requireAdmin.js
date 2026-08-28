function requireAdmin(req, res, next) {
  if (req.user?.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Brak uprawnień administratora",
    });
  }
  next();
}

module.exports = requireAdmin;