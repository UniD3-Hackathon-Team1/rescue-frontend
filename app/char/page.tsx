import Char from '@/components/Char/Char';
import Footer from '@/components/Main/Footer';
import Topper from '@/components/Main/Topper';

export default function CharPage() {
  return (
    <div className="w-full flex flex-col">
      <Topper title="캐릭터 커스텀" />
      <Char />
      <Footer />
    </div>
  );
}

// export default CharPage;
