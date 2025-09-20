import React from "react";
import {
  PrimaryButton,
  PrimaryOutlinedButton,
  SecondaryButton,
  SecondaryOutlinedButton,
} from "./components/Atoms/Buttons/Buttons";

export default function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-background text-text">
      <PrimaryButton>Primary</PrimaryButton>
      <PrimaryOutlinedButton>Outlined Primary</PrimaryOutlinedButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SecondaryOutlinedButton>Outlined Secondary</SecondaryOutlinedButton>
    </div>
  );
}
