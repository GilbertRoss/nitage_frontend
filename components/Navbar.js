const Navbar = () => {
  const buttonClass = "py-2 px-4 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase";
  return (
    <>
      <div className="flex justify-center w-full py-4 gap-2">
        <div className="navbar bg-base-100 px-64">
          <div className="flex-1">
            <a href="#">
              <img
                src="/nitage_logo.png"
                alt="Nitage Logo"
                width={200}
                height={200}
              />
            </a>  
          </div>
          <div className="flex-none">
          <button onClick={() => { window.location.replace('/login'); sessionStorage.clear();}} className={buttonClass}>Logout</button>
</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
