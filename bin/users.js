const express = require('express');
const User = require('../models/users.js')

const userPush = (res, createdHike) => {
  console.log("these are user.hikes " + User.hikes);
};

module.exports = userPush;
