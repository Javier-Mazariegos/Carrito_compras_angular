# Angular Project

Este archivo README proporciona las instrucciones necesarias para clonar, configurar y ejecutar el proyecto de Angular en un entorno de desarrollo local.

---

## Requisitos previos

Antes de comenzar, tener instalados los siguientes componentes:

1. **Node.js** (versión 16 o superior):
   - Descarge e instale desde [Node.js](https://nodejs.org/).

2. **Angular CLI** (versión 15 o superior):
   ```bash
   npm install -g @angular/cli
   ```

3. **Git** (opcional, pero recomendado para clonar el repositorio):
   - Descarge e instale desde [Git](https://git-scm.com/).

---

## Configuración del proyecto

### 1. Clonar el repositorio

Clonar el repositorio en la máquina local usando Git:

```bash
git clone https://github.com/Javier-Mazariegos/Carrito_compras_angular
```

Cambiar al directorio del proyecto:

```bash
cd Carrito_compras_angular/carrito_compras
```

### 2. Instalar dependencias

Instalar las dependencias necesarias del proyecto:

```bash
npm install
```

Este comando descargará todos los módulos necesarios definidos en el archivo `package.json`.

---

## Ejecución del proyecto

### 1. Ejecutar en modo desarrollo

Para iniciar el servidor de desarrollo, ejecutar el siguiente comando:

```bash
ng serve
```

Por defecto, la aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

---

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
src/
 |-- app/                  
    |-- components/        # Componentes principales de la aplicación (autenticación, carrito, confirmación, detalle producto, proceso de pago y productos.
    |-- guards/            # Guards para controlar el acceso a rutas en la aplicación.
    |-- models/            # Las clases que representan estructuras de datos utilizadas en la aplicación.
    |-- services/          # Clases diseñadas para manejar la lógica de negocio y la comunicación con fuentes externas de datos.

```

## Recursos adicionales

- [Documentación oficial de Angular](https://angular.io/)
- [Angular CLI](https://angular.io/cli)
- [Node.js](https://nodejs.org/)

---

## Contacto

Desarrollador:

- **Nombre:** Javier Mazariegos
- **Correo electrónico:** javiermazariegos@ufm.edu
