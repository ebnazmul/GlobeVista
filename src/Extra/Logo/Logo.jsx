const Logo = () => {
  return (
    <div>
      <img className="hidden lg:block" src="/globevista.png" alt="GlobeVista" />
      <img className="lg:hidden" src="/globevistamobile.png" alt="GlobeVista" />
    </div>
  );
};

export default Logo;
