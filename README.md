# Microservicio de Pagos

## Descripción
El microservicio de pagos es fundamental para gestionar las transacciones financieras en la aplicación. Su principal función es procesar los pagos realizados por los usuarios al realizar un pedido, garantizando un flujo de trabajo seguro y eficiente. Este microservicio integra la API de **Stripe** para facilitar los pagos y garantizar una experiencia de usuario fluida.

## Funcionalidades
- **Procesar Pagos**: Permite a los usuarios realizar pagos para completar sus órdenes utilizando diferentes métodos de pago (tarjeta de crédito, débito, etc.) a través de la API de Stripe.
- **Verificar Estado del Pago**: Proporciona la capacidad de verificar el estado de un pago específico (completado, pendiente, fallido).
- **Gestionar Reembolsos**: Facilita el proceso de reembolso en caso de cancelación de un pedido o problemas con el pago, utilizando las funciones de reembolso de Stripe.
- **Notificaciones de Pago**: Envía notificaciones sobre el estado de los pagos a otros microservicios y usuarios.

## Tecnologías Utilizadas
- **NestJS**: Framework para construir aplicaciones del lado del servidor eficientes y escalables.
- **PostgreSQL**: Sistema de gestión de bases de datos utilizado para almacenar la información de los pagos.
- **Stripe API**: Proporciona herramientas para procesar pagos y gestionar transacciones de forma segura.
- **TypeScript**: Lenguaje de programación que proporciona tipado estático, mejorando la calidad del código.
- **Docker**: Facilita la creación y gestión de contenedores para ejecutar el microservicio de manera aislada.
- **NATS**: Sistema de mensajería utilizado para la comunicación asíncrona con otros microservicios, como el de órdenes.

## Instalación
Para instalar y ejecutar el microservicio de pagos, sigue estos pasos:

### 1. Clonar el Repositorio
Clona el repositorio del microservicio:
```bash
git clone https://github.com/TrujiDev/payment-microservice.git
cd payment-microservice
```

### 2. Instalar Dependencias
Instala las dependencias necesarias utilizando npm:
```bash
npm install
```

### 3. Configuración del Entorno
Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias:
```env
DATABASE_URL=postgres://user:password@localhost:5432/mydatabase
NATS_URL=nats://localhost:4222
STRIPE_SECRET_KEY=sk_test_4eC39HqLyjWDarjtT1zdp7dc  # Sustituye con tu clave secreta de Stripe
```

### 4. Ejecutar el Microservicio
Finalmente, ejecuta el microservicio:
```bash
npm run start
```

## Uso
El microservicio de pagos expone las siguientes rutas:

- **POST /payments**: Procesa un nuevo pago. Se espera un cuerpo de solicitud que contenga detalles del pago, como el monto y el método de pago.
- **GET /payments/:id**: Obtiene el estado de un pago específico por su ID.
- **POST /payments/refund**: Gestiona un reembolso para un pago existente.

## Mantenimiento
Para mantener el microservicio actualizado, asegúrate de:
- Revisar y aplicar actualizaciones de seguridad a las dependencias.
- Realizar pruebas regulares para asegurar el correcto funcionamiento del servicio.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este microservicio, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`).
3. Haz un commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Haz push a la branch (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.
