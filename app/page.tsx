// import Link from 'next/link';
// import MatrixAnimation from '../components/MatrixAnimation';

// export default function Home() {
//   return (
//     <div>
      
//       <h1>Bienvenue sur Peeknum!</h1>
//       <Link href="/login">Go to Login</Link>
//       <MatrixAnimation />
//     </div>
//   );
// }


import Link from 'next/link';
import MatrixAnimation from '../components/MatrixAnimation';

export default function Home() {
  return (
    <div>
      <MatrixAnimation />
      <h1>Bienvenue sur Peeknum!</h1>
      <Link href="/login">Go to Login</Link>
    </div>
  );
}
