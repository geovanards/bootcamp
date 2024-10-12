import Link from 'next/link'
// import ScrollButton from './ScrollButton';

export default function Footer () {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <footer className='absolute w-full bg-background-orange -z-50'>
            <div className='absolute w-full h-full bg-footer-gradient -z-10'></div>
            <div className='widget-hidden mt-16 flex justify-between gap-x-8 gap-y-16 flex-row px-12'>
                <div className='flex flex-col gap-4'>
                    <span className='uppercase font-black text-base text-primary-orange'>Nosso local</span>
                    
                    <span className='uppercase font-seminold text-base text-secundary'>SEPN 707/907 - Asa Norte, Brasília - DF, 70790-075</span>
                </div>

                <div className='flex flex-col gap-4 items-end'>
                    <span className='uppercase font-black text-base text-primary-orange'>Siga nos em nossas redes sociais</span>
                    
                    <ul className='flex h-10 items-center gap-4'>
                        <li className='h-6 w-6 float-left'>
                            <a href='https://twitter.com' target="_blank" className='h-full w-full float-left'>
                                <svg className='fill-secundary hover:fill-primary-orange' viewBox="0 0 512 512">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                                </svg>
                            </a>
                        </li>

                        <li className='h-6 w-6 float-left'>
                            <a href='https://www.youtube.com/' target="_blank" className='h-full w-full float-left'>
                                <svg className='fill-secundary hover:fill-primary-orange' viewBox="2 2 45 45">
                                    <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/>
                                </svg>
                            </a>
                        </li>
                        
                        <li className='h-6 w-6 float-left'>
                            <a href='https://www.tiktok.com/' target="_blank" className='h-full w-full float-left'>
                                <svg className='fill-secundary hover:fill-primary-orange' viewBox="0 0 32 32">
                                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <Link href='/' className='bg-eclipse_logo_orange center bg-center bg-contain bg-no-repeat w-32 h-32 right-0 left-0 block mx-auto z-50 my-6'></Link>
        
            <p className='relative block w-full text-center text-secundary opacity-75 text-base font-normal mb-4'>&copy; 2024 Eclipse Events All rights reserved.</p>

            <div className='relative block w-full right-0 pb-6 mb:8 pt-10 lg:pb-2 lg:pt-0 lg:-mt-16 lg:absolute lg:right-24 lg:w-fit xl:right-48'>
                {/* <button className='absolute mx-auto right-0 left-0 w-fit -mt-6 text-right uppercase text-secundary-white opacity-50 text-base lg:static lg:mt-0 lg:' onClick={() => scrollToTop()}>
                    Back to top
                </button> */}
            </div>
            
        </footer>
    )
};