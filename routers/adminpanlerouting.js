const Router = require("express")
const adminpanlectl = require("../controllers/adminpanlecontroller")
const adminauth = require("../middlewares/adminauth")
const router = Router()

router.get("/",adminauth,adminpanlectl.homepage);
router.get("/login",adminpanlectl.loginpage);
router.get('/admin_add', adminpanlectl.adminaddPage);
router.get('/view_admin', adminpanlectl.viewadminPage);
router.get('/editadmin/:id', adminpanlectl.editadminPage);
router.get('/signup', adminpanlectl.signupPage)
router.post('/login',adminpanlectl.login)


module.exports=router