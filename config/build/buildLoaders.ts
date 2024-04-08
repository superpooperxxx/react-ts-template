import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  // TYPESCRIPT
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  // STYLES
  const styleLoaderConfig = isDev
    ? "style-loader"
    : MiniCssExtractPlugin.loader;

  const cssLoaderConfig = {
    loader: "css-loader",
    options: {
      modules: {
        auto: /.*\.module\..*/,
        localIdentName: isDev
          ? "[name]__[local]--[hash:base64:5]"
          : "[hash:base64:8]",
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [styleLoaderConfig, cssLoaderConfig],
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [styleLoaderConfig, cssLoaderConfig, "sass-loader"],
  };

  return [typescriptLoader, cssLoader, sassLoader];
};
