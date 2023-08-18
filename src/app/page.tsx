import Image from 'next/image'
import styles from './page.module.css';
import Header from '@/components/elements/header/header';
import Footer from '@/components/elements/footer/footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
   );
  }