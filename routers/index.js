const Router = require("express");
const adminrouter = require("./adminrouting");
const adminpanlerouter = require("./adminpanlerouting");
const blogRouter = require("./blogRouter");


const router=Router()


router.use("/",adminrouter);
router.use("/",adminpanlerouter);
router.use('/blog', blogRouter);

module.exports=router
