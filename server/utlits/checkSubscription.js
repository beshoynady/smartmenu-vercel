const RestaurantModel = require('../models/Restaurant.model');
const EmployeeModel = require('../models/Employee.model')



const checkSubscription = async (req, res, next) => {
  try {
    const restaurants = await RestaurantModel.find();
    const role = req.employee.role

    if (restaurants.length === 0) {
      return next();   
     }

    const restaurant = restaurants[0];

    const employees = await EmployeeModel.find();

    if (employees.length === 0 || (employees.length === 1 || role === 'programer')) {
      return next();
    }

    const currentDate = new Date();
    if (currentDate > restaurant.subscriptionEnd && role !== 'programer') {
      return res.status(403).json({ message: 'Subscription has ended' });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'subscription error', error });
  }
};

module.exports = checkSubscription;
