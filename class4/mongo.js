const mongoose = require('mongoose');

const url = "mongodb+srv://lakshmiganesh016:LnYh2mE6jb707r0Q@cluster0.lo71vlh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then(()=>{
    console.log("Connection Establish")
}).catch((error)=>{
    console.log(error)
}
)

const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    rating:Number,
    publishedDate:{type:Date, default:Date.now}
})

const courseDetails = mongoose.model('courseDetails', courseSchema);

//create
async function createCourse(){
    const course = new courseDetails({
        name:"After Effects",
        creator:"alan",
        rating:5, 
    })
    const courseCreated = await course.save();
    console.log(courseCreated);
}
// createCourse()


//READ
async function getCourse(){
    const courses = await courseDetails.find({name:'React'});
    if(!courses) return console.log("couldnt get courseDetails")
    console.log(courses);
}
// getCourse();

//update
async function updatecourse(id){
    const course = await courseDetails.findById(id);

    if(!course) return console.log("couldnt find the given id")
   
    course.creator = "upadted-alex"
  await course.save()
    console.log(course);
}

updatecourse('66265cdc0d405cf23c1583d4')

async function Deletecourse(id){
   const delco =  await courseDetails.findByIdAndDelete(id);
   console.log(delco)
}

// Deletecourse('66265cc2000ea8e4261f2806')