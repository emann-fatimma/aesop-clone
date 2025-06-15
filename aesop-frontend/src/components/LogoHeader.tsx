export default function LogoHeader() {
  return (
    <>
      {/* Logo - Desktop only */}
      <div className="relative top-10 left-10 hidden lg:block flex justify-center">
        <h1 className="text-5xl font-serif">
          Aēsop.
        </h1>
      </div>

      {/* Mobile Logo */}
      <div className="lg:hidden p-5 text-center">
        <h1 className="text-3xl font-serif">
          Aēsop.
        </h1>
      </div>
    </>
  );
}