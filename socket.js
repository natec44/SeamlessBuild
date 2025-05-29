let ioInstance;

export const initSocket = (io) => {
  ioInstance = io;

  io.on('connection', (socket) => {
    console.log(`[Socket] Connected: ${socket.id}`);

    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
      console.log(`[Socket] ${socket.id} joined project ${projectId}`);
    });

    socket.on('sendUpdate', ({ projectId, data }) => {
      socket.to(projectId).emit('receiveUpdate', data);
    });

    socket.on('disconnect', () => {
      console.log(`[Socket] Disconnected: ${socket.id}`);
    });
  });
};

export const getIO = () => ioInstance;
