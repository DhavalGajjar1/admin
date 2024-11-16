const Router = require("express")
const adminctl=require("../controllers/admincontroller")
const adminmiddleware = require("../middlewares/adminmiddleware")
const router = Router()


router.post('/admin_add', adminmiddleware, adminctl.addAdminData);
router.get('/delete-admin/:adminId',adminctl.deleteAdmin)
router.post('/editadmin/:adminId',uploadImage,adminctl.editAdmin)
router.get('/logout',adminctl.logout);


module.exports=router