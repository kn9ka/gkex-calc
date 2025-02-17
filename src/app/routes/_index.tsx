import { Home } from '@/pages/Home/ui/Home';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_CHAT_ID;

export const loader = async () => {
  return Response.json({ message: 'Введите текст для отправки в Telegram' });
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const amountIn = formData.get('amountIn') as string;
  const contact = formData.get('contact') as string;
  const currencyIn = formData.get('currencyIn') as string;
  const currencyOut = formData.get('currencyOut') as string;
  const rate = formData.get('rate') as string;

  const text = `Amount: ${amountIn} \nContact: ${contact} \nCurrencyIn: ${currencyIn} \nCurrencyOut: ${currencyOut} \nRate: ${rate}`;

  if (!text.trim()) {
    return Response.json(
      { error: 'Сообщение не может быть пустым' },
      { status: 400 },
    );
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const params = {
    chat_id: CHAT_ID,
    text,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    if (data.ok) {
      return Response.json({ success: 'Сообщение отправлено!' });
    } else {
      return Response.json({ error: data.description }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error: 'Ошибка сети' }, { status: 500 });
  }
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
