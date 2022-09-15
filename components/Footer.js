const Footer = () => {
  return (
	  <div class="justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          Gennaio
        </h5>
        <div class="text-gray-700 text-base mb-4">
          <div class="flex">
            <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
              <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                An item
              </li>
              <li class="px-6 py-2 border-b border-gray-200 w-full">
                A second item
              </li>
              <li class="px-6 py-2 border-b border-gray-200 w-full">
                A third item
              </li>
              <li class="px-6 py-2 border-b border-gray-200 w-full">
                A fourth item
              </li>
              <li class="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
