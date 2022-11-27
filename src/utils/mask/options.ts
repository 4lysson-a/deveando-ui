export const onlyNumber = (value: string | number) =>
  value.toString().replace(/[^0-9]/g, "");

export const currency = (value: string): string =>
  new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(Number(onlyNumber(value)) / 100);

export const cpf = (value: string) =>
  onlyNumber(value)
    .replace(/(\d{11})(\d)/, "$1")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

export const cnpj = (value: string) =>
  onlyNumber(value)
    .replace(/(\d{14})(\d)/, "$1")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");

export const cpfOrCnpj = (value: string) => {
  if (value.length < 15) {
    return onlyNumber(value)
      .replace(/(\d{11})(\d)/, "$1")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return onlyNumber(value)
    .replace(/(\d{14})(\d)/, "$1")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
};

export const cep = (value: string | number) => {
  const number = onlyNumber(value);
  if (number.length <= 3) {
    return number;
  }

  return number.substr(0, 8).replace(/([0-9]{5})([0-9]{1,3})/, "$1-$2");
};

export const day = (value: string) => {
  if (value.length > 0) {
    if (Number(value) > 31) {
      return "31";
    }
    return onlyNumber(value).toString().slice(0, 2);
  }
  return value;
};

export const month = (value: string) => {
  if (value.length > 0) {
    if (Number(value) > 12) {
      return "12";
    }
    return onlyNumber(value).toString().slice(0, 2);
  }
  return value;
};

export const year = (value: string) => {
  if (value.length > 0) {
    return onlyNumber(value).toString().slice(0, 4);
  }
  return value;
};

export const agency = (value: string) => {
  if (value.length > 0) {
    return onlyNumber(value).toString().slice(0, 4);
  }
  return value;
};

export const account = (value: string) => {
  const valueAux = value.split("-").join("");
  if (valueAux.length < 2) {
    return valueAux;
  }
  return `${valueAux.substr(0, valueAux.length - 1)}-${valueAux.substr(
    valueAux.length - 1
  )}`;
};

export const phone = (value: string | number) =>
  onlyNumber(value)
    .replace(/^(\d{1,2})/, "+$1")
    .replace(/(\d{2})(\d{1})/, "$1 ($2")
    .replace(/(\+\d{2} \(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{4})(\d{1,4})/, "$1-$2")
    .replace(/(\d{5})(\d{5})/, "$1-$2")
    .replace(/(-\d{5})\d+?$/, "$1")
    .replace(/(\d{4})-(\d{1})(\d{4})/, "$1$2-$3");

export const phoneToNumber = (value: string): string =>
  `+${Number(onlyNumber(value))}`;

export const hour = (value: string | number) =>
  onlyNumber(value)
    .replace(/(\d{4})(\d)/, "$1")
    .replace(/(\d{2})(\d)/, "$1:$2");

