const { Builder, By, until } = require('selenium-webdriver');

async function testLogin() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navega a la página de inicio de sesión
    await driver.get('http://localhost:3000'); // Asegúrate de usar la URL correcta

    // Encuentra el campo de email dentro del formulario de login
    await driver.wait(until.elementLocated(By.id('login-email')), 10000);
    const emailField = await driver.findElement(By.id('login-email'));
    await emailField.sendKeys('jeffcoplin03@gmail.com');

    // Encuentra el campo de contraseña dentro del formulario de login
    const passwordField = await driver.findElement(By.id('login-password'));
    await passwordField.sendKeys('1230654');

    // Encuentra el botón de enviar dentro del formulario de login y haz clic
    const submitButton = await driver.findElement(By.id('login-submit'));
    await submitButton.click();

    // Espera hasta que se muestre el mensaje de éxito o la siguiente acción
    await driver.wait(until.alertIsPresent(), 10000); // Cambia esto si usas otro indicador de éxito
    const alertText = await driver.switchTo().alert().getText();
    console.log('Resultado:', alertText);

    // Validación del resultado
    if (alertText.includes('Inicio de sesión exitoso')) {
      console.log('La prueba fue exitosa');
    } else {
      console.log('La prueba falló');
    }
  } catch (error) {
    console.error('Error durante la prueba:', error);
  } finally {
    // Cierra el navegador
    await driver.quit();
  }
}

testLogin();
