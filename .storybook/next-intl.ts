import en from "../messages/en.json";
import pt from "../messages/pt-BR.json";

const messagesByLocale: Record<string, any> = { en, pt };

const nextIntl = {
  defaultLocale: "pt",
  messagesByLocale,
};

export default nextIntl;
