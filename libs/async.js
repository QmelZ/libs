module.exports = (run) => {
    let t = new java.lang.Thread(run);
    t.setDaemon(true);
    t.start();
    return t;
};
