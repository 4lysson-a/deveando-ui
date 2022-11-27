import moment from 'moment';

export const onlyNumber = (value: string | number) => (
  value.toString().replace(/[^0-9]/g, '')
);

export const replaceCountryCodeToSendWhatsapp = (phone: string | number) => {
  const phoneFormatted = onlyNumber(phone);
  return phoneFormatted.startsWith('55') ? `${phoneFormatted}` : `55${phoneFormatted}`;
};

export const currencyToNumber = (value: string = ''): number => (
  Number(value
    .replace('R$', '')
    .replace(/\./g, '')
    .replace(',', '.'))
);

export const numberToCurrency = (value: number = 0, symbol: boolean = true): string => {
  const formattedValue = (new Intl
    .NumberFormat('pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      })).format(value);
  return symbol ? formattedValue : formattedValue.replace('R$', '').trim();
};

export const numberToPhone = (phoneNumber: number | string | undefined | null,
  empty: boolean = false): string => {
  const phone = empty && (!phoneNumber || phoneNumber.toString().length === 0)
    ? '0000000000' : onlyNumber(phoneNumber || '');

  if (phone.length === 10) {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
};

export const addZeroLeft = (date: string): string => (date.length === 1 ? `0${date}` : date);

export const formatDateToShow = (d: Date): string => {
  if (!d) {
    return '';
  }

  const date = new Date(d);
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();
  day = addZeroLeft(day);
  month = addZeroLeft(month);
  return `${day}/${month}/${year}`;
};

export const formatHourToShow = (h: Date): string => {
  if (!h) {
    return '';
  }
  const date = new Date(h);
  let hour = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();
  hour = addZeroLeft(hour);
  minutes = addZeroLeft(minutes);
  seconds = addZeroLeft(seconds);
  return `${hour}:${minutes}:${seconds}`;
};

export const removeSecondsHourToShow = (hour: string) => {
  if (!hour) {
    return 'Não informado.';
  }
  try {
    const arrayHour = hour.split(':');
    return `${arrayHour[0]}:${arrayHour[1]}`;
  } catch (e: unknown) {
    return hour;
  }
};

export const getDiffBetweenDatesInDays = (checkInDate: Date, checkOutDate: Date) => {
  const totalDays = moment(checkOutDate, 'YYYY-MMM-DD').diff(moment(checkInDate, 'YYYY-MMM-DD'), 'day');
  return totalDays;
};

export const getStringFormatted = (
  username: string,
  maxLengthStr: number = 10,
  maxDigits: number = 7,
) => {
  const name = username.trim().replace(/\s/g, '-');
  const nameSplitted = name.split('-');

  let nameFormatted = '';
  if (nameSplitted.length > 0) {
    nameSplitted.forEach((item: string) => {
      if (item !== '') {
        nameFormatted += ` ${item}`;
      }
    });
  } else {
    nameFormatted = name;
  }

  if (nameFormatted.length >= maxLengthStr) {
    nameFormatted = `${nameFormatted.substring(0, maxDigits)}...`;
  }

  return nameFormatted;
};

export const getNameFormatted = (name: string) => {
  const nameFormatted = name.trim();
  return nameFormatted;
};

export const formatCPFtoSubmit = (cpf: string) => {
  const newCPF = cpf.replace(/[^\d]+/g, '');
  return newCPF;
};
export const onlyNumbers = (d: string) => d.replace(/\D/g, '');
export const formatCEPToShow = (cep: string) => {
  let cepAux;
  cepAux = onlyNumbers(cep);
  cepAux = cepAux.replace(/^(\d{5})(\d)/, '$1-$2');
  return cepAux;
};

function replaceAll(
  string: string, search: string, replace: string,
) {
  return string.split(search).join(replace);
}

export const formatCNPJToPost = (cnpj: string) => {
  const newCNPJ = replaceAll(
    replaceAll(
      replaceAll(
        cnpj, '.', '',
      ), '/', '',
    ), '-', '',
  );
  return newCNPJ;
};

export const formatedDateOfRequest = (date: string, originFormat?: string) => {
  let dateFormated = moment(date).format('YYYY-MM-DD');
  if (originFormat && originFormat?.length > 1) {
    dateFormated = moment(date, originFormat).format('YYYY-MM-DD');
  } else {
    dateFormated = moment(date).format('YYYY-MM-DD');
  }
  return dateFormated;
};

export const formatedDateToShow = (date: string) => {
  const dateFormated = moment(date).format('DD/MM/YYYY');
  return dateFormated;
};

export const checkEmptyString = (value: string) => (value.trim() === '' ? 'Não informado' : value.trim());
