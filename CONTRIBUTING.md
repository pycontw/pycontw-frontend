# Style Coding Conventions

Use Tailwind CSS utility classes as the default way to style Vue components.
A `class` attribute containing Tailwind utilities is not an inline style. In
this guide, an inline style means the HTML `style` attribute or Vue's `:style`
binding.

## Order of preference

Choose the first option that fits:

1. Put static styles in the template with Tailwind utilities.
2. Use Vue `:class` for conditional styles.
3. Use Tailwind variants such as `sm:`, `md:`, `hover:`, and `dark:` for
   responsive and state-based styles.
4. Use `:style` only for values calculated at runtime.
5. Use scoped CSS when Tailwind cannot reasonably express the required CSS.
6. Use global CSS only for design tokens, shared `@utility` rules, and
   site-wide behavior.

## Prefer Tailwind utilities

Write static styles directly in the template.

```vue
<!-- Do -->
<article class="rounded-xl border border-default bg-default p-4 md:p-6">
  ...
</article>
```

Do not create a CSS class that only hides a list of utilities.

```vue
<!-- Don't -->
<article class="session-card">
  ...
</article>

<style scoped>
.session-card {
  @apply rounded-xl border border-default bg-default p-4 md:p-6;
}
</style>
```

Prefer existing theme tokens and responsive variants. Use an arbitrary value
such as `w-[17px]` only when no suitable token exists.

## Use `:class` for conditions

Keep unconditional utilities in `class` and put only the changing utilities in
`:class`.

```vue
<button
  class="rounded-xl border px-4 py-3 transition-colors"
  :class="{
    'border-accented bg-inverted text-inverted': active,
    'cursor-not-allowed opacity-50': disabled,
  }"
  :disabled="disabled"
>
  Select
</button>
```

Use a computed value when the conditions are complex or the same class list is
reused in the template.

## Use `:style` for runtime values

Use a computed style object for values that cannot be known at build time. Do
not move static colors, spacing, or layout into `:style`.

```vue
<script setup lang="ts">
const props = defineProps<{
  columnCount: number
}>()

const gridStyle = computed(() => ({
  gridTemplateColumns: `88px repeat(${props.columnCount}, 220px)`,
}))
</script>

<template>
  <div class="grid min-w-max gap-1" :style="gridStyle">
    ...
  </div>
</template>
```

When runtime values must be used by scoped CSS, pseudo-elements, or several CSS
declarations, pass them through CSS custom properties.

```vue
<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = defineProps<{
  x: number
  y: number
}>()

const spotlightStyle = computed(() => ({
  '--spotlight-x': `${props.x}px`,
  '--spotlight-y': `${props.y}px`,
}) as CSSProperties)
</script>

<template>
  <div class="spotlight" :style="spotlightStyle" />
</template>

<style scoped>
.spotlight {
  mask-image: radial-gradient(
    circle at var(--spotlight-x) var(--spotlight-y),
    black,
    transparent 120px
  );
}
</style>
```

## Keep custom CSS local

Scoped CSS is appropriate for selectors, properties, and behavior that cannot
be expressed clearly with utilities, including third-party state attributes and
keyframes.

```vue
<style scoped>
.drawer[data-state="open"] {
  animation: drawer-in 300ms ease-out;
}

@keyframes drawer-in {
  from {
    translate: 0 100%;
  }
}
</style>
```

Keep this CSS in the component that owns the behavior. Do not add it to the
global stylesheet unless it is intentionally shared across the application.

## Reuse styles by meaning

- Extract repeated markup or behavior into a Vue component.
- Add an `@utility` rule to `app/assets/css/main.css` only for a small,
  meaningful style used across components.
- Do not add an `@apply` wrapper only to shorten a `class` attribute.

```css
/* app/assets/css/main.css */
@utility text-pop {
  @apply text-5xl md:text-7xl;
}
```

```vue
<h1 class="text-pop font-bold">
  Welcome
</h1>
```

## Pull request checklist

- Static styles use Tailwind utilities.
- Conditional styles use `:class`.
- Responsive styles use Tailwind variants where possible.
- `:style` contains runtime values only.
- Existing theme tokens are preferred over arbitrary values.
- Custom CSS is scoped and has a reason to exist.
- Global styles and custom utilities are intentionally shared.
