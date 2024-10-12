"use client";

import { useEffect, useState } from 'react';

// Defina um tipo para as props
interface CountdownTimerProps {
  targetDate: Date; // A propriedade targetDate deve ser um objeto Date
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>(''); // Especificar que timeLeft é uma string

  useEffect(() => {
    const updateTimer = () => {
      const currentDate = new Date();
      let time = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000); // Usar getTime para comparar as datas
      if (time <= 0) {
        setTimeLeft("O evento começou!");
        clearInterval(timer);
        return;
      }
      setTimeLeft(formatTime(time));
      time--;
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (seconds: number): string => { // Especificar que seconds é um número e o retorno é uma string
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${days} Dias ${hours} Horas ${minutes} Minutos ${secs} Segundos`;
  };

  return (
    <div className="text-center my-4 text-primary">
      <h3 className="text-2xl text-primary font-bold uppercase">{timeLeft}</h3>
    </div>
  );
};

export default CountdownTimer;
