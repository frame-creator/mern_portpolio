
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');

const Project = require('../models/project');



const getStacks = async (req, res, next) => {
  let stacks;
  try {
    stacks = await Project.find({"feature":"stack"} );
  } catch (err) {
    const error = new HttpError(
      '데이터를 가져오지 못했습니다. 다시 시도해주세요.',
      500
    );
    return next(error);
  }
  res.json({ stacks: stacks.map(stack=> stack.toObject({ getters: true })) });
};

const getDesigns = async (req, res, next) => {
  let designs;
  try {
    designs = await Project.find({"feature":"design"});
  } catch (err) {
    const error = new HttpError(
      '데이터를 가져오지 못했습니다. 다시 시도해주세요.',
      500
    );
    return next(error);
  }
  res.json({ designs: designs.map(project => project.toObject({ getters: true })) });
};

const getTools = async (req, res, next) => {
  let tools;
  try {
    tools = await Project.find({"feature":"tool"});
  } catch (err) {
    const error = new HttpError(
      '데이터를 가져오지 못했습니다. 다시 시도해주세요.',
      500
    );
    return next(error);
  }
  res.json({ tools: tools.map(project => project.toObject({ getters: true })) });
};

const getWebProjects = async (req, res, next) => {
  let webprojects;
  try {
    webprojects = await Project.find({"feature":"web"});
  } catch (err) {
    const error = new HttpError(
      '데이터를 가져오지 못했습니다. 다시 시도해주세요.',
      500
    );
    return next(error);
  }
  res.json({ webprojects: webprojects.map(project => project.toObject({ getters: true })) });
};

const getMobileProjects = async (req, res, next) => {
  let mobileprojects;
  try {
    mobileprojects = await Project.find({"feature":"mobile"});
  } catch (err) {
    const error = new HttpError(
      '데이터를 가져오지 못했습니다. 다시 시도해주세요.',
      500
    );
    return next(error);
  }
  res.json({ mobileprojects: mobileprojects.map(project => project.toObject({ getters: true })) });
};

const getFramerProjects = async (req, res, next) => {
  let framerprojects;
  try {
    framerprojects = await Project.find({"feature":"framer"});
  } catch (err) {
    const error = new HttpError(
      '데이터를 가져오지 못했습니다. 다시 시도해주세요.',
      500
    );
    return next(error);
  }
  res.json({ framerprojects: framerprojects.map(project => project.toObject({ getters: true })) });
};

const getPrototypeProjects = async (req, res, next) => {
  let prototypeprojects;
  try {
    prototypeprojects = await Project.find({"feature":"prototype"});
  } catch (err) {
    const error = new HttpError(
      '데이터를 가져오지 못했습니다. 다시 시도해주세요.',
      500
    );
    return next(error);
  }
  res.json({ prototypeprojects: prototypeprojects.map(project => project.toObject({ getters: true })) });
};


const getProjectById = async (req, res, next) => {
  const projectId = req.params.pid;

  let project;
  try {
    project = await Project.findById(projectId);
  } catch (err) {
    const error = new HttpError(
      '데이터를 찾을 수 없습니다.',
      500
    );
    return next(error);
  }

  if (!project) {
    const error = new HttpError(
      '해당 id로 데이터를 찾을 수 없습니다.',
      404
    );
    return next(error);
  }

  res.json({ project: project.toObject({ getters: true }) });
};

exports.getPrototypeProjects=getPrototypeProjects;
exports.getWebProjects=getWebProjects;
exports.getFramerProjects=getFramerProjects;
exports.getMobileProjects=getMobileProjects;
exports.getProjectById = getProjectById;
exports.getStacks = getStacks;
exports.getDesigns = getDesigns;
exports.getTools = getTools;
