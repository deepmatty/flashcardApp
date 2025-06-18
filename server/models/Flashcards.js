module.exports = (sequelize, DataTypes) => {
  const Flashcards = sequelize.define("Flashcards", {
    frontText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Flashcards;
};
