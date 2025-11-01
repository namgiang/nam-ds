/**
 * @nam-ds/icons - Source-agnostic icon system
 *
 * A thin shim that provides:
 * - Consistent API across icon sources
 * - Accessibility defaults (decorative vs semantic)
 * - Theme integration via currentColor
 * - Tree-shakeable exports
 * - Easy source swapping without app changes
 */
export { BaseIcon, createIcon, ICON_SIZES } from './base';
export type { BaseIconProps, IconSize } from './base';
export * from './icons';
/**
 * Usage Examples:
 *
 * // Decorative icon (automatically aria-hidden)
 * <IconSearch size="md" />
 *
 * // Semantic icon (gets aria-label and role="img")
 * <IconSearch size="md" label="Search products" />
 *
 * // Custom color (overrides currentColor/theme)
 * <IconHeart color="red" />
 *
 * // Different sizes
 * <IconPlus size="xs" />  // 12px
 * <IconPlus size="sm" />  // 16px
 * <IconPlus size="md" />  // 20px (default)
 * <IconPlus size="lg" />  // 24px
 * <IconPlus size="xl" />  // 32px
 * <IconPlus size="2xl" /> // 40px
 */
//# sourceMappingURL=index.d.ts.map