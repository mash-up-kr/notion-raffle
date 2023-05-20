module.exports = [
    {
        script: 'dist/main.js',
        name: 'notion-raffle-nest-backend',
        exec_mode: 'cluster',
        instances: 1,
    },
];
