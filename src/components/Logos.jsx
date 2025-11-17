export default function Logos(){
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Shopee_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/29/ASOS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Zara_Logo.svg",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">Trusted by brands worldwide</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-8 opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="h-9 w-auto mx-auto"/>
          ))}
        </div>
      </div>
    </section>
  );
}
