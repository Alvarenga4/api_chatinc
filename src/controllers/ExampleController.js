const Controller = require('./Controller');
const ExampleModel = require('../models/ExampleModel');

class ExampleController extends Controller {
  constructor () {
    super(new ExampleModel());
  }
}

module.exports = new ExampleController();
