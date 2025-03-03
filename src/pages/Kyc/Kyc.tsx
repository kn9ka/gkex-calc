import { motion } from 'framer-motion';
import React from 'react';
import styles from './Kyc.module.css';

const Kyc: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <p className={styles.text}>Подробнее про KYC & AML процедуры</p>
      <h2 className={styles.subtitle}>
        KYC-проверка: что это и где используется
      </h2>
      <p className={styles.text}>
        Что такое KYC-процедура и почему ей уделяют так много внимания?
        Рассказываем, как она сможет уберечь вас от мошенников, сохранив
        анонимность. KYC- и AML-проверки: для чего нужна верификация личности в
        криптовалютной сфере. KYC (Know Your Customer) – процедура верификации
        личности клиента и оценки потенциальных рисков от него. Но зачем она
        нужна и почему сегодня практически невозможно купить криптовалюту, не
        подтвердив свою личность? Не противоречит ли это изначальным принципам
        анонимности и децентрализации криптоиндустрии? Сегодня мы разберем, для
        чего нужны AML- и KYC-проверки и как они работают. Также расскажем, как
        верификация поможет уменьшить количество мошенников, сохраняя при этом
        базовую анонимность пользователей.
      </p>
      <h2 className={styles.subtitle}>Что такое AML и для чего он нужен?</h2>
      <p className={styles.text}>
        Anti-Money Laundering – комплекс мер по противодействию отмыванию
        средств, финансированию терроризма и созданию оружия массового
        уничтожения. Эта процедура включает в себя идентификацию, хранение и
        взаимный обмен информацией о клиентах, их прибыли и транзакциях между
        финансовыми организациями и государственными ведомствами. Большинство
        классических финансовых институтов используют AML-меры для проверки
        бизнеса, работающего с наличными или использующего нал как один из
        основных активов. Также они проверяют те предприятия, которые имеют
        деньги на разных счетах, регулярно переводят их в другие страны и банки,
        покупают фьючерсы и другие инструменты для наличного расчета. Другими
        словами, под верификацию попадают все бизнесы, которые потенциально
        могут обходить финансовый мониторинг и отмывать средства.
      </p>
      <h2 className={styles.subtitle}>Что показывает проверка адреса?</h2>
      <p className={styles.text}>
        Общий риск (в процентах) – вероятность того, что адрес связан с
        нелегальной деятельностью. Источники риска – известные типы сервисов, с
        которыми адрес взаимодействовал, и процент средств принятых с / отданных
        на эти сервисы, по которым рассчитывается общий риск.
      </p>
      <h2 className={styles.subtitle}>
        Почему сервис настаивают на AML-процедурах?
      </h2>
      <p className={styles.text}>
        Если сервис не будет проводить подобные проверки, то мошенники могут
        использовать его как платформу для отмывания средств и финансирования
        терроризма. И тогда к ответственности привлекут сам сервис. Именно
        поэтому биржи и другие крупные криптовалютные компании имплементируют
        AML-требования в свой бизнес и проводят регулярные KYC-верификации.
      </p>
      <h2 className={styles.subtitle}>Как понимать оценку риска?</h2>
      <p className={styles.text}>
        — 0−25% − это чистый кошелек/транзакция; — 25−75% − это средний уровень
        риска; — 75%+ − такой кошелек/транзакция считаются рискованной Риск
        больше 50%, но я уверен, что адрес надежный. Как быть? Результаты
        проверки основаны на международных базах, которые постоянно обновляются.
        Поэтому адрес, который имел 0% риска вчера, сегодня мог получить или
        отдать актив рисковому контрагенту. В этом случае оценка риска
        изменится.
      </p>
      <h2 className={styles.subtitle}>Применение политики KYC</h2>
      <p className={styles.text}>
        Применение политики KYC (know your customer – знай своего клиента).
        Обязательная идентификация Пользователей, которым разрешено совершать
        транзакции на нашем Сервисе. Для верификации Пользователя Администрация
        вправе потребовать предоставить следующие данные: сделать фотографию
        («селфи») с документом, удостоверяющим личность гражданина: скан-копия
        лицевой и обратной сторон официального удостоверения личности с
        фотографией, то есть действительный паспорт, водительское удостоверение
        или иное национальное удостоверение личности; подтвердить место
        жительства: официальный документ, выпущенный в течение последних 3
        месяцев, с четким указанием имени и адреса клиента. Это может быть счет
        за коммунальные услуги (за воду, электричество или стационарный телефон)
        или выписка из банка. Копия должна включать в себя: полное имя, полный
        адрес проживания, дату выдачи (в пределах последних 3 месяцев), название
        органа, выдавшего документ, с официальным логотипом или печатью;
        предоставить копию лицевой и обратной сторон банковской карты и/или
        фотографию вашей банковской карты, сделанной на фоне главной страницы
        Сервиса (витрина с услугами). Для обеспечения конфиденциальности и
        безопасности должны быть видны только последние 4 цифры вашей кредитной
        карты. Допускается скрыть 3 цифры на обратной стороне карты (код CVV).
        Администрация сервиса vn-exchange предпримет шаги для подтверждения
        подлинности документов и информации, предоставленной Пользователями.
        Также будет проверяться идентификационная информация с помощью вторичных
        источников, и Администрация сервиса оставляет за собой право продолжить
        расследование случаев, для получения полной уверенности в подлинности
        предоставленной документации. Администрация сервиса оставляет за собой
        право проводить мониторинг данных Пользователя на постоянной основе, в
        особенности в тех случаях, когда его идентификационная информация была
        изменена или его деятельность показалась подозрительной (необычной для
        конкретного Пользователя). Кроме того, Администрация оставляет за собой
        право запрашивать у Пользователей актуальные документы, даже если они
        прошли проверку подлинности в прошлом.
      </p>
    </motion.div>
  );
};

export default Kyc;
