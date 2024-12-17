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
  background-color: #101279;
  color: rgb(155, 37, 37);
  border-radius: 30px;
}

.button--secondary {
  background-color: #FF4E58;
  color: #fff;
  border-radius: 30px;

}

.button--tetriary {
  border-radius: 28.5px;
  border: 3px solid #101279;
  background: #FFF; 
}

.button:disabled {
  background-color: #e0e0e0;
  color: #a0a0a0;
  cursor: not-allowed;
}
</style>