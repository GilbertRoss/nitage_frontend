const Navbar = () => {
  return (
    <>
      <header>
        <div class="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div class="flex items-center space-x-2">
            <a href="#">
              <img
                src="/nitage_logo.png"
                alt="Nitage Logo"
                width={100}
                height={100}
              />
            </a>
          </div>
          <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
            <a
              href="#"
              class="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
            >
              {" "}
              Login{" "}
            </a>
            <a
              href="#"
              class="rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700"
            >
              {" "}
              Sign Up{" "}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
