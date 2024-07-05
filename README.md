# Generador de Números de Tarjeta de Crédito

Este proyecto es una aplicación web que genera números de tarjetas de crédito aleatorios para Visa, MasterCard y Amex. La aplicación incluye una interfaz visual creada con HTML y CSS, y la lógica para generar y validar los números de tarjeta está implementada en JavaScript.

## Funcionamiento del Programa

### Interfaz de Usuario

La interfaz de usuario está construida utilizando HTML y CSS. Consiste en un formulario simple donde el usuario puede seleccionar el tipo de tarjeta de crédito y generar un número de tarjeta aleatorio. La página tiene un menú desplegable para seleccionar el tipo de tarjeta, un botón para generar el número y un área donde se muestra el número generado.

### Generación de Números de Tarjeta

La lógica para generar números de tarjetas de crédito está implementada en JavaScript. Aquí se explica cómo funciona:

1. **Selección del Tipo de Tarjeta**: El usuario selecciona el tipo de tarjeta (Visa, MasterCard, Amex) desde un menú desplegable.
2. **Generación del Número de Tarjeta**:
   - Dependiendo del tipo de tarjeta seleccionado, se utiliza un prefijo específico (por ejemplo, "4" para Visa) y una longitud determinada (por ejemplo, 16 dígitos para Visa y MasterCard, 15 para Amex).
   - Se genera un número de tarjeta aleatorio concatenando el prefijo con dígitos generados aleatoriamente hasta alcanzar la longitud deseada.
3. **Validación con el Algoritmo de Luhn**:
   - El número de tarjeta generado se valida utilizando el algoritmo de Luhn, que es un método estándar para verificar la validez de los números de tarjetas de crédito.
   - Si el número generado no es válido según el algoritmo de Luhn, se genera un nuevo número hasta obtener uno válido.
4. **Mostrar el Número de Tarjeta**: Una vez que se genera un número de tarjeta válido, se muestra en la interfaz de usuario.

### Validación del Número de Tarjeta

El algoritmo de Luhn se utiliza para validar los números de tarjeta generados. Este algoritmo verifica la validez de un número de tarjeta de crédito mediante una serie de cálculos matemáticos:

- Se revisan los dígitos del número de tarjeta desde el último hasta el primero.
- Se duplican cada dos dígitos, y si el resultado de la duplicación es mayor que 9, se restan 9.
- Se suman todos los dígitos, incluidos los duplicados y ajustados.
- Si la suma total es divisible por 10, el número de tarjeta es válido.

## Cómo Ejecutar el Programa

1. Abre el archivo `index.html` en tu navegador web.
2. Selecciona el tipo de tarjeta de crédito en el menú desplegable.
3. Haz clic en el botón "Generar Número" para obtener un número de tarjeta de crédito aleatorio y válido.

## Notas

- Este proyecto es solo para fines educativos y no debe utilizarse para actividades fraudulentas.
- Los números generados cumplen con las reglas de formato de las tarjetas de crédito, pero no son números de tarjeta reales.
