import model from "./model.js";

export const createModule = (module) => {
  delete module._id;
  return model.create(module);
}
export const findAllModules = () => model.find();
export const findModulesForCourse = (cid) => model.find({course: cid});
export const updateModule = (mid, module) => model.updateOne({name: mid},
    {$set: module});
export const deleteModule = (mid) => model.deleteOne({name: mid});