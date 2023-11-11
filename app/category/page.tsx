import Topper from '@/components/Main/Topper';
import { CategoryComponent } from '../../components/Category/Category';

export default function Category() {
  return (
    <div className="w-full flex flex-col">
      <Topper hideProfile title="카테고리 선택" />
      <CategoryComponent />
    </div>
  );
}
