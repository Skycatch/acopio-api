# Acopio API

API to connect to collection centers db

*API para conectarse a la base de datos de centros de acopio*

## API Documentation / *Documentación del API*


### productos / GET (_products_)

- url: `/productos/`
- method / *método*: GET
- url params / *parámetros de la url*: _none_
- success reponse / *respuesta exitosa*:
  - code / *código*: `200`
  - content / *contenido*:
  ```
    [
      {
        nombreProducto: <string>,
        idProductos: <int>,
        idCentroDeAcopio: <int>, // center id
        ultimaFechaActualizacion: <date>, // last update date
        estadoProducto: <boolean> // product state
      },
      ...
    ]
  ```

### acopios / GET (_collection centers_)

- url: `/acopios/`
- method / *método*: GET
- url params / *parámetros de la url*: _none_
- success reponse / *respuesta exitosa*:
  - code / *código*: `200`
  - content / *contenido*:
  ```
    [
      {
        idCentroDeAcopio: <int>, // center
        nombreCentroDeAcopio: <string>, // center name
        direccionCentroDeAcopio: <text>, // center address
        ultimaFechaActualizacion: <date>,
        estadoProducto: <boolean>
      },
      ...
    ]
  ```

### acopios/:id / GET (_collection centers_)

- url: `/acopios/:id`
- method / *método*: GET
- url params / *parámetros de la url*:
  - `id` <int>: id for the collection center / _id del centro de acopio_
- success reponse / *respuesta exitosa*:
  - code / *código*: `200`
  - content / *contenido*:
  ```
    {
      idCentroDeAcopio: <int>, // center
      nombreCentroDeAcopio: <string>, // center name
      direccionCentroDeAcopio: <text>, // center address
      ultimaFechaActualizacion: <date>,
      estadoProducto: <boolean>
    }
  ```

### acopios/ POST (_collection centers_)

- url: `/acopios/`
- method: POST
- post params / *parámetros del mensaje*:
  - `nombreCentroDeAcopio`: <string> (required / *requerido*)
    Gathering center name / *nombre del centro de acopio*
  - `direccionDentroDeAcopio`: <string> (required / *requerido*)
    Gathering center address / *dirección del centro de acopio*
  - `estadoDeAcopio`: <boolean> (optional / *opcional*, default: `true`)
    Flag indicating if item is still needed / *Bandera indicando si el producto es aún requerido
- success reponse / *respuesta exitosa*:
  - code / *código*: `201`
  - content / *contenido*:
  ```
    {
      idCentroDeAcopio: <int>, // center
      nombreCentroDeAcopio: <string>, // center name
      direccionCentroDeAcopio: <text>, // center address
      ultimaFechaActualizacion: <date>,
      estadoProducto: <boolean>
    }
  ```
- headers / *encabezados*
  - requires authentication / *requiere autenticación*

### acopios/:id PUT (_collection centers_)

- url: `/acopios/:id`
- method: PUT
- url params / *parámetros de la url*
  - `id` <int>: id for the collection center / _id del centro de acopio_
- post params / *parámetros del mensaje*:
  - `nombreCentroDeAcopio`: <string> (optional / *opcional*)
    Gathering center name / *nombre del centro de acopio*
  - `direccionDentroDeAcopio`: <string> (optional / *opcional*)
    Gathering center address / *dirección del centro de acopio*
  - `estadoDeAcopio`: <boolean> (optional / *opcional*, default: `true`)
    Flag indicating if item is still needed / *Bandera indicando si el producto es aún requerido
- success reponse / *respuesta exitosa*:
  - code / *código*: `200`
  - content / *contenido*:
  ```
    {
      idCentroDeAcopio: <int>, // center
      nombreCentroDeAcopio: <string>, // center name
      direccionCentroDeAcopio: <text>, // center address
      ultimaFechaActualizacion: <date>,
      estadoProducto: <boolean>
    }
- headers / *encabezados*
  - requires authentication / *requiere autenticación*

### acopios/:id/productos PUT (_collection centers/products_)

- url: `/acopios/:id/productos`
- method: GET
- url params / *parámetros de la url*
  - `id` <int>: id for the collection center / _id del centro de acopio_
- success reponse / *respuesta exitosa*:
  - code / *código*: `200`
  - content / *contenido*:
  ```
    [
      {
        nombreProducto: <string>,
        idProductos: <int>,
        idCentroDeAcopio: <int>, // center id
        ultimaFechaActualizacion: <date>, // last update date
        estadoProducto: <boolean> // product state
      },
      ...
    ]
  ```


#### users/

-----

## Authentication

TBD

------

## Running the project / *Cómo correr el proyecto*

With docker-compose: `docker-compose up`
Without docker, you should set the environment variables and use `npm start`

*Con docker-compose*: `docker-compose up`
*Sin docker, agrega las variables de ambiente y usa*: `npm start`

## Configuration / *Configuración*

Everything is through environment variables. Check `env.dist` for the
required values and `config/config.js` for all of the available
overrides.

*Todo se hace por variables de ambiente. Revisa `env.dist` para los
valores requeridos y `config/config.js` para ver todos los valores que
se pueden cambiar.*
