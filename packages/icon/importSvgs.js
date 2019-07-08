let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./svgs/', true, /\.svg$/))
} catch (error) {
}