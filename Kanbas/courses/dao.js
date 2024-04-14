import model from "./model.js";

export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
}
export const findAllCourses = () => model.find();
export const findCourseByName = (courseId) => model.find({name: courseId});
export const updateCourse = (courseId, course) => model.updateOne(
    {name: courseId},
    {$set: course});
export const deleteCourse = (userId) => model.deleteOne({name: userId});