import '../styles/globals.css'
import { Ubuntu} from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { ReCaptchaProvider } from "next-recaptcha-v3";



const ubuntu = Ubuntu({
  subsets : ['latin'],
  weight : ['400','700'],
  variable : '--font-ubuntu'
});

export default function App({ Component, pageProps }) {
  return(
    <ReCaptchaProvider useEnterprise>
      <main className={`${ubuntu.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics></Analytics>
      </main>
    </ReCaptchaProvider>
  )
}
