import fs from 'fs';

export async function copyFile(src: string, dest: string) {
  try {
    await fs.promises.copyFile(src, dest);
  } catch (e) {
    throw new Error(`Cannot copy ${src}. ${String(e)}.`);
  }
}
