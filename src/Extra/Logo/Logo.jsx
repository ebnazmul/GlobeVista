const Logo = () => {
  return (
    <div>
      <img className="hidden lg:block" src="/globevista.png" alt="GlobeVista" />
      <img className="lg:hidden h-[75px]" src="/globevistamobile.png" alt="GlobeVista" />
    </div>
  );
};

export default Logo;
