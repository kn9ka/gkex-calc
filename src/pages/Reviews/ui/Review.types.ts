export type CryptoInfo = {
  from: string;
  to: string;
  amount: number;
  rate: number;
}

export type ReviewProps = {
  name: string;
  date: string;
  stars: number;
  text: string;
  crypto: CryptoInfo;
}
