'use strict';

module.exports = {
  connect: () => {
    return {
      emit: jest.fn(), // gives use acces to the inputs, 
      on: jest.fn(),
    }
  }
}
