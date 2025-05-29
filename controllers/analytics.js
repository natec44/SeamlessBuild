const Task = require('../models/Task');
const Project = require('../models/Project');

exports.getProjectAnalytics = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    const totalTasks = await Task.countDocuments({ projectId });
    const completedTasks = await Task.countDocuments({ projectId, status: 'completed' });
    const pendingTasks = totalTasks - completedTasks;

    const tasks = await Task.find({ projectId });
    const totalCost = tasks.reduce((sum, t) => sum + (t.cost || 0), 0);
    const totalHours = tasks.reduce((sum, t) => sum + (t.hours || 0), 0);

    res.json({
      totalTasks,
      completedTasks,
      pendingTasks,
      totalCost,
      totalHours
    });
  } catch (error) {
    next(error);
  }
};
