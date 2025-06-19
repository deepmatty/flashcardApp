module.exports = (sequelize, DataTypes) => {
  const Cards = sequelize.define("Cards", {
    frontText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Cards;
};
