import Footer from '@/components/Main/Footer';
import Topper from '@/components/Main/Topper';
import Result from '@/components/Result/Result';

export function ResultPage() {
  return (
    <>
      <Topper title="나의 퀘스트" />
      <Result />
      <Footer />
    </>
  );
}

export default ResultPage;
