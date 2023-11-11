import Char from '@/components/Char/Char';
import Footer from '@/components/Main/Footer';
import Topper from '@/components/Main/Topper';

export function CharPage() {
  return (
    <>
      <Topper title="캐릭터 커스텀" />
      <Char />
      <Footer />
    </>
  );
}

export default CharPage;
