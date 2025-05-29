import React from 'react';

const ProjectSelector = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Select Project</h2>
      <select className="w-full border rounded p-2">
        <option value="">-- Select a Project --</option>
        {/* Map your projects here */}
      </select>
    </div>
  );
};

export default ProjectSelector;
