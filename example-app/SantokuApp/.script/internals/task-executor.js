/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {spawn} = require('child_process');

const elapsedTime = startTime => {
  const precision = 0;
  const elapsed = process.hrtime(startTime)[1] / 1000000;
  const secondCount = process.hrtime(startTime)[0];
  const millisecondCount = elapsed.toFixed(precision);

  if (secondCount > 0) return `${secondCount}s`;
  return `${millisecondCount}ms`;
};

const runCommand = (task, command) => {
  return new Promise((resolve, reject) => {
    process.stdout.write(`\t${command.command} ${command.args.join(' ')} @[${command.cwd || './'}]...`);
    const spawnedTask = spawn(command.command, command.args, {
      shell: true,
      cwd: command.cwd,
      env: {...process.env, ...command.env},
    });
    // Gradleの実行がブロックされてしまうことがあったので、stdoutを読み取るように修正
    spawnedTask.stdout.on('data', () => {});

    let stderr = '';
    spawnedTask.stderr.on('data', data => {
      stderr += data;
    });

    spawnedTask.on('error', error => {
      console.log(`❌ (error: ${error.message})`);
      reject(error);
    });

    spawnedTask.on('exit', code => {
      if (code !== 0) {
        console.log(`❌ (code: ${code})`);
        process.stderr.write(`\t\t${stderr}`);
        reject(code);
      } else {
        console.log(`✔️`);
        resolve(code);
      }
    });
  });
};

const execute = async task => {
  if (!task.enabled) {
    console.log(`⏭️ Skip '${task.name}'`);
    return;
  }

  console.log(`🚀 '${task.name}' has started.`);
  const startTime = process.hrtime();
  for (const command of task.commands) {
    try {
      await runCommand(task, command);
    } catch (e) {
      console.log(`❌ '${task.name}' has failed in ${elapsedTime(startTime)}.`);
      return;
    }
  }
  console.log(`✅ '${task.name}' has finished running in ${elapsedTime(startTime)}.`);
};

module.exports = {
  execute,
};
