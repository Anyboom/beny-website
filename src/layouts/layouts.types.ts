export enum AppLayoutsEnum {
  main = "main",
  admin = "admin",
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  main: "MainLayout.vue",
  admin: "AdminLayout.vue",
};
