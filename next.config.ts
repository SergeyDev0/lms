import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    forceSwcTransforms: true,
    // Включаем турбо режим для ускорения сборки
  },
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
  // Отключаем генерацию source maps в production для ускорения
  productionBrowserSourceMaps: false,
  // Оптимизируем изображения
  images: {
    unoptimized: false,
  },
  // Ускоряем компиляцию TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ускоряем линтинг
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Кэширование для ускорения повторных сборок
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
