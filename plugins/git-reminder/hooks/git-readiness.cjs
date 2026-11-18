const fs = require('node:fs');
const { spawnSync } = require('node:child_process');

function readiness(cwd) {
  const result = spawnSync('git', ['-C', cwd, 'rev-parse', '--is-inside-work-tree'], {
    encoding: 'utf8',
    env: { ...process.env, LC_ALL: 'C' },
    windowsHide: true,
  });
  if (result.status === 0 && result.stdout.trim() === 'true') return '';
  if (result.error?.code === 'ENOENT') return 'Git is unavailable. Offer to continue or pause to fix Git.';
  if (/^fatal: not a git repository \(or any of the parent directories\): \.git\s*$/.test(result.stderr || '')) {
    return 'This folder is outside Git. Offer to initialize here or continue without Git. Recheck before initializing.';
  }
  return 'Git could not confirm a working tree. Offer to continue or inspect the problem.';
}

if (require.main === module) {
  const { cwd } = JSON.parse(fs.readFileSync(0, 'utf8').replace(/^\uFEFF/, ''));
  const status = readiness(cwd);
  if (status) {
    const additionalContext = [
      'Silent startup check for ' + JSON.stringify(cwd) + '.',
      'For notes and other non-code tasks, work normally without mentioning Git.',
      'Before the first requested code change, including on a later turn, name the folder and ask the user to choose.',
      status, 'Wait for the answer before editing code. Honor the choice for this session.',
    ].join(' ');
    console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext } }));
  }
}

module.exports = { readiness };
