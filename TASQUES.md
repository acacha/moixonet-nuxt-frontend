# Pàgina de registre

- Objectiu: Crear nova pàgina de registre

- Components UI necessaris
  - CardwithToolbar: inclou el formulari registre

TDD:
- Primer escriure Test Cypress E2E. Especificacions:
  - Posar data-test als objectes/subcomponents interactuables:
    - Nom usuari: register_username_input_field
    - Email: register_email_input_field
    - Paraula de pas: register_password_input_field
    - Confirmació Paraula de pas: register_password_confirmation_input_field
    - Botó registrar: register_submit_button
    - Link a Login: login_link
  - Guest users can see Page
  - Logged users redirected to /
  - Testos de validació:
    - email obligatori i tipus email
    - Username obligatori
    - Paraula de pas mínim 8 caràcters
    - Confirmació paraula de pas igual a paraula de pas original
  - Comprovar errors snackbar  
  - Test de registre:
    - Type username   
    - Type email
    - Type password and password confirmation
    - Click on submit button
    - Assert redirect to /home
    - Assert username (same a first step) is seen on /home page   
- Unit Test: 
  - Register Page
    - Similar a Login page
- Component RegisterForm
