const Footer_2 = () => {
  return (
    <footer class="bg-[#0069a3] h-full bg-white shadow dark:bg-[#0069a3] ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="./" class="flex items-center mb-4 sm:mb-0">
                    <img src="./src/components/assets/logo.png" class="h-8 mr-3" alt="Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UAM HelloDev!</span>
                </a>
                <ul class="flex flex-wrap items-center mb-4 text-sm font-medium text-white sm:mb-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-4 border-gray-200 sm:mx-auto" />
            <span class="block text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  );
};

export default Footer_2;