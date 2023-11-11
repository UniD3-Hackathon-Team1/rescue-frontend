import Link from 'next/link';
import styles from '@/components/Main/Footer.module.css';

const footerLink = [
  {
    title: '리더보드',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 21l8 0" />
    <path d="M12 17l0 4" />
    <path d="M7 4l10 0" />
    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
    <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          </svg>,
    link: '/leaderboard',
  },
  {
    title: '캐릭터',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>,
    link: '/char',
  },
  {
    title: '퀘스트',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
          </svg>,
    link: '/result',
  },
  {
    title: '신고함',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-report" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
    <path d="M12 8l0 3" />
    <path d="M12 14l0 .01" />
          </svg>,
    link: '/main',
  },
  {
    title: '프로필',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>,
    link: '/profile',
  },
];

export function Footer() {
  return (
    <div className="w-full border border-gray-300 rounded-lg divide-x flex flex-row mt-10">
      {
        footerLink.map((t) => (
          <Link href={t.link} className="w-1/5 aspect-square">
            <button type="button" key={t.title} className={`w-full p-2 aspect-square flex flex-col items-center justify-between hover:bg-[#00000010] ${styles.EachButton}`}>
              <div className="h-[calc(100%-24px)] w-[90%]">
                {t.icon}
              </div>
              <div className=" text-gray-700 text-sm mt-1 font-bold">{t.title}</div>
            </button>
          </Link>
        ))
      }
    </div>
  );
}

export default Footer;
