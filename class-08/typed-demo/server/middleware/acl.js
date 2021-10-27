'use strict';

const acl = (capability) => (req, res, next) => {
  
  if (req.user.capabilities.includes(capability)) {
    next();
  } else {
    next('Access Denied');
  }
};

module.exports = acl;
