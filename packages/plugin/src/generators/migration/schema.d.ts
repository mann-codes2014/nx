import { NameAndDirectoryFormat } from '@nx/devkit/src/generators/artifact-name-and-directory-utils';

export interface Schema {
  path: string;
  name?: string;
  description?: string;
  packageVersion: string;
  packageJsonUpdates?: boolean;
  skipFormat?: boolean;
}
