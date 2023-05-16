import React from "react";
import Providers from "../Providers";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }) {
  const router = useRouter;

  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Link
            href="/"
            className=" gap-2 text-stone-500 hover:text-stone-800 transition-colors"
          >
            <span className="">Home</span>
          </Link>
          <div>{children}</div>;
        </Providers>
      </body>
    </html>
  );
}

// export default function AuthLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <Providers>
//           <main className="">
//             <div className="">
//               <Link
//                 href="/"
//                 className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"
//               >
//                 <span className="uppercase font-medium">Home</span>
//               </Link>
//               <div className="">
//                 <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
//                   Sign in to your account
//                 </h1>
//               </div>
//               <div className=" bg-white shadow-2xl shadow-gray-900/10">
//                 {children}
//               </div>
//             </div>
//           </main>
//         </Providers>
//       </body>
//     </html>
//   );
// }
