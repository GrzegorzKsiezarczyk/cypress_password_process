QA Task Scenarious:

1.Dashboard_change_password.spec.js -process changing password of account- veryfy status demo mode on/off

2.Dashboard_change_password_demo_mode.spec.js  -process changing password of account- veryfy validation and status demo mode

In the project I used Page Object Model.

All scenarious are in folder: cypress/integration/Test_scenarios


Commands to use:
npx cypress run --browser chrome --headed --no-exit  --spec cypress_code/cypress_code/cypress/integration/Test_scenarios/Dashboard_change_password.spec.js

npx cypress run --browser chrome --headed --no-exit  --spec cypress_code/cypress_code/cypress/integration/Test_scenarios/Dashboard_change_password_demo_mode.spec.js
