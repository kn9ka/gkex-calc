import { useState } from 'react';
import styles from './Home.module.css';
import { ExchangeInput } from './ExchangeInput';
import { Switch } from './Switch';
import { ExchangeButton } from './ExchangeButton';
import { ExchangeRate } from './ExchangeRate';

const Currency = {
  USDT: 'USDT ',
  CASH: 'CASH',
} as const;

type Currency = (typeof Currency)[keyof typeof Currency];

const CurrencyList = {
  [Currency.USDT]: {
    title: 'USDT',
    icon: './usdt.webp',
    rate: 0.01,
  },
  [Currency.CASH]: {
    title: 'CASH',
    icon: './cash.png',
    rate: 100,
  },
};

export const Home = () => {
  const [currencyIn, setCurrencyIn] = useState<Currency>(Currency.USDT);
  const [currencyOut, setCurrencyOut] = useState<Currency>(Currency.CASH);

  const [amountIn, setAmountIn] = useState<number>(1);

  const swap = () => {
    setCurrencyIn(currencyOut);
    setCurrencyOut(currencyIn);
  };

  const amount = amountIn * CurrencyList[currencyIn].rate;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ExchangeInput
          title="You pay"
          imgSrc={CurrencyList[currencyIn].icon}
          value={amountIn}
          onChange={setAmountIn}
          currencyLabel={CurrencyList[currencyIn].title}
        />

        <Switch onClick={swap} />

        <ExchangeInput
          title="You receive"
          imgSrc={CurrencyList[currencyOut].icon}
          value={amount}
          disabled
          currencyLabel={CurrencyList[currencyOut].title}
        />

        <ExchangeRate
          title={CurrencyList[currencyIn].title}
          rate={CurrencyList[currencyOut].rate.toString()}
        />
        <ExchangeButton onClick={() => {}} />
      </div>
    </div>
  );
};
