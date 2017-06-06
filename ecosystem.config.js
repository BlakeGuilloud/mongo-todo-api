module.exports = {
  apps: [{
    name: 'mongo-todo-api',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-208-58-108.us-west-2.compute.amazonaws.com',
      key: '~/Desktop/keys/Ubuntu-Key-Pair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:BlakeGuilloud/mongo-todo-api.git',
      path: '/home/ubuntu/mongo-todo-api',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
