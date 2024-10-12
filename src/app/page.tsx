import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  const targetDate = new Date('2024-10-31T23:59:00');

  return (
    <main className="bg-background overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-screen h-screen bg-halloween_banner bg-cover bg-center" />
      <div className="absolute inset-0 w-screen h-screen bg-red-gradient bg-cover bg-center" />
      
      <div className="relative z-10 w-[720px] h-5/6 flex flex-col items-center justify-center text-center">  
        <div className="w-2/3 h-[300px] bg-evento_logo bg-contain bg-center mb-4 bg-no-repeat min-[600px]:h-1/2" />
        <h2 className="text-base text-secundary drop-shadow-lg mb-2">Uma noite Eclipse pra ficar na história da sua vida!</h2>
      
        <CountdownTimer targetDate={targetDate} />

        <Link href={"/"} className='px-8 py-4 bg-primary-orange rounded-full font-bold text-xl mt-6'>ADIQUIRIR INGRESSO</Link>
      </div>
    </main>
  );
}
