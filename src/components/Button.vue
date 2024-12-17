<template>
  <button
    :class="['button', `button--${type}`]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary", // primary, secondary, danger
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  methods: {
    onClick(event) {
      if (!this.disabled) this.$emit("click", event);
    },
  },
};
</script>

<style>
.button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  background-color: #cb1eff;
  color: white;
  border-radius: 30px;
}

.button--secondary {
  background-color: #d3d3d3;
  color: black;
}

.button--danger {
  background-color: #ff4d4f;
  color: white;
}

.button:disabled {
  background-color: #e0e0e0;
  color: #a0a0a0;
  cursor: not-allowed;
}
</style>