const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function runCheck() {
  try {
    await ssh.connect({
      host: '103.185.75.166',
      port: 2222,
      username: 'root',
      password: 'Hj8743VN@Jb&%$3@!'
    });

    const res = await ssh.execCommand('ls -la "/home/apps/ssquad_global/public/certificate/soc 2 type 2.jpeg" && git hash-object "/home/apps/ssquad_global/public/certificate/soc 2 type 2.jpeg"', { cwd: '/home/apps/ssquad_global' });
    console.log("Server file info:\n" + res.stdout);
    if (res.stderr) console.log("Errors:", res.stderr);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    ssh.dispose();
  }
}

runCheck();
