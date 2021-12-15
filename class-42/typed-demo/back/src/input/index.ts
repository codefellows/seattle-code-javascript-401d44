import readline from 'readline';

export const getInput = (): readline.Interface => readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
