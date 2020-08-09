const log_window = document.getElementById('log_window');
const local_window = document.getElementById('local_window');
const ssh_window = document.getElementById('ssh_window');
const exec = require("child_process").exec;

loadFolder(".");

function loadFolder(dir) {
  var cmd = "ls " + dir;
  exec(cmd, (error, stdout, stderr) => {
    var out = stdout.replace(/\n/g,'<br>')
    log_window.innerHTML = out;
    local_window.innerHTML = out;
    ssh_window.innerHTML = out;
  });
}

function connect_ssh() {}

function send_file() {}

function create_dir() {}


