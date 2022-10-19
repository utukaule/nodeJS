module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("age daliye")
    }
    else if (req.query.age < 18) {
        res.send("app gadi nahi chala sakte...")
    }
    else {
        next();
    }
}