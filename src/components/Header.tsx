import Link from "next/link"
import Image from 'next/image';
import Logo from "../../public/next.svg";

export const Header:React.FC = () => {
  return <header className="navbar bg-slate-600 text-cyan-400 rounded-xl pr-3 pl-3">
    <div className="navbar-start px-3">
      <Image
        priority
        src={Logo}
        alt="Picture of the author"
        width={100}
        height={100}
      />
    </div>
    <div className="navbar-end">
      <div className="px-3">
        <Link href="/">Home</Link>
      </div>
      <div className="px-3">
        <Link href="/blog">Blog</Link>
      </div>
      <div className="px-3">
        <Link href="/login">Login</Link>
      </div>
    </div>
  </header>
}