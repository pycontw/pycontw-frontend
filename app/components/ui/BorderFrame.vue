<script setup lang="ts">

</script>

<template>
  <div class="border-frame absolute inset-0 select-none z-10">
    <div class="corner tl" />
    <div class="corner tr" />
    <div class="corner bl" />
    <div class="corner br" />
  </div>
</template>

<!-- usage
<div class="relative border border-default border-dashed box-border">
  <BorderFrame />
</div>
<div class="relative border border-default border-dashed border-t-0 box-border">
  <BorderFrame />
</div>
-->

<style scoped>
.border-frame {
  --bf-size: 16px;
  --bf-color: var(--color-neutral-800);
  --bf-offset: -1px;

  .corner {
    width: 0;
    height: 0;
    position: absolute;
  }

  .tl {
    border-top: var(--bf-size) solid var(--bf-color);
    border-right: var(--bf-size) solid transparent;
    top: var(--bf-offset);
    left: var(--bf-offset);
  }

  .tr {
    border-top: var(--bf-size) solid var(--bf-color);
    border-left: var(--bf-size) solid transparent;
    top: var(--bf-offset);
    right: var(--bf-offset);
  }

  .bl {
    border-bottom: var(--bf-size) solid var(--bf-color);
    border-right: var(--bf-size) solid transparent;
    bottom: var(--bf-offset);
    left: var(--bf-offset);
  }

  .br {
    border-bottom: var(--bf-size) solid var(--bf-color);
    border-left: var(--bf-size) solid transparent;
    bottom: var(--bf-offset);
    right: var(--bf-offset);
  }
}
</style>
