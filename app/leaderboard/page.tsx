import { LeaderboardComponent } from '@/components/Leaderboard/Leaderboard';
import Footer from '@/components/Main/Footer';
import Topper from '@/components/Main/Topper';

export default function Leaderboard() {
    return (
        <div>
            <Topper title="랭킹" />
            <LeaderboardComponent />
            <Footer />
        </div>
    );
}
