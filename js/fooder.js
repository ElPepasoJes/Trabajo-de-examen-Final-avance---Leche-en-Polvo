document.getElementById("footer").innerHTML = `
    <footer class="bg-gray-900 text-gray-200 py-10 px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
       
        <div>
          <h3 class="text-lg font-semibold mb-3">VideoGamesMVP</h3>
          <p>La mejor página para comprar videojuegos.</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">Enlaces rápidos</h3>
          <ul class="space-y-1">
            <li><a href="#" class="hover:underline">Inicio</a></li>
            <li><a href="#" class="hover:underline">Productos</a></li>
            <li><a href="#" class="hover:underline">Servicios</a></li>
            <li><a href="#" class="hover:underline">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">Contacto</h3>
          <p>
            <i class="fas fa-map-marker-alt mr-2"></i>Calle VideojuegosWVP 123
          </p>
          <p><i class="fas fa-phone mr-2"></i>+51 74390375</p>
          <p><i class="fas fa-envelope mr-2"></i>videojuegosmvp@gmail.com</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">Síguenos</h3>
          <div class="flex space-x-3 text-xl mb-4">
            <i class="fab fa-facebook hover:text-blue-500 cursor-pointer"></i>
            <i class="fab fa-twitter hover:text-sky-400 cursor-pointer"></i>
            <i class="fab fa-instagram hover:text-pink-500 cursor-pointer"></i>
            <i class="fab fa-tiktok hover:text-gray-400 cursor-pointer"></i>
          </div>

          <div class="flex">
            <input
              type="email"
              placeholder="Tu email..."
              class="flex-grow px-3 py-2 rounded-l-md text-gray-900 outline-none"
            />
            <button class="bg-sky-500 hover:bg-sky-600 px-4 rounded-r-md">
              <i class="fas fa-paper-plane text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </footer
`;