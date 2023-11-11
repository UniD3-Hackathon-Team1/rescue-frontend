import Footer from '@/components/Main/Footer';
import Topper from '@/components/Main/Topper';
import Result from '@/components/Result/Result';

export default function ResultPage() {
  return (
    <div className="w-full flex flex-col">
      <Topper title="나의 퀘스트" />
      <Result />
      <Footer />
    </div>
  );
}
