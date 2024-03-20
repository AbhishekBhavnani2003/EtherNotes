const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'AbhishekBhavnani-Webdev'



//  ROUTE 1 : - create a user using : POST "/api/auth/createuser" . no login require
router.post('/createuser', [body('name', 'Enter the valid name').isLength({ min: 3 }),
body('email', 'Enter the valid email ').isEmail(),
body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),],
  async (req, res) => {
    let success = false ; 
    // error - bad request and error 
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).json({ success , errors: result.array() });
    }

    // email duplication checking 

    try {
      let user = await User.findOne({ email: req.body.email })

      if (user) {
        return res.status(400).json({ success , error: "User with this email already exits" })
      }

      const salt = await bcrypt.genSalt(10);
      const secpwd = await bcrypt.hash(req.body.password, salt);
      // new user creation 
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpwd,
      })

      const data =
      {
        user:
        {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET)

      // .then(user => res.json(user))
      // .catch(err => {console.log(err)
      // res.json({error : " Please enter unique value for email "})
      // })
      // res.json(user) 
      success = true ; 
      res.json({ success ,authtoken })
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" Intrenal Server Error ");
    }
  })


// ROUTE 2 : - Authenticate a user using : POST "/api/auth/login" . no login require
router.post('/login', [
  body('email', 'Enter the valid email ').isEmail(),
  body('password', 'Password cannot be blank').exists(),
],
  async (req, res) => {
    let success = false ; 
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).json({ errors: result.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ error: " Please try to login using correct credentials " })
      }

      const pwdcompare = await bcrypt.compare(password, user.password);
      if (!pwdcompare) {
        success = false ; 
        return res.status(400).json({ success , error: " Please try to login using correct credentials " })
      }

      const data =
      {
        user:
        {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET) ;
      success = true ; 
      res.json({ success ,authtoken })
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" Intrenal Server Error ");
    }

  })


// ROUTE 3 : - Get Loged in user details : POST "/api/auth/getuser" . login require
router.post('/getuser' , fetchuser ,  async (req, res) => {
    try {
      userID = req.user.id ; 
      const user = await User.findById(userID).select("-password") 
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" Intrenal Server Error ");
    }
  })


module.exports = router; 