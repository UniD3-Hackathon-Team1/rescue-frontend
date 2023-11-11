import Topper from '@/components/Main/Topper';
import { CategoryComponent } from '../../components/Category/Category';

export default function Category() {
  return (
    <>
      <Topper hideProfile title="카테고리 선택" />
      <CategoryComponent />
    </>
  );
}
