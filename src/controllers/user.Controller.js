export const getUsers = async (req, res) => {
  try {
    res.status(201).json({
      succes: true,
      message: "Users retrieved succesfully",
    });
  } catch (error) {
    res.status(500).json({
      succes: falsee,
      message: "Users cant be retrieved",
    });
  }
};
