import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types/config";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  const { port, isDev } = options;

  return isDev
    ? {
        port,
        open: true,
      }
    : undefined;
};
