document.getElementById("header").innerHTML = `
  <header class="bg-blue-700 text-white flex flex-col md:flex-row justify-between items-center px-6 py-4">
    <div class="flex items-center gap-3">
      <i class="fas fa-gamepad text-3xl"></i>
      <h1 class="text-xl font-semibold">VideoGamesMVP</h1>
    </div>
    <nav class="flex flex-wrap justify-center md:justify-end gap-5 mt-3 md:mt-0 items-center">
      <a href="index.html" class="hover:underline">Novedades</a>
      <a href="PS5.html" class="hover:underline">PS5</a>
      <a href="PS4.html" class="hover:underline">PS4</a>
      <a href="Nintendo.html" class="hover:underline">Nintendo Switch</a>
      <a href="Juegos.html" class="hover:underline">Juegos</a>
      <a href="contacto.html" class="hover:underline">Contacto</a>
      <div class="flex items-center gap-3 ml-2">
        <i class="fas fa-shopping-cart hover:text-gray-200 cursor-pointer"></i>
        <i class="fas fa-heart hover:text-gray-200 cursor-pointer"></i>
      </div>
    </nav>
  </header>
`;
