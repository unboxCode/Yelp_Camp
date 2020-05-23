var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds Rest", 
        image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor leo sed viverra tincidunt. Integer est lacus, consectetur quis accumsan eu, fringilla eu sapien. In sodales rutrum finibus. Donec maximus est quis gravida commodo. Donec non risus sed risus bibendum ultricies nec id lacus. Donec semper, urna eget eleifend hendrerit, nisl velit tempor purus, non malesuada urna ligula non ex. Duis in malesuada augue. Phasellus accumsan aliquet urna at tempor. Suspendisse pulvinar dapibus augue, eget dignissim erat ultrices eu. Proin dapibus vestibulum lectus, id consectetur lacus sagittis ut. In suscipit est urna, et ullamcorper ante dignissim ac. Proin scelerisque finibus elit, non efficitur turpis porta vel. Nulla ligula nisi, dignissim et tristique ac, varius id magna. Quisque in orci scelerisque, gravida urna at, gravida urna. Nulla facilisi. Nam gravida est et arcu venenatis tincidunt. Curabitur facilisis pretium eros, in imperdiet dolor imperdiet non. Etiam blandit leo sapien, vel molestie arcu aliquam ut. Aliquam nec nisl libero. Pellentesque eget enim id turpis luctus aliquam. Mauris sodales mauris sit amet tellus auctor, sit amet auctor felis iaculis. Mauris interdum porttitor scelerisque."
    },
    {
        name: "Natures Valley", 
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor leo sed viverra tincidunt. Integer est lacus, consectetur quis accumsan eu, fringilla eu sapien. In sodales rutrum finibus. Donec maximus est quis gravida commodo. Donec non risus sed risus bibendum ultricies nec id lacus. Donec semper, urna eget eleifend hendrerit, nisl velit tempor purus, non malesuada urna ligula non ex. Duis in malesuada augue. Phasellus accumsan aliquet urna at tempor. Suspendisse pulvinar dapibus augue, eget dignissim erat ultrices eu. Proin dapibus vestibulum lectus, id consectetur lacus sagittis ut. In suscipit est urna, et ullamcorper ante dignissim ac. Proin scelerisque finibus elit, non efficitur turpis porta vel. Nulla ligula nisi, dignissim et tristique ac, varius id magna. Quisque in orci scelerisque, gravida urna at, gravida urna. Nulla facilisi. Nam gravida est et arcu venenatis tincidunt. Curabitur facilisis pretium eros, in imperdiet dolor imperdiet non. Etiam blandit leo sapien, vel molestie arcu aliquam ut. Aliquam nec nisl libero. Pellentesque eget enim id turpis luctus aliquam. Mauris sodales mauris sit amet tellus auctor, sit amet auctor felis iaculis. Mauris interdum porttitor scelerisque."
    },
    {
        name: "Marine Creek", 
        image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor leo sed viverra tincidunt. Integer est lacus, consectetur quis accumsan eu, fringilla eu sapien. In sodales rutrum finibus. Donec maximus est quis gravida commodo. Donec non risus sed risus bibendum ultricies nec id lacus. Donec semper, urna eget eleifend hendrerit, nisl velit tempor purus, non malesuada urna ligula non ex. Duis in malesuada augue. Phasellus accumsan aliquet urna at tempor. Suspendisse pulvinar dapibus augue, eget dignissim erat ultrices eu. Proin dapibus vestibulum lectus, id consectetur lacus sagittis ut. In suscipit est urna, et ullamcorper ante dignissim ac. Proin scelerisque finibus elit, non efficitur turpis porta vel. Nulla ligula nisi, dignissim et tristique ac, varius id magna. Quisque in orci scelerisque, gravida urna at, gravida urna. Nulla facilisi. Nam gravida est et arcu venenatis tincidunt. Curabitur facilisis pretium eros, in imperdiet dolor imperdiet non. Etiam blandit leo sapien, vel molestie arcu aliquam ut. Aliquam nec nisl libero. Pellentesque eget enim id turpis luctus aliquam. Mauris sodales mauris sit amet tellus auctor, sit amet auctor felis iaculis. Mauris interdum porttitor scelerisque."
    },
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log("removed campgrounds!");
         Comment.remove({}, function(err) {
             if(err){
                 console.log(err);
             }
             console.log("removed comments!");
              //add a few campgrounds
             data.forEach(function(seed){
                 Campground.create(seed, function(err, campground){
                     if(err){
                         console.log(err)
                     } else {
                         console.log("added a campground");
                         //create a comment
                         Comment.create(
                             {
                                 text: "This place is great, but I wish there was internet",
                                 author: "Homer"
                             }, function(err, comment){
                                 if(err){
                                     console.log(err);
                                 } else {
                                     campground.comments.push(comment);
                                     campground.save();
                                     console.log("Created new comment");
                                 }
                             });
                     }
                 });
             });
         });
     }); 
     //add a few comments
 }

module.exports = seedDB;

