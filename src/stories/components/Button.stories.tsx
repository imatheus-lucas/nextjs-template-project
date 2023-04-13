import { Button } from "@/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Design System/Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "disabled"],
      control: { type: "select" },
    },
    label: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button label="Primary" />,
};

export const Disabled: Story = {
  render: (args) => (
    <Button
      onClick={() => {}}
      disabled
      label={args.label}
      variant={args.variant}
    />
  ),
};

export const Secondary: Story = {
  render: () => <Button label="Secondary" variant="secondary" />,
};
