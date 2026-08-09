export type Language = "fr" | "en";

export type Localized<T = string> = Record<Language, T>;

export function localize<T>(value: Localized<T>, language: Language): T {
  return value[language];
}
