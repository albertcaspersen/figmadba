import Button from "../components/Button.vue";

export default {
  title: "Components/Button", // Navngivning i Storybook
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tetriary"], // Muligheder for typen
    },
    disabled: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Primary Button",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Secondary Button",
  disabled: false,
};

export const Tetriary = Template.bind({});
Tetriary.args = {
  type: "tetriary",
  label: "Tetriary Button",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "primary",
  label: "Disabled Button",
  disabled: true,
};
