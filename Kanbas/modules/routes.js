import * as dao from "./dao.js";

function ModuleRoutes(app) {
  const updateModule = async (req, res) => {
    const {mid} = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };
  const createModule = async (req, res) => {
    const {courseId} = req.params;
    const module = await dao.createModule({
      ...req.body,
      course: courseId,
    });
    res.json(module);
  };
  const findModulesForCourse = async (req, res) => {
    const {courseId} = req.params;
    const modules = await dao.findModulesForCourse(courseId);
    res.json(modules);
  };

  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
}

export default ModuleRoutes;