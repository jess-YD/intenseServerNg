module.exports = function( sequelize, DataTypes) {
    const Trip = sequelize.define("trips", { //what I put is the name of my table in postgres
        date: {
            type: DataTypes.DATEONLY,
            notEmpty: true
        },
        location: {
            type: DataTypes.STRING, //would location be a string or integer?
            notEmpty: true
        },
        numberPeople: {
            type: DataTypes.INTEGER,
            notEmpty: true
        }
    })

    const User = sequelize.import('./users');
     
    Trip.belongsTo(User)
    return Trip;
}