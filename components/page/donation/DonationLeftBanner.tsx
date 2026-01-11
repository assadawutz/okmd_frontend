export default function DonationLeftBanner({
  name = "OKMD",
}: {
  name?: string;
}) {
  return (
    <div
      className="
        col-span-12 lg:col-span-4 
        hidden 
        lg:flex
        items-start 
        justify-center 
        relative 
        min-h-[400px] lg:min-h-full
      "
      style={{
        backgroundImage: "url('/images/donation.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <h1
        className="
          absolute top-0 w-full 
          right-10
          pt-6 md:pt-10 lg:pt-14 xl:pt-20 
          text-white text-center 
          leading-tight
        "
      >
        {/* Donate */}
        <span
          className="
            block 
            text-right
            font-extrabold
            text-4xl 
            md:text-6xl  
            lg:text-7xl  
            xl:text-8xl 
            2xl:text-9xl
            text-shadow-strong
          "
        >
          Donate
        </span>

        {/* to */}
        <span
          className="
            block 
            mt-1 
            text-right
            font-light 
            text-xl 
            md:text-3xl 
            lg:text-4xl 
            xl:text-5xl
            text-shadow
          "
        >
          to
        </span>

        {/* OKMD */}
        <span
          className="
            block 
            mt-1 
            text-right
            font-extrabold 
            text-5xl 
            md:text-7xl 
            lg:text-8xl  
            xl:text-9xl
            2xl:text-[10rem]
            text-shadow-strong
          "
        >
          {name}
        </span>
      </h1>
    </div>
  );
}
