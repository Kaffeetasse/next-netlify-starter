export default function Footer() {
  return (
    <>
      <footer className="flex flex-initial justify-center items-center bg-gray-400">
        Powered by <img src="/nextjs.svg" alt="NEXT.JS Logo" className="object-contain h-10 px-3" /> and{' '}
        <img src="/tailwindcss.svg" alt="TailwindCSS Logo" className="object-contain h-13 px-3" />
      </footer>
    </>
  );
}
