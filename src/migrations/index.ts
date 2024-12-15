import * as migration_20241215_104141 from './20241215_104141';
import * as migration_20241215_111128 from './20241215_111128';

export const migrations = [
  {
    up: migration_20241215_104141.up,
    down: migration_20241215_104141.down,
    name: '20241215_104141',
  },
  {
    up: migration_20241215_111128.up,
    down: migration_20241215_111128.down,
    name: '20241215_111128'
  },
];
