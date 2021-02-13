// Set express server configs and env variables
module.exports = {
    apps: [{
        name: 'fetch-data-api',
        script: './app.js',
        instances: 1,
        autorestart: true,
        merge_logs: true,
        combine_logs: true,
        time: true,
        error_file: './err.log',
        out_file: './out.log'
    }]
};
