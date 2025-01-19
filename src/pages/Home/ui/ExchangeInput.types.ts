export type ExchangeInputProps = {
  title: string;
  currencyLabel: string;
  imgSrc: string;
  onChange?: (value: number) => void;
  value: number;
  disabled?: boolean;
};
