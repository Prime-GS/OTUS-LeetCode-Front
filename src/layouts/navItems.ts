export interface INavSectionItem {
  title: string;
  path: string;
  roles?: string[];
  children?: INavSectionItem[];
}

export const navItems: INavSectionItem[] = [
  {
    title: "Каталог",
    path: "/explore",
  },
  {
    title: "Проблемы",
    path: "/problems",
  },
  {
    title: "Обсуждения",
    path: "/discuss",
  },
  {
    title: "Администратор",
    path: "/admin",
    roles: ["admin"],
    children: [
      {
        title: "Пользователи",
        path: "/users",
      },
    ],
  },
];
