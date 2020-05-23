// All the middleware goes here
var Campground = require("../models/campground")
var Comment = require("../models/campground")
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Campground not found")
                res.redirect("back")
            } else{
                //does the user own the campground?
                if(foundCampground.author.id.equals(req.user._id)) { //Built into mongoose to check is the object version of ID is equal to the string version of ID
                    next();
                } else{
                    req.flash("error", "You dont have premission to do that")
                    res.redirect("back")
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that")
        res.redirect("back");
    }
};


middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back")
            } else{
                //does the user own the comment?
                if(foundComment.author.id.equals(req.user._id)) { //Built into mongoose to check is the object version of ID is equal to the string version of ID
                    next();
                } else{
                    req.flash("error", "You dont have premission to do that!")
                    res.redirect("back")
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that!")
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that!"); //We dont see this until the next thing. In this case after the redirect, it'll show this message
    res.redirect("/login"); //The Flash will show once this code runs
};


module.exports = middlewareObj