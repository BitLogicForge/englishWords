import { default as ExercisePage } from "../pages/ExercisePage.tsx";
import { default as HomePage } from "../pages/HomePage.tsx";
import { default as SettingsPage } from "../pages/SettingsPage.tsx";

type MenuItemType = {
  label: string;
  value: string;
  component: React.FC;
};

export const menuItems: MenuItemType[] = [
  { label: "Home", value: "home", component: HomePage },
  { label: "Exercise", value: "exercise", component: ExercisePage },
  { label: "Settings", value: "settings", component: SettingsPage },
];
