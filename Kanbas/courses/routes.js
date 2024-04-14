import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findCourseByName = async (req, res) => {
    const course = await dao.findCourseByName(req.params.id);
    res.json(course);
  };
  const updateCourse = async (req, res) => {
    const {id} = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  };
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.userId);
    res.json(status);
  };
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  app.get("/api/courses/:id", findCourseByName);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
}
