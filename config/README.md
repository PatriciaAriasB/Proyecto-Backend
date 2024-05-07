# Proyecto Backend: Sistema de Gestión de Productos, Categorías, Pedidos y Usuarios

Este proyecto implementa un conjunto de API endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en productos, categorías, pedidos y usuarios, así como funcionalidades adicionales como filtrado, autenticación y seeder para generar datos de ejemplo.

## Tecnologías Utilizadas

- Node.js
- Express.js
- JWT para autenticación
- bcrypt para encriptación de contraseñas

## Endpoints de Productos

- `POST /productos`: Crea un nuevo producto.
- `PUT /productos/:id`: Actualiza un producto existente por su ID.
- `DELETE /productos/:id`: Elimina un producto existente por su ID.
- `GET /productos`: Obtiene todos los productos junto con la(s) categoría(s) a la que pertenecen.
- `GET /productos/:id`: Obtiene un producto específico por su ID.
- `GET /productos?nombre=[nombre]`: Filtra productos por nombre.
- `GET /productos?precio=[precio]`: Filtra productos por precio.
- `GET /productos?orden=desc`: Ordena productos de mayor a menor precio.

## Endpoints de Categorías

- `POST /categorias`: Crea una nueva categoría.
- `PUT /categorias/:id`: Actualiza una categoría existente por su ID.
- `DELETE /categorias/:id`: Elimina una categoría existente por su ID.
- `GET /categorias`: Obtiene todas las categorías junto con los productos que tienen.
- `GET /categorias/:id`: Obtiene una categoría específica por su ID.
- `GET /categorias?nombre=[nombre]`: Filtra categorías por nombre.

## Endpoints de Pedidos

- `GET /pedidos`: Obtiene todos los pedidos junto con los productos que contienen.
- `POST /pedidos`: Crea un nuevo pedido.

## Endpoints de Usuarios

- `POST /usuarios/registro`: Registra un nuevo usuario en el sistema utilizando bcrypt para encriptar la contraseña.
- `POST /usuarios/login`: Inicia sesión de usuario utilizando bcrypt para verificar la contraseña y JWT para generar tokens de acceso.
- `GET /usuarios/perfil`: Obtiene la información del usuario conectado junto con sus pedidos y los productos que contienen cada pedido.
- `POST /usuarios/logout`: Cierra sesión de usuario.

## Validación de Campos

Se implementa validación en los endpoints de creación de productos y usuarios para asegurarse de que todos los campos necesarios estén rellenados. Si algún campo está faltante, se devuelve un mensaje de error.

## Autenticación

Se requiere autenticación para realizar operaciones de creación, actualización y eliminación de productos, categorías y pedidos. Los usuarios deben iniciar sesión para acceder a estos endpoints.

## Seeders

Se incluye un seeder para generar 5 productos de ejemplo en la base de datos.

## Contribución

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un problema o envía un pull request.

By: Patricia Arias Burdeos.

